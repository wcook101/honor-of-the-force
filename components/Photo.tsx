import Image from "next/image";
import type { ReactNode } from "react";
import type { Frame } from "@/lib/images";

export function Photo({
  frame,
  className = "",
  imageClassName = "",
  priority = false,
  sizes = "100vw",
  label = true,
  children,
}: {
  frame: Frame;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  label?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className={`relative overflow-hidden bg-navy ${className}`}>
      <Image
        src={frame.src}
        alt={frame.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={`z-0 object-cover ${frame.position ?? "object-center"} ${imageClassName}`}
      />
      {label ? (
        <span className="absolute bottom-3 left-3 z-10 max-w-[16rem] bg-navy-deep/80 px-2 py-1 text-[0.62rem] uppercase leading-4 tracking-[0.14em] text-gold-soft">
          Illustrative photograph
        </span>
      ) : null}
      {children ? <div className="pointer-events-none absolute inset-0 z-10">{children}</div> : null}
    </div>
  );
}
