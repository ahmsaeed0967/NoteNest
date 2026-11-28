"use client";

// This is a Client Component because the search text, selected tag, sort order
// and favourites are stored in useState and change when the user types or clicks.

import { useState } from "react";
import { Note } from "@/types/note";
import NoteCard from "./NoteCard";
import SearchBar from "./SearchBar";
import TagFilter from "./TagFilter";
import EmptyState from "./EmptyState";
import Button from "./Button";

interface NotesExplorerProps {
  notes: Note[];
  tags: string[];
}

export default function NotesExplorer({ notes, tags }: NotesExplorerProps) {
  const [searchText, setSearchText] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [sortOrder, setSortOrder] = useState("newest");
  const [favouriteIds, setFavouriteIds] = useState<number[]>([]);
  const [showFavouritesOnly, setShowFavouritesOnly] = useState(false);

  // Add the note to favourites, or remove it if it is already there.
  function handleToggleFavourite(id: number) {
    if (favouriteIds.includes(id)) {
      setFavouriteIds(favouriteIds.filter((favouriteId) => favouriteId !== id));
    } else {
      setFavouriteIds([...favouriteIds, id]);
    }
  }

  function handleClearFilters() {
    setSearchText("");
    setSelectedTag("All");
    setSortOrder("newest");
    setShowFavouritesOnly(false);
  }

  // Step 1: keep only the notes that match the search, the tag and the favourites option.
  const filteredNotes = notes.filter((note) => {
    const search = searchText.toLowerCase();
    const matchesSearch =
      note.title.toLowerCase().includes(search) || note.content.toLowerCase().includes(search);
    const matchesTag = selectedTag === "All" || note.tag === selectedTag;
    const matchesFavourite = !showFavouritesOnly || favouriteIds.includes(note.id);
    return matchesSearch && matchesTag && matchesFavourite;
  });

  // Step 2: sort a copy of the filtered list. ([...] makes a copy, so the original is not changed.)
  // Dates are written as "YYYY-MM-DD", so comparing them as text puts them in date order.
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (sortOrder === "oldest") {
      return a.date.localeCompare(b.date);
    }
    if (sortOrder === "title") {
      return a.title.localeCompare(b.title);
    }
    if (sortOrder === "title-desc") {
      return b.title.localeCompare(a.title);
    }
    return b.date.localeCompare(a.date); // "newest"
  });

  return (
    <div className="space-y-6">
      <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4 sm:p-5">
        <SearchBar
          value={searchText}
          onChange={setSearchText}
          placeholder="Search notes by title or content..."
        />
        <TagFilter tags={tags} selectedTag={selectedTag} onSelectTag={setSelectedTag} />
        <div className="flex flex-wrap items-center gap-3">
          <label htmlFor="sort" className="text-sm font-medium text-slate-600">
            Sort by
          </label>
          <select
            id="sort"
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value)}
            className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none focus:border-blue-500"
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="title">Title (A–Z)</option>
            <option value="title-desc">Title (Z–A)</option>
          </select>
          <Button
            variant={showFavouritesOnly ? "primary" : "secondary"}
            onClick={() => setShowFavouritesOnly(!showFavouritesOnly)}
          >
            ★ Favourites only ({favouriteIds.length})
          </Button>
          <Button variant="secondary" onClick={handleClearFilters}>
            Clear filters
          </Button>
        </div>
      </div>

      <p className="text-sm text-slate-500">
        Showing {sortedNotes.length} of {notes.length} notes
      </p>

      {sortedNotes.length === 0 ? (
        <EmptyState
          title="No notes found"
          message="Try a different search word, choose another tag or clear the filters."
        />
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {sortedNotes.map((note) => (
            <NoteCard
              key={note.id}
              note={note}
              href={`/notes/${note.id}`}
              isFavourite={favouriteIds.includes(note.id)}
              onToggleFavourite={handleToggleFavourite}
            />
          ))}
        </div>
      )}
    </div>
  );
}
