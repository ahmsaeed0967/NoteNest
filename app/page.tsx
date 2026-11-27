import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import NoteCard from "@/components/NoteCard";
import { notes, tags } from "@/data/notes";

export const metadata: Metadata = {
  title: "Home | NoteNest",
  description: "Create, edit, search and tag your notes in one simple place.",
};

// Server Component: this page only displays mock data, so no 'use client'.
export default function HomePage() {
  // Show the 3 most recent notes on the home page.
  const recentNotes = notes.slice(0, 3);

  return (
    <div className="space-y-12">
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Keep all your notes in one simple place
          </h1>
          <p className="mt-4 text-slate-600">
            Write notes, give them tags, search through them in seconds and mark your favourites.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/notes">Browse Notes</Button>
            <Button href="/create" variant="secondary">
              + Create a Note
            </Button>
          </div>
        </div>
        <Image
          src="/images/notes-illustration.svg"
          alt="Illustration of a stack of notes"
          width={400}
          height={300}
          className="mx-auto w-full max-w-md"
          preload
        />
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-3xl font-bold text-blue-600">{notes.length}</p>
          <p className="mt-1 text-sm text-slate-500">Notes saved</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-3xl font-bold text-blue-600">{tags.length}</p>
          <p className="mt-1 text-sm text-slate-500">Tags to organise notes</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-5">
          <p className="text-3xl font-bold text-blue-600">{notes[0].date}</p>
          <p className="mt-1 text-sm text-slate-500">Last note written</p>
        </div>
      </section>

      <section>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-2xl font-bold text-slate-900">Recent notes</h2>
          <Button href="/notes" variant="secondary">
            View all notes
          </Button>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {recentNotes.map((note) => (
            <NoteCard key={note.id} note={note} href={`/notes/${note.id}`} />
          ))}
        </div>
      </section>
    </div>
  );
}
