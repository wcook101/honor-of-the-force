import type { StillName } from "@/lib/stories";

export type Frame = {
  src: string;
  alt: string;
  credit: string;
  position?: string;
};

const note = "Licensed illustrative photograph. Not a person in these fictional samples.";

export const gallery = {
  patrol: {
    src: "/images/hero-patrol.jpg",
    alt: `${note} A marked police vehicle on a city street at dusk.`,
    credit: "Kindel Media / Pexels",
    position: "object-[center_62%]",
  },
  desert: {
    src: "/images/desert-road.jpg",
    alt: `${note} A highway crossing open country at sunset.`,
    credit: "Yuanpang Wa / Pexels",
    position: "object-bottom",
  },
  porch: {
    src: "/images/cabin-porch.jpg",
    alt: `${note} Sunlight on a wooden porch.`,
    credit: "Abdullah Öğük / Pexels",
    position: "object-center",
  },
  hands: {
    src: "/images/hands-table.jpg",
    alt: `${note} Two people holding hands across a table. Faces are not shown.`,
    credit: "Danik Prihodko / Pexels",
    position: "object-[center_35%]",
  },
  hallway: {
    src: "/images/hallway.jpg",
    alt: `${note} A long interior hallway in late light.`,
    credit: "Erik Petkov / Pexels",
    position: "object-center",
  },
  field: {
    src: "/images/porch-sunset.jpg",
    alt: `${note} Open land and a farm building at sunset.`,
    credit: "Thomas Porter / Pexels",
    position: "object-[center_45%]",
  },
  memorial: {
    src: "/images/memorial-flag.jpg",
    alt: `${note} An American flag in a cemetery. No name on the stone is readable.`,
    credit: "Brett Sayles / Pexels",
    position: "object-[center_55%]",
  },
  flag: {
    src: "/images/flag-close.jpg",
    alt: `${note} A small American flag beside unmarked headstones.`,
    credit: "Chad Madden / Pexels",
    position: "object-[center_40%]",
  },
  therapy: {
    src: "/images/therapy.jpg",
    alt: `${note} A rehabilitation session. The people shown are not the fictional officers.`,
    credit: "Yan Krukau / Pexels",
    position: "object-[center_30%]",
  },
  family: {
    src: "/images/family-window.jpg",
    alt: `${note} A family seen from behind at a window. They are not the fictional families.`,
    credit: "Vlada Karpovich / Pexels",
    position: "object-[center_25%]",
  },
  support: {
    src: "/images/hands.jpg",
    alt: `${note} Two people sitting together at a kitchen table. They are not the fictional families.`,
    credit: "Tiger Lily / Pexels",
    position: "object-[center_40%]",
  },
  interview: {
    src: "/images/microphone.jpg",
    alt: `${note} A microphone and camera prepared for an interview. This is not a recording from the samples.`,
    credit: "Abdellah Benziane / Pexels",
    position: "object-[center_20%]",
  },
} as const satisfies Record<string, Frame>;

export const stillFrames: Record<StillName, Frame> = {
  road: gallery.desert,
  porch: gallery.porch,
  window: gallery.hands,
  hall: gallery.hallway,
  field: gallery.field,
  river: gallery.patrol,
};
