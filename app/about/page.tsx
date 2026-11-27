import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "About | NoteNest",
  description: "Learn about NoteNest, its features and the team that built it.",
};

const features = [
  "Create new notes with a title, content and tag, and delete them again",
  "Edit any note from its detail page",
  "Search notes by title or content as you type",
  "Filter notes by colour-coded tags",
  "Sort notes by newest, oldest or title",
  "Mark notes as favourites and show only favourites",
  "Add a photo to a note",
  "Works on mobile, tablet and desktop screens",
];

const technologies = ["Next.js 16 (App Router)", "React 19", "TypeScript", "Tailwind CSS"];

// Server Component: this page only displays information.
export default function AboutPage() {
  return (
    <div className="space-y-10">
      <section className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">About NoteNest</h1>
          <p className="mt-4 text-slate-600">
            NoteNest is a simple notes app made for our CS4032 Web Programming assignment.
            It is frontend only: all notes are mock data stored inside the project, and every action
            updates React state.
          </p>
          <div className="mt-6">
            <Button href="/notes">Start browsing notes</Button>
          </div>
        </div>
        <Image
          src="/images/notes-illustration.svg"
          alt="Illustration of a stack of notes"
          width={400}
          height={300}
          className="mx-auto w-full max-w-sm"
        />
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Features</h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            {features.map((feature) => (
              <li key={feature}>✓ {feature}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-slate-900">Built with</h2>
          <ul className="mt-4 space-y-2 text-slate-600">
            {technologies.map((technology) => (
              <li key={technology}>• {technology}</li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-bold text-slate-900">Our Team</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.rollNumber} className="rounded-xl border border-slate-200 bg-white p-5">
              <h3 className="text-lg font-semibold text-slate-800">{member.name}</h3>
              <p className="text-sm font-medium text-blue-600">{member.rollNumber}</p>
              <p className="mt-2 text-sm text-slate-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
