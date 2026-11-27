import type { Metadata } from "next";
import CreateNotePanel from "@/components/CreateNotePanel";
import { tags } from "@/data/notes";

export const metadata: Metadata = {
  title: "Create Note | NoteNest",
  description: "Write a new note with a title, content and tag.",
};

// Server Component: the form itself lives in the CreateNotePanel Client Component.
export default function CreatePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900">Create a Note</h1>
      <p className="mt-2 mb-6 text-slate-600">
        Fill in all the fields below. Your note will be added to the list on the right.
      </p>
      <CreateNotePanel tags={tags} />
    </div>
  );
}
