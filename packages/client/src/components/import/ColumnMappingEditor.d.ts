import { ColumnMapping } from '../../services/csvParser';
interface ColumnMappingEditorProps {
    headers: string[];
    mapping: ColumnMapping;
    targetType: '1099b' | '1099da';
    onChange: (mapping: ColumnMapping) => void;
}
export default function ColumnMappingEditor({ headers, mapping, targetType, onChange, }: ColumnMappingEditorProps): import("react").JSX.Element;
export {};
