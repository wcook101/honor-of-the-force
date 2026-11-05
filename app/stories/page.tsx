import type { Metadata } from "next";
import { StoryBrowser } from "@/components/StoryBrowser";
import { stories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Their Stories",
  description: "Sample interviews with fictional wounded officers and surviving families.",
};

export default function StoriesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-14">
      <p className="text-xs uppercase tracking-[0.2em] text-gold">Their Stories</p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl text-navy">Six sample interviews</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink/75">
        Filter for wounded officers or surviving families. Each card opens a player, a short biography, the story, and a sample transcript.
      </p>
      <div className="mt-8">
        <StoryBrowser stories={stories} />
      </div>
    </main>
  );
}
