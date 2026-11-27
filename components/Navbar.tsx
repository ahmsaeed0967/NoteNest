import Link from "next/link";

interface NavbarProps {
  appName: string;
}

// The list of links shown in the navbar.
const navLinks = [
  { label: "Home", href: "/" },
  { label: "All Notes", href: "/notes" },
  { label: "Create Note", href: "/create" },
  { label: "About", href: "/about" },
];

export default function Navbar({ appName }: NavbarProps) {
  return (
    <header className="border-b-4 border-blue-600 bg-slate-900 shadow-md">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between">
        <Link href="/" className="text-xl font-bold text-white">
          {appName}
        </Link>
        <ul className="flex flex-wrap gap-2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-slate-200 hover:bg-blue-600 hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
