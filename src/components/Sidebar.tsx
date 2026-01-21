"use client";
import { useState, useEffect } from "react";

function LinkItem({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-foreground hover:text-brand"
    >
      {children}
    </a>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, []);
  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);
  return (
    <>
      <button
        aria-label="Open menu"
        onClick={toggle}
        className="fixed top-4 left-4 z-50 h-10 w-10 flex items-center justify-center rounded-md bg-brand text-white shadow-md"
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          className="pointer-events-none"
        >
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={close} />
      )}
      <nav
        className={`fixed top-0 left-0 z-50 h-svh w-72 bg-background shadow-xl border-r border-zinc-200 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="px-4 py-4 flex items-center justify-between border-b border-zinc-200">
          <span className="text-sm font-medium text-foreground">Menu</span>
          <button
            aria-label="Close menu"
            onClick={close}
            className="h-8 w-8 flex items-center justify-center rounded-md bg-cream text-foreground"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6l-12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="py-2">
          <LinkItem href="#" onClick={close}>
            Home
          </LinkItem>
          <LinkItem href="#about" onClick={close}>
            About Us
          </LinkItem>
          <LinkItem href="#brands-products" onClick={close}>
            Our brand &amp; products
          </LinkItem>
          <LinkItem href="#facility" onClick={close}>
            How we operate
          </LinkItem>
          <LinkItem href="#contact" onClick={close}>
            Contact Us
          </LinkItem>
        </div>
      </nav>
    </>
  );
}
