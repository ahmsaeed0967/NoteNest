interface TagFilterProps {
  tags: string[];
  selectedTag: string;
  onSelectTag: (tag: string) => void;
}

export default function TagFilter({ tags, selectedTag, onSelectTag }: TagFilterProps) {
  // "All" is added at the start so the user can remove the filter.
  const allOptions = ["All", ...tags];

  return (
    <div className="flex flex-wrap gap-2">
      {allOptions.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onSelectTag(tag)}
          className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium ${
            selectedTag === tag
              ? "bg-blue-600 text-white"
              : "border border-slate-300 bg-white text-slate-600 hover:bg-slate-100"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
