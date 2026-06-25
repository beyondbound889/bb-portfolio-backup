"use client";

import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { nav, site } from "@/lib/content";
import { Search, CornerDownLeft, ArrowUpRight } from "lucide-react";

export function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        const t = e.target as HTMLElement;
        if (e.key === "/" && (t.tagName === "INPUT" || t.tagName === "TEXTAREA")) return;
        e.preventDefault();
        setOpen((o) => !o);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const go = useCallback((href: string, external = false) => {
    setOpen(false);
    if (external) {
      window.open(href, "_blank", "noopener,noreferrer");
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open command menu"
        className="hidden items-center gap-2 rounded-full border border-line px-3 py-1.5 font-mono text-xs text-slate transition-colors hover:border-petrol hover:text-petrol sm:flex"
      >
        <Search size={13} />
        <span>Search</span>
        <kbd className="rounded border border-line px-1 text-[10px]">⌘K</kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-[80] grid place-items-start justify-center bg-ink/30 px-4 pt-[18vh] backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <Command
            label="Command menu"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
          >
            <div className="flex items-center gap-2 border-b border-line px-4">
              <Search size={16} className="text-slate" />
              <Command.Input
                autoFocus
                placeholder="Jump to a section, or reach out…"
                className="h-12 w-full bg-transparent text-sm text-ink outline-none placeholder:text-slate"
              />
            </div>
            <Command.List className="max-h-80 overflow-y-auto p-2">
              <Command.Empty className="px-3 py-6 text-center text-sm text-slate">
                Nothing here. Try “contact”.
              </Command.Empty>
              <Command.Group heading="Sections" className="px-1 font-mono text-[10px] uppercase tracking-widest text-slate">
                {nav.map((n) => (
                  <Item key={n.href} onSelect={() => go(n.href)}>
                    <CornerDownLeft size={14} className="text-petrol" />
                    {n.label}
                  </Item>
                ))}
              </Command.Group>
              <Command.Group heading="Reach out" className="px-1 font-mono text-[10px] uppercase tracking-widest text-slate">
                <Item onSelect={() => go(`mailto:${site.email}`, true)}>
                  <ArrowUpRight size={14} className="text-petrol" />
                  Email — {site.email}
                </Item>
                <Item onSelect={() => go(site.linkedin, true)}>
                  <ArrowUpRight size={14} className="text-petrol" />
                  LinkedIn
                </Item>
                <Item onSelect={() => go(site.product, true)}>
                  <ArrowUpRight size={14} className="text-petrol" />
                  Glycomics™ on Amazon.in
                </Item>
              </Command.Group>
            </Command.List>
          </Command>
        </div>
      )}
    </>
  );
}

function Item({
  children,
  onSelect,
}: {
  children: React.ReactNode;
  onSelect: () => void;
}) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-ink aria-selected:bg-mist"
    >
      {children}
    </Command.Item>
  );
}
