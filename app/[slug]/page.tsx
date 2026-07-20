import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { contentBySlug } from "@/generated-content";
import { pageTitles } from "@/site";

export function generateStaticParams() { return Object.keys(pageTitles).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{slug: string}> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: pageTitles[slug] ?? "Page" };
}

export default async function ContentPage({ params }: { params: Promise<{slug: string}> }) {
  const { slug } = await params;
  const content = contentBySlug[slug];
  if (!content) notFound();
  if (slug === "team") {
    return (
      <article className="legacy-content page-team">
        <h2 className="wsite-content-title team-page-title">MEET OUR TEAM</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    );
  }
  return <article className={`legacy-content page-${slug}`} dangerouslySetInnerHTML={{ __html: content }} />;
}
