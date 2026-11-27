import type { Metadata } from "next";
import NotesExplorer from "@/components/NotesExplorer";
import { notes, tags } from "@/data/notes";

export const metadata: Metadata = {
  title: "All Notes | NoteNest",
  description: "Browse all notes, search by title or content, filter by tag and pick favourites.",
};

// Server Component: the page itself only passes the mock data to the
// NotesExplorer Client Component, which handles search, filter and favourites.
export default function NotesPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">All Notes</h1>
      <p className="mt-2 mb-6 text-slate-600">
        Search your notes, filter them by tag and star the ones you like.
      </p>
      <NotesExplorer notes={notes} tags={tags} />
    </div>
  );
}
