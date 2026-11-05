import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { StoryBrowser } from "@/components/StoryBrowser";
import { gallery } from "@/lib/images";
import { stories } from "@/lib/stories";

export const metadata: Metadata = {
  title: "Their Stories",
  description: "Sample interviews with fictional wounded officers and surviving families.",
};

export default function StoriesPage() {
  return (
    <main>
      <PageHero
        kicker="Their Stories"
        title="Six sample interviews"
        lede="Filter for wounded officers or surviving families. Each film opens a player, a short biography, the story, and a sample transcript."
        frame={gallery.interview}
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <StoryBrowser stories={stories} />
      </section>
    </main>
  );
}
