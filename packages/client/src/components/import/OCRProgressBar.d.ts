import type { OCRStage } from '../../services/ocrService';
interface OCRProgressBarProps {
    stage: OCRStage;
    progress: number;
    pageNumber?: number;
    totalPages?: number;
}
export default function OCRProgressBar({ stage, progress, pageNumber, totalPages, }: OCRProgressBarProps): import("react").JSX.Element;
export {};
