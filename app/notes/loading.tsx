// Shown automatically by Next.js while a page inside /notes is loading.
export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-slate-500">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600" />
      <p className="mt-4 text-sm">Loading notes...</p>
    </div>
  );
}
