"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { MenuIcon, X, Home, FolderOpen, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import MobileNavLink from "./MobileNavLink";

const navLinks = [
  { href: "#home", label: "Home", Icon: Home },
  { href: "#work", label: "Projects", Icon: FolderOpen },
  { href: "#contact", label: "Contact", Icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const THRESHOLD = 12;
    const handleScroll = () => {
      const y = window.scrollY || document.documentElement.scrollTop;
      setScrolled(y > THRESHOLD);
    };

    handleScroll(); // run once on load
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const closeMenu = () => setOpen(!open);

  return (
    <>
      <header
        className={clsx(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
          "bg-bgc  border-primary/10",
          scrolled
            ? "border-b shadow-[0_4px_12px_rgba(255,255,255,0.04)]"
            : "md:bg-transparent md:border-transparent"
        )}
      >
        <nav className="container-page h-14 md:h-16 lg:h-20 flex items-center justify-between">
          <Link href="/" className=" text-primary font-semibold tracking-wide">
            Luis Martinez
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <a
              href="#work"
              className="btn p-2 text-primary hover:text-light-blue focus-visible:text-light-blue active:text-light-blue"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="p-2 btn hidden md:inline text-primary hover:text-light-blue focus-visible:text-light-blue active:text-light-blue"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            onClick={closeMenu}
            className="btn md:hidden inline-flex items-center p-2 text-primary hover:text-light-blue active:text-light-blue hover:bg-primary/10"
          >
            <MenuIcon className="w-5 h-5" />
          </button>
        </nav>
      </header>

      <div className="h-14 md:h-16"></div>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={closeMenu}
        />
      )}

      <aside
        className={cn(
          "fixed top-0 right-0 z-50 h-full w-[85%] max-w-xs",
          " bg-bgc/98 border border-primary/15",
          "md:hidden transition-transform duration-250 ease-out",
          open ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between h-14 px-4 border-b border-primary">
          <span className="text-primary">Navigation</span>
          <button
            type="button"
            onClick={closeMenu}
            className="btn inline-flex items-center justify-center rounted-full p-1.5 text-primary hover:text-light-blue focus-visible:text-light-blue active:text-light-blue hover:bg-primary/30"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 px-3 pt-4 text-sm">
          {navLinks.map(({ href, label, Icon }) => (
            <MobileNavLink
              key={href}
              href={href}
              label={label}
              Icon={Icon}
              onClick={closeMenu}
            />
          ))}
        </nav>
      </aside>
    </>
  );
}
