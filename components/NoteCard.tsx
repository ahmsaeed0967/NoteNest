import Link from "next/link";
import { Note } from "@/types/note";
import { tagColours } from "@/data/notes";

interface NoteCardProps {
  note: Note;
  href?: string; // link to the note's detail page (optional)
  isFavourite?: boolean;
  onToggleFavourite?: (id: number) => void; // only given on the notes listing page
  onDelete?: (id: number) => void; // only given on the create page
}

export default function NoteCard({
  note,
  href,
  isFavourite = false,
  onToggleFavourite,
  onDelete,
}: NoteCardProps) {
  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md">
      <div className="flex items-start justify-between gap-2">
        {/* Each tag has its own colour, taken from the tagColours object */}
        <span className={`rounded-full px-3 py-1 text-xs font-medium ${tagColours[note.tag]}`}>
          {note.tag}
        </span>

        {/* The star button is only shown when a toggle function is passed in */}
        {onToggleFavourite && (
          <button
            type="button"
            onClick={() => onToggleFavourite(note.id)}
            className="cursor-pointer text-xl text-amber-400 hover:scale-110"
            aria-label={isFavourite ? "Remove from favourites" : "Add to favourites"}
          >
            {isFavourite ? "★" : "☆"}
          </button>
        )}

        {/* The delete button is only shown when a delete function is passed in */}
        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(note.id)}
            className="cursor-pointer rounded-md px-2 py-1 text-xs font-medium text-red-600 hover:bg-red-50"
          >
            Delete
          </button>
        )}
      </div>

      <h3 className="mt-3 text-lg font-semibold text-slate-800">
        {href ? (
          <Link href={href} className="hover:text-blue-600">
            {note.title}
          </Link>
        ) : (
          note.title
        )}
      </h3>

      <p className="mt-2 line-clamp-3 flex-1 text-sm text-slate-600">{note.content}</p>

      <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
        <span>
          {note.date}
          {note.image && " · 📷 photo"}
        </span>
        {href && (
          <Link href={href} className="font-medium text-blue-600 hover:underline">
            Open note →
          </Link>
        )}
      </div>
    </div>
  );
}
