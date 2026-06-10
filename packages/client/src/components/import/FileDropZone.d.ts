interface FileDropZoneProps {
    accept: string;
    onFile: (file: File) => void;
    label: string;
    sublabel?: string;
    disabled?: boolean;
    maxSizeMB?: number;
    /** Show a "Take a photo" button that opens the native camera. Default false. */
    enableCamera?: boolean;
    /** Allow multiple files to be dropped/selected at once. Default false. */
    multiple?: boolean;
}
export default function FileDropZone({ accept, onFile, label, sublabel, disabled, maxSizeMB, enableCamera, multiple, }: FileDropZoneProps): import("react").JSX.Element;
export {};
