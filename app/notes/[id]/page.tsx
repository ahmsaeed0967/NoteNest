import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NoteDetails from "@/components/NoteDetails";
import { notes, tags } from "@/data/notes";

// In Next.js 16, params is a Promise, so we "await" it to read the id.
interface NotePageProps {
  params: Promise<{ id: string }>;
}

// Each note page gets its own title and description.
export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { id } = await params;
  const note = notes.find((item) => item.id === Number(id));

  if (!note) {
    return { title: "Note not found | NoteNest", description: "This note does not exist." };
  }

  return {
    title: `${note.title} | NoteNest`,
    description: note.content.slice(0, 150),
  };
}

// Server Component: it reads the id from the URL and finds the note in the mock data.
export default async function NotePage({ params }: NotePageProps) {
  const { id } = await params;
  const note = notes.find((item) => item.id === Number(id));

  // Unknown id: show the not-found page.
  if (!note) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl">
      <NoteDetails note={note} tags={tags} />
    </div>
  );
}
