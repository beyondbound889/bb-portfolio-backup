import { personal, vision } from "@/lib/content";
import { Section, Eyebrow } from "@/components/ui/Section";
import { Reveal, Stagger, StaggerItem } from "@/components/ui/Reveal";
import { Icon } from "@/components/ui/Icon";
import { ParallaxImage } from "@/components/ui/ParallaxImage";

export function Personal() {
  return (
    <Section id="personal">
      <Reveal>
        <Eyebrow>{personal.eyebrow}</Eyebrow>
        <h2 className="mt-6 max-w-2xl font-display text-3xl font-semibold leading-[1.08] tracking-tightest text-ink sm:text-[2.6rem]">
          {personal.title}
        </h2>
      </Reveal>

      <Stagger className="mt-14 grid gap-6 md:grid-cols-3">
        {personal.items.map((p) => (
          <StaggerItem
            key={p.title}
            className="group rounded-2xl border border-line bg-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-petrol/30 hover:shadow-[0_24px_60px_-20px_rgb(var(--petrol)/0.2)] dark:bg-surface/50 dark:backdrop-blur-xl dark:backdrop-saturate-150 dark:hover:bg-surface/70"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-mist text-petrol transition-colors duration-300 group-hover:bg-petrol group-hover:text-paper">
              <Icon name={p.icon} />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold text-ink">{p.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate">{p.body}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export function Vision() {
  return (
    <section id="vision" className="relative overflow-hidden px-6 py-32 sm:py-44">
      {/* Parallax background photo */}
      <div className="absolute inset-0 -z-10">
        <ParallaxImage
          src="/images/priyanshu-rooftop.png"
          alt=""
          sizes="100vw"
          strength={70}
          wrapperClassName="h-full w-full"
          className="object-center opacity-[0.13] dark:opacity-[0.09]"
        />
        {/* Gradient overlay — stronger at edges for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-paper via-paper/50 to-paper" />
      </div>

      <div className="mx-auto w-full max-w-shell">
        <Reveal>
          <Eyebrow>{vision.eyebrow}</Eyebrow>
          <h2 className="mt-7 max-w-3xl font-display text-3xl font-semibold leading-[1.06] tracking-tightest text-ink sm:text-5xl">
            {vision.question}
          </h2>
        </Reveal>

        <div className="mt-10 max-w-2xl space-y-5">
          {vision.answer.map((a, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <p className="text-lg leading-relaxed text-slate">{a}</p>
            </Reveal>
          ))}
          <Reveal delay={0.35}>
            <blockquote className="mt-8 rounded-2xl border border-petrol/20 bg-petrol/5 px-7 py-6 dark:bg-petrol/10">
              <p className="font-display text-2xl font-semibold leading-snug tracking-tight text-petrol">
                {vision.closing}
              </p>
              <footer className="mt-4 font-mono text-xs text-slate">
                — Priyanshu Chauhan, Founder & Director, Beyond Bound®
              </footer>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}