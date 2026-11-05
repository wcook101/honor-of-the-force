"use client";

import { useState } from "react";
import type { Story, StoryKind } from "@/lib/stories";
import { StoryCard } from "@/components/StoryCard";

const filters: { id: "all" | StoryKind; label: string }[] = [
  { id: "all", label: "All interviews" },
  { id: "wounded", label: "Wounded officers" },
  { id: "family", label: "Surviving families" },
];

export function StoryBrowser({ stories }: { stories: Story[] }) {
  const [filter, setFilter] = useState<"all" | StoryKind>("all");
  const shown = filter === "all" ? stories : stories.filter((story) => story.kind === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter interviews">
        {filters.map((item) => (
          <button
            key={item.id}
            type="button"
            aria-pressed={filter === item.id}
            className={`rounded-full px-4 py-2 text-sm ${
              filter === item.id ? "bg-navy text-cream" : "border border-line bg-white text-navy"
            }`}
            onClick={() => setFilter(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      <p className="mt-4 text-sm text-ink/70">
        {shown.length} sample {shown.length === 1 ? "interview" : "interviews"}
      </p>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>
    </div>
  );
}
