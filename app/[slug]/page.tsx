import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contentBySlug } from "@/generated-content";
import { pageTitles } from "@/site";
import TeamPage from "@/components/TeamPage";
import { applyMediaCoverage } from "@/media-coverage";

export function generateStaticParams() { return Object.keys(pageTitles).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{slug: string}> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: pageTitles[slug] ?? "Page" };
}

export default async function ContentPage({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;
  let content = contentBySlug[slug];
  if (!content) notFound();
  if (slug === "team") return <TeamPage />;
  if (slug === "research") content = applyMediaCoverage(content);
  return <article className={`legacy-content page-${slug}`} dangerouslySetInnerHTML={{ __html: content }} />;
}
