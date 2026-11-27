"use client";

// This is a Client Component because it uses useState for the input values
// and event handlers (onChange, onSubmit) that run in the browser.

import { useState } from "react";
import { Note } from "@/types/note";
import Button from "./Button";

interface NoteFormProps {
  tags: string[];
  submitLabel: string;
  initialNote?: Note; // given when we are editing an existing note
  onSubmit: (title: string, content: string, tag: string) => void;
}

export default function NoteForm({ tags, submitLabel, initialNote, onSubmit }: NoteFormProps) {
  // Controlled inputs: React state holds the value of every field.
  // When editing, the fields start with the note's current values.
  const [title, setTitle] = useState(initialNote ? initialNote.title : "");
  const [content, setContent] = useState(initialNote ? initialNote.content : "");
  const [tag, setTag] = useState(initialNote ? initialNote.tag : "");

  // One error message for each field ("" means no error).
  const [titleError, setTitleError] = useState("");
  const [contentError, setContentError] = useState("");
  const [tagError, setTagError] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // stop the browser from reloading the page

    // Check each field and remember if anything is wrong.
    let isValid = true;

    if (title.trim() === "") {
      setTitleError("Title is required.");
      isValid = false;
    } else if (title.trim().length < 3) {
      setTitleError("Title must be at least 3 characters long.");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (content.trim() === "") {
      setContentError("Content is required.");
      isValid = false;
    } else if (content.trim().length < 10) {
      setContentError("Content must be at least 10 characters long.");
      isValid = false;
    } else {
      setContentError("");
    }

    if (tag === "") {
      setTagError("Please choose a tag.");
      isValid = false;
    } else {
      setTagError("");
    }

    // Do not submit if there is any error.
    if (!isValid) {
      return;
    }

    onSubmit(title.trim(), content.trim(), tag);

    // When creating a new note, empty the form so another note can be added.
    if (!initialNote) {
      setTitle("");
      setContent("");
      setTag("");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-slate-700">
          Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="e.g. Shopping list"
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        {titleError && <p className="mt-1 text-sm text-red-600">{titleError}</p>}
      </div>

      <div>
        <label htmlFor="content" className="block text-sm font-medium text-slate-700">
          Content
        </label>
        <textarea
          id="content"
          rows={6}
          value={content}
          onChange={(event) => setContent(event.target.value)}
          placeholder="Write your note here..."
          className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        {contentError && <p className="mt-1 text-sm text-red-600">{contentError}</p>}
      </div>

      <div>
        <label htmlFor="tag" className="block text-sm font-medium text-slate-700">
          Tag
        </label>
        <select
          id="tag"
          value={tag}
          onChange={(event) => setTag(event.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        >
          <option value="">-- Select a tag --</option>
          {tags.map((tagName) => (
            <option key={tagName} value={tagName}>
              {tagName}
            </option>
          ))}
        </select>
        {tagError && <p className="mt-1 text-sm text-red-600">{tagError}</p>}
      </div>

      <Button type="submit">{submitLabel}</Button>
    </form>
  );
}
