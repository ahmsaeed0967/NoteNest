import { TeamMember } from "@/types/note";

interface FooterProps {
  members: TeamMember[];
}

export default function Footer({ members }: FooterProps) {
  return (
    <footer className="mt-auto bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-slate-400">
        <p className="font-medium text-white">
          NoteNest — CS4032 Web Programming, Assignment 3
        </p>
        <p className="mt-1">
          Made by{" "}
          {members.map((member, index) => (
            <span key={member.rollNumber}>
              {member.name}
              {index < members.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
