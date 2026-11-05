import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryCard } from "@/components/StoryCard";
import { VideoFrame } from "@/components/VideoFrame";
import { getStory, relatedStories, stories } from "@/lib/stories";

type StoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) {
    return { title: "Interview" };
  }
  return {
    title: story.name,
    description: `${story.excerpt} Fictional demonstration profile.`,
  };
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = getStory(slug);
  if (!story) {
    notFound();
  }
  const related = relatedStories(story);

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">{story.kindLabel} · fictional sample</p>
      <h1 className="mt-3 font-serif text-5xl text-navy">{story.name}</h1>
      <p className="mt-2 text-lg text-ink/70">{story.chapter}</p>
      <div className="mt-8">
        <VideoFrame title={story.chapter} runtime={story.runtime} />
      </div>
      <div className="mt-12 grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <section>
          <h2 className="font-serif text-3xl text-navy">Biography</h2>
          <p className="mt-4 leading-7 text-ink/80">{story.biography}</p>
          <p className="mt-4 text-sm text-ink/60">{story.role}. Runtime planned at {story.runtime}.</p>
        </section>
        <section>
          <h2 className="font-serif text-3xl text-navy">The story</h2>
          <div className="mt-4 space-y-4 leading-7 text-ink/80">
            {story.narrative.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>
      </div>
      <section className="mt-12 border-t border-line pt-10">
        <h2 className="font-serif text-3xl text-navy">Sample transcript</h2>
        <p className="mt-2 text-sm text-ink/60">Written for the demonstration. This is not a recording of a real interview.</p>
        <ol className="mt-6 space-y-4">
          {story.transcript.map((line) => (
            <li key={line.line} className="grid gap-1 border-l border-gold/50 pl-4 sm:grid-cols-[8rem_1fr]">
              <span className="text-sm font-semibold text-navy">{line.speaker}</span>
              <span className="leading-7 text-ink/80">{line.line}</span>
            </li>
          ))}
        </ol>
      </section>
      <section className="mt-14">
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl text-navy">Related interviews</h2>
          <Link href="/stories" className="text-sm font-semibold text-navy">
            Back to all stories
          </Link>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {related.map((item) => (
            <StoryCard key={item.slug} story={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
