interface DeadlineEvent {
    label: string;
    date: string;
    status: 'overdue' | 'due_soon' | 'upcoming' | 'completed';
    amount?: number;
}
interface DeadlineCalendarProps {
    deadlines: DeadlineEvent[];
}
export default function DeadlineCalendar({ deadlines }: DeadlineCalendarProps): import("react").JSX.Element;
export {};
