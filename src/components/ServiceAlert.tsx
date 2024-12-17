import { X } from 'lucide-react'

interface ServiceAlertProps {
  message: string
  onClose: () => void
}

/**
 * Renders a service alert component with a message and a close button.
 *
 * @param {Object} props - The component props.
 * @param {string} props.message - The message to display in the alert.
 * @param {function} props.onClose - The function to call when the close button is clicked.
 * 
 * @returns A JSX element representing the service alert.
 */

export function ServiceAlert({ message, onClose }: ServiceAlertProps) {
  return (
    <div className="relative bg-[#3C85B6] text-white p-4 mb-4">
      <div className="max-w-4xl mx-auto pr-8">
        <p className="text-sm leading-6">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:opacity-80"
        aria-label="Close alert"
      >
        <X className="h-5 w-5" />
      </button>
    </div>
  );
}

