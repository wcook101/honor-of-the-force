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
      <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-line" role="group" aria-label="Filter interviews">
        {filters.map((item) => {
          const active = filter === item.id;
          return (
            <button
              key={item.id}
              type="button"
              aria-pressed={active}
              className={`-mb-px border-b-2 px-1 py-3 text-sm tracking-wide ${
                active ? "border-gold text-navy" : "border-transparent text-ink/55 hover:text-navy"
              }`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <p className="mt-6 text-sm text-ink/70">
        {shown.length} fictional {shown.length === 1 ? "interview" : "interviews"}
      </p>
      <div className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((story) => (
          <StoryCard key={story.slug} story={story} />
        ))}
      </div>
    </div>
  );
}
