import type { Metadata } from "next";
import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";

export const metadata: Metadata = {
  title: "Page Not Found | NoteNest",
  description: "The page or note you are looking for does not exist.",
};

// Shown for unknown URLs and when notFound() is called (e.g. /notes/999).
export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl space-y-6 py-10 text-center">
      <p className="text-6xl font-bold text-blue-600">404</p>
      <EmptyState
        title="Page not found"
        message="Sorry, the page or note you are looking for does not exist."
      />
      <div className="flex flex-wrap justify-center gap-3">
        <Button href="/">Go to Home</Button>
        <Button href="/notes" variant="secondary">
          View all notes
        </Button>
      </div>
    </div>
  );
}
