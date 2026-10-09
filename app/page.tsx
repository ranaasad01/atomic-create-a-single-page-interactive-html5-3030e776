"use client";

// Atomic Builder fallback page: the generated page failed validation twice.
import { useTranslations } from "next-intl";
import { Reveal } from "@/components/Reveal";
import SiteLink from "@/components/SiteLink";
import { BRAND, primaryCta } from "@/lib/data";

export default function Page() {
  const tNav: (key: string) => string = useTranslations("nav");
  const tCta: (key: string) => string = useTranslations("cta");
  return (
    <main className="bg-background text-foreground">
      <section className="mx-auto max-w-5xl px-6 py-24 text-center">
        <Reveal>
          <h1 className="font-display text-4xl font-bold tracking-tight">{BRAND.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{BRAND.tagline}</p>
          <SiteLink
            href={primaryCta.href}
            className="mt-8 inline-flex rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground"
          >
            {tCta(primaryCta.key)}
          </SiteLink>
        </Reveal>
      </section>
      <section id="game-canvas" className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-foreground">{tNav("play")}</h2>
        </Reveal>
      </section>
      <section id="telemetry-hud" className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-foreground">{tNav("telemetry")}</h2>
        </Reveal>
      </section>
      <section id="education-tooltip" className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-foreground">{tNav("how_it_works")}</h2>
        </Reveal>
      </section>
      <section id="controls-panel" className="mx-auto max-w-5xl px-6 py-20">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold text-foreground">{tNav("levels")}</h2>
        </Reveal>
      </section>
    </main>
  );
}
