export type StoryKind = "wounded" | "family";

export type StillName = "road" | "window" | "field" | "porch" | "river" | "hall";

export type TranscriptLine = {
  speaker: string;
  line: string;
};

export type Story = {
  slug: string;
  name: string;
  role: string;
  kind: StoryKind;
  kindLabel: string;
  chapter: string;
  runtime: string;
  excerpt: string;
  biography: string;
  narrative: string[];
  transcript: TranscriptLine[];
  related: string[];
  still: StillName;
};

export const stories: Story[] = [
  {
    slug: "caleb-orth",
    name: "Caleb Orth",
    role: "Wounded officer, sample interview",
    kind: "wounded",
    kindLabel: "Wounded officer",
    chapter: "The year the uniform stayed on the chair",
    runtime: "22 min",
    excerpt:
      "A fictional trooper describes the first year after a line-of-duty injury, and the ordinary rooms where recovery actually happened.",
    biography:
      "Caleb Orth is a fictional composite written for this demonstration. In the sample, he is a twelve-year trooper who was seriously injured during a highway stop and spent fourteen months learning to walk without a brace.",
    narrative: [
      "The interview opens in a kitchen, not a squad room. Caleb sets his brace on the chair he used to dress in and talks about the morning he stopped counting the steps to the mailbox.",
      "He describes physical therapy as repetitive and unglamorous: the same hallway, the same rail, a therapist who refused to congratulate him for standing. The point of the scene is patience, not a miracle.",
      "Near the end he talks about returning to limited duty and the strange quiet of a desk after years on the road. He does not claim the injury made him wiser. He says it made the household smaller and more careful.",
    ],
    transcript: [
      {
        speaker: "Caleb",
        line: "People ask for the night it happened. I would rather talk about the Tuesday I made coffee standing up.",
      },
      {
        speaker: "Interviewer",
        line: "What did that Tuesday change at home?",
      },
      {
        speaker: "Caleb",
        line: "My daughter stopped waiting in the doorway to see if I would make it across the room.",
      },
    ],
    related: ["andre-pell", "marisol-vega"],
    still: "road",
  },
  {
    slug: "marisol-vega",
    name: "Marisol Vega",
    role: "Surviving spouse, sample interview",
    kind: "family",
    kindLabel: "Surviving family",
    chapter: "The coat that stayed by the door",
    runtime: "19 min",
    excerpt:
      "A fictional spouse talks about the weeks after a line-of-duty death, and the small decisions that kept a household going.",
    biography:
      "Marisol Vega is a fictional character created for this demonstration. In the sample script she is the spouse of a trooper killed while serving. No real family is described.",
    narrative: [
      "Marisol begins with a practical list: who called the school, who sat with the children, who remembered the dog. She refuses the language of a public tribute until the private week has been told.",
      "The middle of the interview is about paperwork and silence. She explains how a memorial service can be beautiful and still leave a Tuesday morning with no plan.",
      "She closes by reading a note her husband left on the refrigerator, then puts it back. The scene is about keeping an ordinary object, not about turning a person into a symbol.",
    ],
    transcript: [
      {
        speaker: "Marisol",
        line: "I can tell you the hymn they chose. I would rather tell you who packed the lunches the next morning.",
      },
      {
        speaker: "Interviewer",
        line: "What do you want people to understand?",
      },
      {
        speaker: "Marisol",
        line: "That the family does not end when the procession does.",
      },
    ],
    related: ["helen-brennan", "ruth-adelman"],
    still: "porch",
  },
  {
    slug: "helen-brennan",
    name: "Helen Brennan",
    role: "Surviving parent, sample interview",
    kind: "family",
    kindLabel: "Surviving family",
    chapter: "A name said at the table",
    runtime: "16 min",
    excerpt:
      "A fictional mother talks about remembering her child without letting the memorial replace the person she raised.",
    biography:
      "Helen Brennan is a fictional parent written for this demonstration. The son in her interview is also fictional. The script is a sample of how a family interview can be filmed with restraint.",
    narrative: [
      "Helen sits in a dining room and corrects the record in small ways: the joke he told badly, the way he parked, the Sunday calls that were mostly about the weather.",
      "She is careful about the night she was notified. She gives the shape of it and declines the details. The interviewer does not push.",
      "The last movement is a visit to a shelf of ordinary objects. Helen says the public remembers a badge. She remembers someone who argued about the thermostat.",
    ],
    transcript: [
      {
        speaker: "Helen",
        line: "If you only film the funeral, you miss the person who lived in this house.",
      },
      {
        speaker: "Interviewer",
        line: "What should stay in the film?",
      },
      {
        speaker: "Helen",
        line: "His name, said the way we said it at dinner.",
      },
    ],
    related: ["marisol-vega", "ruth-adelman"],
    still: "window",
  },
  {
    slug: "andre-pell",
    name: "Andre Pell",
    role: "Wounded officer, sample interview",
    kind: "wounded",
    kindLabel: "Wounded officer",
    chapter: "Learning the hallway again",
    runtime: "24 min",
    excerpt:
      "A fictional officer follows a long rehabilitation and the family schedule that made the work possible.",
    biography:
      "Andre Pell is a fictional composite for this demonstration. In the sample he survives a serious injury, leaves the road, and rebuilds a workday around pain, appointments, and a spouse’s shift schedule.",
    narrative: [
      "Andre’s interview is shot in a rehab corridor and then at a kitchen table. He treats both rooms as workplaces. Neither is presented as inspirational scenery.",
      "He talks about the ego of needing help with a shirt, and about the partner who learned the medication times without making a speech of it.",
      "The closing question is about what support actually looked like. His answer is rides, forms, and someone who stayed for the boring hours.",
    ],
    transcript: [
      {
        speaker: "Andre",
        line: "Recovery is not a montage. It is the same ten meters, counted out loud.",
      },
      {
        speaker: "Interviewer",
        line: "Who was in the hallway with you?",
      },
      {
        speaker: "Andre",
        line: "My wife, on the days her shift allowed it. A therapist on the days it did not.",
      },
    ],
    related: ["caleb-orth", "daniel-okonkwo"],
    still: "hall",
  },
  {
    slug: "ruth-adelman",
    name: "Ruth Adelman",
    role: "Surviving sister, sample interview",
    kind: "family",
    kindLabel: "Surviving family",
    chapter: "The call that changed the map",
    runtime: "14 min",
    excerpt:
      "A fictional sister describes how a line-of-duty death rearranged a family that lived in three different towns.",
    biography:
      "Ruth Adelman is fictional. Her sibling in the script is fictional. The interview is a demonstration of a family story told from outside the household that received the first knock.",
    narrative: [
      "Ruth was three hours away when the news arrived. She talks about the drive, the radio she could not turn off, and the decision to say very little until she was in the driveway.",
      "She describes the weeks of logistics: flights, a spare room, a child who needed a familiar breakfast. Heroic language never enters the scene.",
      "She ends by explaining why she agreed to be filmed. She wanted a record of the sister, not a portrait of grief as a public role.",
    ],
    transcript: [
      {
        speaker: "Ruth",
        line: "I did not become a symbol. I became the person who knew where the spare key was.",
      },
      {
        speaker: "Interviewer",
        line: "What do you still do on the anniversary?",
      },
      {
        speaker: "Ruth",
        line: "We cook what she liked. We do not make a speech unless someone needs one.",
      },
    ],
    related: ["helen-brennan", "marisol-vega"],
    still: "field",
  },
  {
    slug: "daniel-okonkwo",
    name: "Daniel Okonkwo",
    role: "Wounded officer, sample interview",
    kind: "wounded",
    kindLabel: "Wounded officer",
    chapter: "A different kind of watch",
    runtime: "21 min",
    excerpt:
      "A fictional officer talks about identity after injury, and the slow decision to serve in a role that no longer includes the road.",
    biography:
      "Daniel Okonkwo is a fictional demonstration profile. The sample follows an injured trooper through the choice to stay with the agency in a training post rather than return to patrol.",
    narrative: [
      "Daniel is filmed in an empty classroom where he now teaches vehicle stops. He handles the chairs himself and jokes, once, about the pace.",
      "He is frank about anger: at his body, at paperwork, at the idea that gratitude should replace ambition. The interview lets that stand without correcting him.",
      "The last sequence is a night drive as a passenger. He watches the shoulder of the road and says the work is still his, even if the seat is not.",
    ],
    transcript: [
      {
        speaker: "Daniel",
        line: "I did not want a new identity. I wanted a way to be useful that my leg would allow.",
      },
      {
        speaker: "Interviewer",
        line: "Do you still call yourself a trooper?",
      },
      {
        speaker: "Daniel",
        line: "Yes. The assignment changed. The obligation did not.",
      },
    ],
    related: ["andre-pell", "caleb-orth"],
    still: "river",
  },
];

export function getStory(slug: string): Story | undefined {
  return stories.find((story) => story.slug === slug);
}

export function storiesByKind(kind: StoryKind): Story[] {
  return stories.filter((story) => story.kind === kind);
}

export function relatedStories(story: Story): Story[] {
  return story.related
    .map((slug) => getStory(slug))
    .filter((item): item is Story => item !== undefined);
}
