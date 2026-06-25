import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  tint = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  tint?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-24 px-6 py-24 sm:py-32",
        tint && "bg-mist/60",
        className
      )}
    >
      <div className="mx-auto w-full max-w-shell">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-petrol">
      <span className="h-px w-6 bg-petrol/50" />
      {children}
    </div>
  );
}
