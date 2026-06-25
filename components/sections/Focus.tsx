import { focusAreas } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Stagger, StaggerItem, Reveal } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";

export function Focus() {
  return (
    <Section id="focus">
      <Reveal>
        <Eyebrow>Areas of focus</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-[2.6rem]">
          What I build, and why it earns trust.
        </h2>
      </Reveal>

      <Stagger className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {focusAreas.map((f) => (
          <StaggerItem
            key={f.title}
            className="group relative z-0 bg-paper p-7 transition-all duration-300 hover:z-10 hover:-translate-y-1 hover:bg-surface hover:shadow-[0_24px_60px_-20px_rgb(var(--petrol)/0.22)] dark:bg-surface/35 dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:hover:bg-surface/60"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-petrol transition-colors group-hover:bg-petrol group-hover:text-paper">
              <Icon name={f.icon} />
            </span>
            <h3 className="mt-5 font-display text-lg font-semibold text-ink">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{f.body}</p>
            <p className="mt-5 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-petrol">
              <span className="h-px w-4 bg-petrol/40" />
              {f.impact}
            </p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}