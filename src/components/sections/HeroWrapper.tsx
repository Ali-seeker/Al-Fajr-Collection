import Hero from "./Hero";
import { getHeroSettings, getStatsSettings } from "@/lib/data";

export default async function HeroWrapper() {
  const [heroSettings, statsSettings] = await Promise.all([
    getHeroSettings(),
    getStatsSettings(),
  ]);

  const hero = heroSettings ? {
    eyebrow: heroSettings.eyebrow,
    title: heroSettings.title,
    accentTitle: heroSettings.accentTitle,
    description: heroSettings.description,
    primaryCta: { label: heroSettings.primaryCtaLabel, href: heroSettings.primaryCtaHref },
    secondaryCta: { label: heroSettings.secondaryCtaLabel, href: heroSettings.secondaryCtaHref },
    heroImage: heroSettings.heroImage,
    backImage: heroSettings.backImage,
  } : null;

  const stats = statsSettings?.stats as Array<{ value: string; label: string }> || [];

  return <Hero hero={hero} stats={stats} />;
}