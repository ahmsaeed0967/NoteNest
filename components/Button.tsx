import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string; // if given, the button works as a link to another page
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  href,
  onClick,
  type = "button",
  variant = "primary",
}: ButtonProps) {
  // Pick the colours based on the variant.
  let colours = "bg-blue-600 text-white hover:bg-blue-700";
  if (variant === "secondary") {
    colours = "border border-slate-300 bg-white text-slate-700 hover:bg-slate-100";
  }

  const classes = `inline-block rounded-lg px-4 py-2 text-sm font-medium ${colours}`;

  // A button with an href is shown as a next/link.
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={`${classes} cursor-pointer`}>
      {children}
    </button>
  );
}
