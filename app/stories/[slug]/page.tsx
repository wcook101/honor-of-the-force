import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageHero";
import { StoryCard } from "@/components/StoryCard";
import { VideoFrame } from "@/components/VideoFrame";
import { stillFrames } from "@/lib/images";
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
  const frame = stillFrames[story.still];
  const opening = story.transcript[0];

  return (
    <main>
      <PageHero
        kicker={`${story.kindLabel} · fictional sample`}
        title={story.name}
        lede={story.chapter}
        frame={frame}
      />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-12">
        <VideoFrame title={story.chapter} runtime={story.runtime} frame={frame} />
      </div>
      <div className="mx-auto max-w-6xl px-4">
        {opening ? (
          <blockquote className="mx-auto mt-16 max-w-3xl border-l border-gold pl-6">
            <p className="font-serif text-3xl leading-snug text-navy sm:text-4xl">“{opening.line}”</p>
            <footer className="mt-4 text-sm text-ink/60">
              {opening.speaker}, from the sample script. Not a recorded interview.
            </footer>
          </blockquote>
        ) : null}
        <div className="mt-16 grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
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
        <section className="mt-16 border-t border-line pt-12">
          <h2 className="font-serif text-3xl text-navy">Sample transcript</h2>
          <p className="mt-2 text-sm text-ink/60">Written for the demonstration. This is not a recording of a real interview.</p>
          <ol className="mt-8 space-y-6">
            {story.transcript.map((line) => (
              <li key={line.line} className="grid gap-1 border-l border-gold/70 pl-5 sm:grid-cols-[9rem_1fr] sm:gap-6">
                <span className="text-sm font-semibold text-navy">{line.speaker}</span>
                <span className="font-serif text-xl leading-8 text-ink/85">{line.line}</span>
              </li>
            ))}
          </ol>
        </section>
        <section className="mt-20 pb-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-serif text-3xl text-navy">Related interviews</h2>
            <Link href="/stories" className="text-sm font-semibold text-navy">
              Back to all stories
            </Link>
          </div>
          <div className="mt-8 grid gap-10 md:grid-cols-2">
            {related.map((item) => (
              <StoryCard key={item.slug} story={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
