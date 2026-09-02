import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinkClass = ({ isActive }) =>
  `text-[15px] tracking-tight transition-colors hover:text-ink ${
    isActive ? "text-ink underline underline-offset-4" : "text-ink/70"
  }`;

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-hairline">
      <div className="max-w-page mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="tracking-tightSpacing lowercase font-semibold leading-snug text-slate-800 my-6 w-full text-xl max-w-lg lg:max-w-2xl lg:text-3xl"
        >
          intuitui
        </Link>

        <nav className="hidden sm:flex items-center gap-8">
          <NavLink to="/work" className={navLinkClass}>
            Work
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>

        <button
          className="sm:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="sm:hidden border-t border-hairline px-5 py-4 flex flex-col gap-4">
          <NavLink to="/work" className={navLinkClass} onClick={() => setOpen(false)}>
            Work
          </NavLink>
          <NavLink to="/about" className={navLinkClass} onClick={() => setOpen(false)}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </nav>
      )}
    </header>
  );
}
