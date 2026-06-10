import { useState } from 'react';
import { useTaxReturnStore } from '../../store/taxReturnStore';
import { MessageCircle, ClipboardList, ListChecks, Check, ChevronRight } from 'lucide-react';

type ModeChoice = 'interview' | 'agent' | 'forms' | null;

export default function WelcomeStep() {
  const { viewMode, setViewMode, goNext } = useTaxReturnStore();
  const [selected, setSelected] = useState<ModeChoice>(
    viewMode === 'agent' ? 'agent' : viewMode === 'forms' ? 'forms' : 'interview'
  );

  const handleContinue = () => {
    if (selected === 'agent') {
      setViewMode('agent');
    } else if (selected === 'forms') {
      setViewMode('forms');
    } else {
      setViewMode('wizard');
      goNext();
    }
  };

  return (
    <div>
      {/* Hero */}
      <div className="text-center pt-4 pb-6">
        <h1 className="text-3xl sm:text-4xl font-bold mb-3" style={{ color: 'var(--color-text-primary)' }}>
          Let's prepare your 2025 tax return
        </h1>
        <p className="text-base max-w-lg mx-auto leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
          Choose how you'd like to work. You can switch anytime.
        </p>
      </div>

      {/* Mode selection — 3 cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {/* Interview Mode */}
        <ModeCard
          selected={selected === 'interview'}
          onSelect={() => setSelected('interview')}
          icon={<ListChecks className="w-5 h-5 text-white" />}
          iconBg="#00A888"
          title="Interview"
          description="A guided step-by-step interview that walks you through each section of your tax return."
          bullets={[]}
        />

        {/* Agent Mode */}
        <ModeCard
          selected={selected === 'agent'}
          onSelect={() => setSelected('agent')}
          icon={<MessageCircle className="w-5 h-5 text-white" />}
          iconBg="var(--color-action-standard)"
          title="Agent"
          description="An AI assistant guides you conversationally, asking questions, explaining what matters, and filling in forms for you."
          bullets={[]}
        />

        {/* Forms Mode */}
        <ModeCard
          selected={selected === 'forms'}
          onSelect={() => setSelected('forms')}
          icon={<ClipboardList className="w-5 h-5 text-white" />}
          iconBg="#5D686F"
          title="Forms"
          description="Work directly with your tax forms, see every line, edit values, and view the actual IRS documents as you go."
          bullets={[]}
        />
      </div>

      <div className="flex justify-end pt-2 pb-6 sm:pb-0">
        <button
          onClick={handleContinue}
          disabled={!selected}
          className="btn-primary flex items-center gap-2"
        >
          Let's Go
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function ModeCard({
  selected,
  onSelect,
  icon,
  iconBg,
  title,
  description,
  bullets,
}: {
  selected: boolean;
  onSelect: () => void;
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <button
      type="button"
      onClick={onSelect}
      className="text-left rounded-xl p-5 transition-all duration-200 relative flex flex-col"
      style={{
        background: selected ? 'var(--color-container-background-accent)' : 'var(--color-container-background-secondary)',
        border: selected ? '2px solid var(--color-action-standard)' : '2px solid var(--color-container-border-primary)',
        boxShadow: selected ? '0 4px 12px rgba(32, 94, 163, 0.15)' : '0 1px 3px rgba(0,0,0,0.04)',
      }}
    >
      {selected && (
        <span className="absolute top-3 right-3 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: 'var(--color-action-standard)' }}>
          <Check className="w-3 h-3 text-white" />
        </span>
      )}
      <div className="flex items-center gap-3 mb-3">
        <span className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0" style={{ background: iconBg }}>
          {icon}
        </span>
        <h3 className="text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>{title}</h3>
      </div>
      <p className="text-sm leading-relaxed mb-3 flex-1" style={{ color: 'var(--color-text-secondary)' }}>
        {description}
      </p>
      <ul className="text-xs space-y-1.5" style={{ color: 'var(--color-text-tertiary)' }}>
        {bullets.map((b, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-0.5" style={{ color: iconBg }}>•</span>
            {b}
          </li>
        ))}
      </ul>
    </button>
  );
}
