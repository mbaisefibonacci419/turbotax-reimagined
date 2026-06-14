import { ReactNode, useState, useEffect, useRef, useCallback, lazy, Suspense } from 'react';
import StepSidebar from './StepSidebar';
import ResizeHandle from '../common/ResizeHandle';
import NimbusAIButton from '../common/NimbusAIButton';
import FormsSkeleton from '../formsMode/FormsSkeleton';
import { useTaxReturnStore } from '../../store/taxReturnStore';
import { useChatStore } from '../../store/chatStore';
import { useLiveCalculation } from '../../hooks/useLiveCalculation';
import { useResizePanel } from '../../hooks/useResizePanel';
import { Menu, X, Info, Search, Bell, Sparkles, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../../utils/format';
import { useCommandPalette } from '../../hooks/useCommandPalette';
import { useContextExplainer } from '../../hooks/useContextExplainer';
import { useKeyboardShortcuts } from '../../hooks/useKeyboardShortcuts';
import StepNudgesBanner from '../common/StepNudgesBanner';
import KeyboardShortcutsModal from '../common/KeyboardShortcutsModal';

const LazyFormSidebar = lazy(() => import('../formsMode/FormSidebar'));
const LazyFormsViewer = lazy(() => import('../formsMode/FormsMode'));
const LazyCommandPalette = lazy(() => import('../common/CommandPalette'));
const LazyChatPanel = lazy(() => import('../chat/ChatPanel'));
const LazyAgentLayout = lazy(() => import('../agent/AgentLayout'));

interface WizardLayoutProps {
  children: ReactNode;
}

export default function WizardLayout({ children }: WizardLayoutProps) {
  const { jumpAheadWarning, dismissJumpWarning, getCurrentStep, activeToolId, calculation, viewMode, setViewMode } = useTaxReturnStore();
  const currentStep = getCurrentStep();
  const isTransitionStep = currentStep?.id.startsWith('transition_') ?? false;
  const { isAvailable: chatAvailable, isOpen: chatOpen, checkAvailability, togglePanel: toggleChat } = useChatStore();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { isOpen: paletteOpen, open: openPalette, close: closePalette } = useCommandPalette();
  useLiveCalculation();
  const mainRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLElement>(null);
  const [headerHeight, setHeaderHeight] = useState(0);
  const contextExplainerPortal = useContextExplainer(mainRef);
  const { helpOpen, closeHelp } = useKeyboardShortcuts();

  const {
    width: chatWidth,
    isDragging: chatDragging,
    startResize: startChatResize,
    resetWidth: resetChatWidth,
  } = useResizePanel({
    storageKey: 'chat',
    defaultWidth: 384,
    minWidth: 320,
    maxWidth: 600,
    side: 'right',
  });

  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
  }, [currentStep?.id]);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    checkAvailability();
  }, [checkAvailability]);

  if (viewMode === 'agent') {
    return (
      <Suspense fallback={<div className="h-screen flex items-center justify-center" style={{ background: 'var(--color-page-background)', color: 'var(--color-text-secondary)' }}>Loading agent mode...</div>}>
        <LazyAgentLayout />
      </Suspense>
    );
  }

  const federalRefund = calculation?.form1040?.refundAmount ?? 0;
  const stateAmount = 0;

  return (
    <div className="h-screen flex" style={{ background: '#F5F7FA' }}>
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          role="presentation"
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Left Navigation — TurboTax style */}
      <aside
        className={`
          fixed lg:static z-30 lg:z-auto h-full flex flex-col shrink-0
          transition-transform duration-200
          ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0
        `}
        style={{
          width: 'var(--left-nav-width)',
          minWidth: 'var(--left-nav-width)',
          background: 'var(--color-container-background-accent)',
        }}
      >
        {/* Brand */}
        <div className="p-4 flex flex-col gap-1">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 hover:opacity-80 transition-opacity"
          >
            <svg width="103" height="16" viewBox="0 0 103 16" fill="none" aria-label="TurboTax">
              <text x="0" y="13" fontFamily="var(--font-family-brand)" fontSize="14" fontWeight="700" fill="var(--color-text-primary)">
                TurboTax
              </text>
            </svg>
          </button>
          <span style={{ paddingLeft: '2px', fontSize: 'var(--text-body-4)', color: 'var(--color-text-secondary)', fontWeight: 'var(--weight-medium)' }}>
            Free edition
          </span>
        </div>

        {/* Step navigation */}
        <div className="flex-1 min-h-0 overflow-y-auto">
          {viewMode === 'forms' ? (
            <Suspense fallback={null}>
              <LazyFormSidebar />
            </Suspense>
          ) : (
            <StepSidebar onStepClick={() => setSidebarOpen(false)} />
          )}
        </div>

        {/* Bottom links */}
        <div style={{ borderTop: '1px solid var(--color-divider-secondary)', padding: 'var(--space-xs) 0' }}>
          <div className="nav-bottom-item" style={{ padding: 'var(--space-s) var(--space-r)', fontSize: 'var(--text-body-3)', color: 'var(--color-text-primary)', cursor: 'pointer' }}>
            Intuit account
          </div>
          <div className="nav-bottom-item" style={{ padding: 'var(--space-s) var(--space-r)', fontSize: 'var(--text-body-3)', color: 'var(--color-text-primary)', cursor: 'pointer' }}>
            Sign out
          </div>
        </div>
      </aside>

      {/* Main column */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Product header — TurboTax style */}
        <header
          ref={headerRef}
          className="shrink-0 flex items-center gap-4 px-4"
          style={{
            height: 'var(--product-header-height)',
            borderBottom: '1px solid var(--color-container-border-primary)',
            background: 'var(--color-container-background-primary)',
          }}
        >
          {/* Mobile menu button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-1"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          {/* Refund monitor — hidden on mobile to declutter the header */}
          <div className="hidden sm:flex items-center gap-5">
            <div className="flex flex-col">
              <span style={{ fontSize: 'var(--text-body-4)', color: 'var(--color-text-primary)' }}>Federal refund</span>
              <span style={{ fontSize: 'var(--text-body-1)', fontWeight: 'var(--weight-demi)', color: 'var(--color-ui-positive)' }}>
                {formatCurrency(federalRefund)}
              </span>
            </div>
            <div className="flex flex-col">
              <span style={{ fontSize: 'var(--text-body-4)', color: 'var(--color-text-primary)' }}>State</span>
              <span style={{ fontSize: 'var(--text-body-1)', fontWeight: 'var(--weight-demi)', color: 'var(--color-ui-positive)' }}>
                {formatCurrency(stateAmount)}
              </span>
            </div>
          </div>

          {/* Search */}
          <button
            onClick={openPalette}
            className="flex-1 max-w-[400px] mx-auto h-9 flex items-center gap-2 px-4 rounded-full"
            style={{
              border: '1px solid var(--color-input-border-primary)',
              background: 'var(--color-input-background-primary)',
              color: 'var(--color-input-placeholder)',
              fontSize: 'var(--text-body-3)',
            }}
          >
            <Search className="w-4 h-4 shrink-0" />
            <span>Search</span>
          </button>

          {/* Right nav items */}
          <div className="flex items-center gap-3">
            <button
              className="hidden sm:inline-flex items-center gap-1.5 p-2 rounded"
              style={{ color: 'var(--color-text-secondary)', fontSize: 'var(--text-body-3)' }}
              aria-label="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="hidden md:inline">Notifications</span>
            </button>
            {chatAvailable && (
              <button
                onClick={toggleChat}
                className="inline-flex items-center gap-1.5 hover:opacity-80 transition-opacity"
                style={{ color: 'var(--color-action-standard)', fontSize: 'var(--text-body-3)', fontWeight: 'var(--weight-demi)' }}
              >
                <Sparkles className="w-4 h-4" strokeWidth={2.5} />
                <span className="hidden sm:inline">Ask AI</span>
              </button>
            )}
            <button
              onClick={() => setViewMode('agent')}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md transition-colors"
              style={{
                background: 'rgb(93, 104, 111)',
                color: '#FFFFFF',
                fontSize: 'var(--text-body-4)',
                fontWeight: 'var(--weight-demi)',
              }}
            >
              <span className="hidden sm:inline">Immersive Mode</span>
              <span className="sm:hidden">Immersive</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </header>

        {/* Main content area */}
        {viewMode === 'forms' ? (
          <Suspense fallback={<FormsSkeleton />}>
            <div
              className={`flex-1 flex min-h-0 overflow-hidden ${!chatDragging ? 'transition-[margin] duration-300' : ''}`}
              style={{ marginRight: chatOpen && chatAvailable ? chatWidth : undefined }}
            >
              <LazyFormsViewer />
            </div>
          </Suspense>
        ) : (
          <main
            id="main-content"
            ref={mainRef}
            tabIndex={-1}
            className={`flex-1 overflow-y-auto focus:outline-none ${!chatDragging ? 'transition-[margin] duration-300' : ''}`}
            style={{
              marginRight: chatOpen && chatAvailable ? chatWidth : undefined,
              background: '#F5F7FA',
            }}
          >
            <div
              className="mx-4 my-4 rounded-xl flex-1"
              style={{
                background: '#FFFFFF',
                boxShadow: '0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)',
                border: '1px solid var(--color-divider-primary)',
              }}
            >
            <div
              className="mx-auto px-8 pt-8 pb-8"
              style={{ maxWidth: activeToolId === 'tax_scenario_lab' ? '1000px' : 'var(--content-max-width)' }}
            >
              {jumpAheadWarning && !isTransitionStep && !activeToolId && (
                <div className="mb-4 flex items-start gap-2.5 rounded-lg px-4 py-3"
                  style={{ background: 'rgb(var(--alert-warn-bg) / 0.55)', border: '1px solid rgb(var(--alert-warn-border) / 0.7)' }}
                >
                  <Info className="w-4 h-4 shrink-0 mt-0.5" style={{ color: 'rgb(var(--alert-warn-icon))' }} />
                  <div className="flex-1">
                    <p className="text-sm" style={{ color: 'rgb(var(--alert-warn-text))' }}>
                      You haven&apos;t filled out earlier steps yet — some fields on this page may be empty.
                    </p>
                  </div>
                  <button
                    onClick={dismissJumpWarning}
                    className="shrink-0"
                    style={{ color: 'rgb(var(--alert-warn-dismiss) / 0.6)' }}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
              {!isTransitionStep && !activeToolId && <StepNudgesBanner />}
              {children}
            </div>
            </div>
          </main>
        )}
      </div>

      {/* Command palette */}
      {paletteOpen && (
        <Suspense fallback={null}>
          <LazyCommandPalette open={paletteOpen} onClose={closePalette} />
        </Suspense>
      )}

      {/* Floating AI button */}
      {chatAvailable && <NimbusAIButton />}

      {/* Chat panel overlay */}
      {chatAvailable && (
        <Suspense fallback={null}>
          <LazyChatPanel
            panelWidth={chatWidth}
            isDragging={chatDragging}
            onResizeStart={startChatResize}
            onResizeReset={resetChatWidth}
            topOffset={headerHeight}
          />
        </Suspense>
      )}
      {contextExplainerPortal}
      <KeyboardShortcutsModal open={helpOpen} onClose={closeHelp} />
    </div>
  );
}
