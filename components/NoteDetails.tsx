"use client";

// This is a Client Component because the user can switch to edit mode,
// and the edited note is saved in useState.

import { useState } from "react";
import Image from "next/image";
import { Note } from "@/types/note";
import { tagColours } from "@/data/notes";
import NoteForm from "./NoteForm";
import Button from "./Button";
import ConfirmationMessage from "./ConfirmationMessage";

interface NoteDetailsProps {
  note: Note;
  tags: string[];
}

export default function NoteDetails({ note, tags }: NoteDetailsProps) {
  const [currentNote, setCurrentNote] = useState(note);
  const [isEditing, setIsEditing] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Called by NoteForm after the form passes validation.
  function handleSaveNote(title: string, content: string, tag: string) {
    // Make an updated copy of the note and store it in state.
    setCurrentNote({ ...currentNote, title: title, content: content, tag: tag });
    setIsEditing(false);
    setSuccessMessage("Note updated successfully!");
  }

  function handleStartEditing() {
    setSuccessMessage("");
    setIsEditing(true);
  }

  if (isEditing) {
    return (
      <div className="rounded-xl border border-slate-200 bg-white p-5 sm:p-8">
        <h1 className="mb-6 text-2xl font-bold text-slate-800">Edit Note</h1>
        <NoteForm
          tags={tags}
          submitLabel="Save Changes"
          initialNote={currentNote}
          onSubmit={handleSaveNote}
        />
        <div className="mt-3">
          <Button variant="secondary" onClick={() => setIsEditing(false)}>
            Cancel
          </Button>
        </div>
      </div>
    );
  }

  return (
    <article className="rounded-xl border border-slate-200 bg-white p-5 sm:p-8">
      {successMessage && (
        <div className="mb-5">
          <ConfirmationMessage message={successMessage} />
        </div>
      )}

      {/* Only some notes have an image, so we check first */}
      {currentNote.image && (
        <Image
          src={currentNote.image}
          alt={`Picture for the note: ${currentNote.title}`}
          width={800}
          height={400}
          className="mb-6 w-full rounded-lg"
        />
      )}

      <div className="flex flex-wrap items-center gap-3 text-sm">
        <span className={`rounded-full px-3 py-1 font-medium ${tagColours[currentNote.tag]}`}>
          {currentNote.tag}
        </span>
        <span className="text-slate-400">{currentNote.date}</span>
      </div>

      <h1 className="mt-4 text-2xl font-bold text-slate-800 sm:text-3xl">{currentNote.title}</h1>
      <p className="mt-4 whitespace-pre-line leading-7 text-slate-600">{currentNote.content}</p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button onClick={handleStartEditing}>Edit Note</Button>
        <Button href="/notes" variant="secondary">
          ← Back to all notes
        </Button>
      </div>
    </article>
  );
}
