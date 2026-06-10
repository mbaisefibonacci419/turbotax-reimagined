import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTaxReturnStore, SECTIONS } from '../../store/taxReturnStore';
import { ChevronDown, AlertCircle, Trash2 } from 'lucide-react';
import { SIDEBAR_TOOLS, hasMinimumIncomeData } from '../../data/sidebarTools';
import { deleteReturn } from '../../api/client';
import { flushAutoSave } from '../../store/taxReturnStore';
import { toast } from 'sonner';
import { useWarningsByStepId } from '../../hooks/useWarnings';
import type { ValidationWarning } from '../../services/warningService';
import { useRef } from 'react';

type NavStatus = 'done' | 'in-progress' | 'pending';

const SECTION_NAV_LABELS: Record<string, string> = {
  my_info: 'My info',
  income: 'Income',
  self_employment: 'Other tax situations',
  deductions: 'Deductions',
  credits: 'Credits',
  state: 'State',
  review: 'Final review',
  finish: 'File',
};

const FEDERAL_SECTIONS = ['income', 'self_employment', 'deductions', 'credits'];

function StatusIcon({ status }: { status: NavStatus }) {
  if (status === 'done') {
    return (
      <svg className="shrink-0" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <circle cx="9" cy="9" r="9" fill="var(--color-ui-positive)" />
        <path d="M5.5 9.2 l2.3 2.3 L12.7 6.3" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (status === 'in-progress') {
    return (
      <svg className="shrink-0" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
        <circle cx="9" cy="9" r="7" fill="none" stroke="var(--color-container-border-primary)" strokeWidth="2" />
        <path d="M 9 2 A 7 7 0 0 1 16 9" fill="none" stroke="var(--color-ui-positive)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg className="shrink-0" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="7" fill="none" stroke="var(--color-text-tertiary)" strokeWidth="1.5" strokeDasharray="2 2" />
    </svg>
  );
}

function SmallCheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" className="shrink-0">
      <circle cx="6" cy="6" r="6" fill="var(--color-ui-positive)" />
      <path d="M3.5 6.2l1.8 1.8L8.5 4.5" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WarningBadge({ warnings }: { warnings: ValidationWarning[] }) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLSpanElement>(null);

  if (warnings.length === 0) return null;

  return (
    <span
      ref={anchorRef}
      className="relative shrink-0 cursor-pointer"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <AlertCircle className="w-3.5 h-3.5" style={{ color: 'var(--warning-500, #F59E0B)' }} />
      {open && (
        <div className="fixed z-50 w-56 p-2 text-xs rounded-lg shadow-lg"
          style={{
            background: 'var(--color-container-background-primary)',
            border: '1px solid var(--color-container-border-primary)',
            left: anchorRef.current ? anchorRef.current.getBoundingClientRect().right + 8 : 0,
            top: anchorRef.current ? anchorRef.current.getBoundingClientRect().top - 8 : 0,
          }}
        >
          {warnings.slice(0, 3).map((w, i) => (
            <div key={i} className="flex items-start gap-1.5 mb-1">
              <AlertCircle className="w-3 h-3 shrink-0 mt-0.5" style={{ color: '#D97706' }} />
              <span style={{ color: 'var(--color-text-secondary)' }}>{w.message}</span>
            </div>
          ))}
          {warnings.length > 3 && (
            <div style={{ color: 'var(--color-text-tertiary)' }}>+{warnings.length - 3} more</div>
          )}
        </div>
      )}
    </span>
  );
}

interface StepSidebarProps {
  onStepClick?: () => void;
}

export default function StepSidebar({ onStepClick }: StepSidebarProps) {
  const { returnId, taxReturn, activeToolId, currentStepIndex, highestStepVisited, goToStep, getVisibleSteps, setActiveTool } = useTaxReturnStore();
  const navigate = useNavigate();
  const hasData = hasMinimumIncomeData(taxReturn);
  const visibleSteps = getVisibleSteps();
  const visibleStepIds = new Set(visibleSteps.map((s) => s.id));
  const currentStep = visibleSteps[currentStepIndex];
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const warningsByStepId = useWarningsByStepId();

  const handleDelete = () => {
    if (!returnId) return;
    flushAutoSave();
    deleteReturn(returnId);
    toast.success('All data has been permanently deleted.');
    navigate('/');
  };

  const sectionSteps = SECTIONS.map((section) => ({
    ...section,
    steps: visibleSteps.filter((s) => s.section === section.id && !s.id.startsWith('transition_')),
  })).filter((s) => s.steps.length > 0);

  useEffect(() => {
    if (currentStep) {
      setExpandedSections((prev) => {
        const next = new Set(prev);
        next.add(currentStep.section);
        if (FEDERAL_SECTIONS.includes(currentStep.section)) {
          next.add('__federal__');
        }
        return next;
      });
    }
  }, [currentStep?.section]);

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) next.delete(sectionId);
      else next.add(sectionId);
      return next;
    });
  };

  const handleClick = (stepId: string) => {
    goToStep(stepId);
    onStepClick?.();
  };

  const currentSection = currentStep?.section ?? 'my_info';

  function getSectionStatus(sectionId: string): NavStatus {
    const section = sectionSteps.find((s) => s.id === sectionId);
    if (!section) return 'pending';
    const indices = section.steps.map((s) => visibleSteps.indexOf(s));
    const allComplete = indices.every((i) => i < currentStepIndex);
    if (allComplete && indices.length > 0) return 'done';
    if (section.steps.some((s) => s.id === currentStep?.id)) return 'in-progress';
    return 'pending';
  }

  function getFederalStatus(): NavStatus {
    const statuses = FEDERAL_SECTIONS.map(getSectionStatus);
    if (statuses.every((s) => s === 'done')) return 'done';
    if (statuses.some((s) => s === 'in-progress')) return 'in-progress';
    if (statuses.some((s) => s === 'done')) return 'in-progress';
    return 'pending';
  }

  const isFederalExpanded = expandedSections.has('__federal__') || FEDERAL_SECTIONS.includes(currentSection);
  const federalSelected = FEDERAL_SECTIONS.includes(currentSection);

  function renderStepItems(steps: typeof visibleSteps, indentPx: number) {
    return steps.map((step) => {
      const stepIndex = visibleSteps.indexOf(step);
      const isActive = step.id === currentStep?.id;
      const isPast = stepIndex < currentStepIndex;

      return (
        <button
          key={step.id}
          onClick={() => handleClick(step.id)}
          aria-current={isActive ? 'step' : undefined}
          className="w-full text-left flex items-center gap-2"
          style={{
            padding: '5px var(--space-r)',
            paddingLeft: `${indentPx}px`,
            fontSize: '13px',
            color: isActive ? 'var(--color-action-standard)' : isPast ? 'var(--color-text-secondary)' : 'var(--color-text-tertiary)',
            fontWeight: isActive ? 'var(--weight-demi)' : 'var(--weight-regular)',
            cursor: 'pointer',
          }}
        >
          {isPast && <SmallCheckIcon />}
          <span className="truncate">{step.label}</span>
          {warningsByStepId.has(step.id) && (
            <WarningBadge warnings={warningsByStepId.get(step.id)!.warnings} />
          )}
        </button>
      );
    });
  }

  function renderExpandableSection(sectionId: string, label: string, indentPx: number = 16) {
    const section = sectionSteps.find((s) => s.id === sectionId);
    if (!section) return null;
    const isSelected = currentSection === sectionId;
    const isExpanded = expandedSections.has(sectionId);
    const hasSteps = section.steps.length > 0;

    return (
      <div key={sectionId}>
        <button
          onClick={() => hasSteps ? toggleSection(sectionId) : handleClick(section.steps[0]?.id)}
          className="w-full text-left flex items-center justify-between"
          style={{
            padding: 'var(--space-xs) var(--space-r)',
            paddingLeft: `${indentPx}px`,
            fontSize: 'var(--text-body-3)',
            color: 'var(--color-text-primary)',
            fontWeight: isSelected ? 'var(--weight-demi)' : 'var(--weight-medium)',
            background: isSelected ? 'var(--color-container-background-accent-selected)' : 'transparent',
            position: 'relative',
            cursor: 'pointer',
          }}
        >
          {isSelected && (
            <span style={{ position: 'absolute', left: `${indentPx - 8}px`, top: 0, bottom: 0, width: '3px', background: 'var(--color-container-border-accent)', borderRadius: '2px' }} />
          )}
          <span>{label}</span>
          {hasSteps && (
            <ChevronDown
              className="w-3.5 h-3.5 shrink-0"
              style={{
                color: 'var(--color-text-tertiary)',
                transform: isExpanded ? 'rotate(180deg)' : undefined,
                transition: 'transform 160ms',
              }}
            />
          )}
        </button>

        {isExpanded && renderStepItems(section.steps, indentPx + 16)}
      </div>
    );
  }

  return (
    <nav role="navigation" aria-label="Tax return sections" className="w-full h-full flex flex-col overflow-y-auto">
      {/* Section label */}
      <div style={{
        padding: 'var(--space-r) var(--space-r) var(--space-xs)',
        fontSize: 'var(--text-body-4)',
        fontWeight: 'var(--weight-demi)',
        color: 'var(--color-text-secondary)',
        textTransform: 'uppercase',
        letterSpacing: '0.02em',
      }}>
        2025 Taxes
      </div>

      {/* My Info — expandable with sub-steps */}
      <NavItem
        label="My info"
        status={getSectionStatus('my_info')}
        selected={currentSection === 'my_info'}
        hasChildren
        expanded={expandedSections.has('my_info')}
        onClick={() => toggleSection('my_info')}
      />
      {expandedSections.has('my_info') && (
        <div>
          {renderStepItems(sectionSteps.find((s) => s.id === 'my_info')?.steps ?? [], 40)}
        </div>
      )}

      {/* Federal — expandable group */}
      <NavItem
        label="Federal"
        status={getFederalStatus()}
        selected={federalSelected}
        hasChildren
        expanded={isFederalExpanded}
        onClick={() => toggleSection('__federal__')}
      />

      {isFederalExpanded && (
        <div>
          {FEDERAL_SECTIONS.map((secId) => {
            const label = SECTION_NAV_LABELS[secId] ?? sectionSteps.find((s) => s.id === secId)?.label ?? secId;
            return renderExpandableSection(secId, label, 36);
          })}
        </div>
      )}

      {/* State — expandable */}
      <NavItem
        label="State"
        status={getSectionStatus('state')}
        selected={currentSection === 'state'}
        hasChildren={(sectionSteps.find((s) => s.id === 'state')?.steps.length ?? 0) > 0}
        expanded={expandedSections.has('state')}
        onClick={() => toggleSection('state')}
      />
      {expandedSections.has('state') && (
        <div>
          {renderStepItems(sectionSteps.find((s) => s.id === 'state')?.steps ?? [], 40)}
        </div>
      )}

      {/* Final review — expandable */}
      <NavItem
        label="Final review"
        status={getSectionStatus('review')}
        selected={currentSection === 'review'}
        hasChildren={(sectionSteps.find((s) => s.id === 'review')?.steps.length ?? 0) > 0}
        expanded={expandedSections.has('review')}
        onClick={() => toggleSection('review')}
      />
      {expandedSections.has('review') && (
        <div>
          {renderStepItems(sectionSteps.find((s) => s.id === 'review')?.steps ?? [], 40)}
        </div>
      )}

      {/* File — expandable */}
      <NavItem
        label="File"
        status={getSectionStatus('finish')}
        selected={currentSection === 'finish'}
        hasChildren={(sectionSteps.find((s) => s.id === 'finish')?.steps.length ?? 0) > 0}
        expanded={expandedSections.has('finish')}
        onClick={() => toggleSection('finish')}
      />
      {expandedSections.has('finish') && (
        <div>
          {renderStepItems(sectionSteps.find((s) => s.id === 'finish')?.steps ?? [], 40)}
        </div>
      )}

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--color-divider-secondary)', margin: 'var(--space-s) var(--space-r)' }} />

      {/* Tax tools — expandable */}
      <button
        onClick={() => toggleSection('__tools__')}
        className="w-full text-left flex items-center justify-between"
        style={{
          padding: 'var(--space-s) var(--space-r)',
          fontSize: 'var(--text-body-3)',
          color: 'var(--color-text-primary)',
          fontWeight: 'var(--weight-medium)',
          cursor: 'pointer',
        }}
      >
        <span>Tax tools</span>
        <ChevronDown className="w-3.5 h-3.5" style={{ color: 'var(--color-text-tertiary)', transform: expandedSections.has('__tools__') ? 'rotate(180deg)' : undefined, transition: 'transform 160ms' }} />
      </button>

      {expandedSections.has('__tools__') && (
        <div>
          {SIDEBAR_TOOLS.map((tool) => {
            const isDisabled = (tool.needsData && !hasData) ||
              (tool.type === 'navigate' && tool.stepId && !visibleStepIds.has(tool.stepId));
            const isActive = activeToolId === tool.id;
            const Icon = tool.icon;

            return (
              <button
                key={tool.id}
                onClick={() => {
                  if (isDisabled) return;
                  if (tool.type === 'navigate' && tool.stepId) {
                    goToStep(tool.stepId);
                  } else {
                    setActiveTool(tool.id);
                  }
                  onStepClick?.();
                }}
                className="w-full text-left flex items-center gap-2"
                style={{
                  padding: '5px var(--space-r)',
                  paddingLeft: '32px',
                  fontSize: 'var(--text-body-3)',
                  color: isDisabled ? 'var(--color-text-tertiary)' : isActive ? 'var(--color-action-standard)' : 'var(--color-text-primary)',
                  fontWeight: isActive ? 'var(--weight-demi)' : 'var(--weight-medium)',
                  opacity: isDisabled ? 0.5 : 1,
                  cursor: isDisabled ? 'not-allowed' : 'pointer',
                }}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{tool.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Spacer */}
      <div className="flex-1 min-h-4" />

      {/* Delete data — bottom */}
      <div style={{ borderTop: '1px solid var(--color-divider-primary)', padding: 'var(--space-xs) var(--space-r)' }}>
        {!showDeleteConfirm ? (
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="w-full flex items-center gap-2 py-2 text-sm transition-colors"
            style={{ color: 'var(--color-text-tertiary)' }}
          >
            <Trash2 className="w-3.5 h-3.5" />
            Delete my data
          </button>
        ) : (
          <div className="rounded-lg p-3" style={{ background: '#FEF2F2', border: '1px solid #FECACA' }}>
            <p className="text-xs font-medium mb-1" style={{ color: '#991B1B' }}>Delete everything?</p>
            <p className="text-[11px] mb-2" style={{ color: '#7F1D1D' }}>This permanently deletes your entire return.</p>
            <div className="flex gap-2">
              <button onClick={handleDelete} className="px-2.5 py-1 text-xs font-medium bg-red-600 hover:bg-red-500 text-white rounded transition-colors">
                Delete
              </button>
              <button onClick={() => setShowDeleteConfirm(false)} className="px-2.5 py-1 text-xs font-medium transition-colors" style={{ color: 'var(--color-text-secondary)' }}>
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

function NavItem({
  label,
  status,
  selected,
  hasChildren,
  expanded,
  onClick,
}: {
  label: string;
  status: NavStatus;
  selected: boolean;
  hasChildren?: boolean;
  expanded?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left flex items-center justify-between"
      style={{
        padding: 'var(--space-s) var(--space-r)',
        fontSize: 'var(--text-body-3)',
        color: 'var(--color-text-primary)',
        fontWeight: selected ? 'var(--weight-demi)' : 'var(--weight-medium)',
        background: selected ? 'var(--color-container-background-accent-selected)' : 'transparent',
        position: 'relative',
        cursor: 'pointer',
      }}
    >
      {selected && (
        <span style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '4px', background: 'var(--color-container-border-accent)', borderRadius: '0 2px 2px 0' }} />
      )}
      <span className="flex items-center gap-2">
        <StatusIcon status={status} />
        <span>{label}</span>
      </span>
      {hasChildren && (
        <ChevronDown
          className="w-3.5 h-3.5 shrink-0"
          style={{
            color: 'var(--color-text-tertiary)',
            transform: expanded ? 'rotate(180deg)' : undefined,
            transition: 'transform 160ms',
          }}
        />
      )}
    </button>
  );
}
