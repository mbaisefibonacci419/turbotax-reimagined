import { type NAICSEntry } from '@nimbus/engine';
interface NAICSCodeSearchProps {
    value: string;
    onChange: (code: string, entry: NAICSEntry | undefined) => void;
    id?: string;
}
/**
 * Searchable NAICS code autocomplete for Schedule C Line B.
 * Searches by code number or description text. Displays SSTB badge when applicable.
 */
export default function NAICSCodeSearch({ value, onChange, id }: NAICSCodeSearchProps): import("react").JSX.Element;
export {};
