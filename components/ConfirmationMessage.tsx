interface ConfirmationMessageProps {
  message: string;
}

export default function ConfirmationMessage({ message }: ConfirmationMessageProps) {
  return (
    <div className="rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm font-medium text-green-700">
      ✓ {message}
    </div>
  );
}
