"use client";

// This is a Client Component because it keeps the newly created notes
// and the confirmation message in useState.

import { useState } from "react";
import { Note } from "@/types/note";
import NoteForm from "./NoteForm";
import NoteCard from "./NoteCard";
import EmptyState from "./EmptyState";
import ConfirmationMessage from "./ConfirmationMessage";

interface CreateNotePanelProps {
  tags: string[];
}

export default function CreateNotePanel({ tags }: CreateNotePanelProps) {
  const [createdNotes, setCreatedNotes] = useState<Note[]>([]);
  const [successMessage, setSuccessMessage] = useState("");

  // Called by NoteForm after the form passes validation.
  function handleCreateNote(title: string, content: string, tag: string) {
    const newNote: Note = {
      id: Date.now(), // a simple unique number
      title: title,
      content: content,
      tag: tag,
      date: new Date().toISOString().slice(0, 10), // today's date as YYYY-MM-DD
    };

    // There is no backend, so the new note is only added to React state.
    setCreatedNotes([newNote, ...createdNotes]);
    setSuccessMessage(`Note "${title}" was created successfully!`);
  }

  // Remove a note by keeping every note except the one with this id.
  function handleDeleteNote(id: number) {
    setCreatedNotes(createdNotes.filter((note) => note.id !== id));
    setSuccessMessage("Note deleted.");
  }

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
        {successMessage && (
          <div className="mb-5">
            <ConfirmationMessage message={successMessage} />
          </div>
        )}
        <NoteForm tags={tags} submitLabel="Create Note" onSubmit={handleCreateNote} />
      </div>

      <div>
        <h2 className="mb-4 text-lg font-semibold text-slate-800">
          Notes created this session ({createdNotes.length})
        </h2>
        {createdNotes.length === 0 ? (
          <EmptyState
            title="No new notes yet"
            message="Fill in the form to create your first note. It will appear here."
          />
        ) : (
          <div className="grid gap-4">
            {createdNotes.map((note) => (
              <NoteCard key={note.id} note={note} onDelete={handleDeleteNote} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
