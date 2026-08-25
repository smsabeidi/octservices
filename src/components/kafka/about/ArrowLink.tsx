import Link from "next/link";

/**
 * Framer component `sLa2B`, "Black" variant (framer-19v2dne / framer-v-2uvq1h).
 *
 * Source CSS:
 *   root   — cursor pointer, row, center, gap 8px, width min-content, padding 0 0 4px
 *   label  — preset 1vgyccl (20 / 19 / 18px, weight 500, lh 130%), colour #101010
 *   arrow  — 24x24 clip window over two 24x24 tiles (gap 8px); the second tile is
 *            rotated -45deg. Rest shows the rotated tile, hover slides to the straight
 *            one (`.hover .framer-jkwkkr { justify-content: flex-start }`).
 *   stroke — absolute bottom-left, 1px, rgba(16,16,16,0.5); hover grows it to 2px.
 *
 * The glyph points in the reading direction, so it carries `data-flip-rtl` and
 * globals.css mirrors it on Arabic pages. `href` is expected to arrive already
 * locale prefixed from the caller.
 */

/* arrow glyph: svg-1790061921_764 — a 14x12 box inside the 24x24 padded tile */
function Arrow() {
  return (
    <svg viewBox="0 0 13.526 11.251" className="h-3 w-[14px] flex-none" aria-hidden="true" data-flip-rtl>
      <path
        d="M 13.36 6.032 L 8.298 11.095 C 8.077 11.306 7.727 11.302 7.511 11.086 C 7.294 10.87 7.29 10.52 7.502 10.299 L 11.604 6.197 L 0.587 6.197 C 0.38 6.206 0.185 6.1 0.079 5.923 C -0.026 5.745 -0.026 5.524 0.079 5.346 C 0.185 5.169 0.38 5.063 0.587 5.072 L 11.606 5.072 L 7.503 0.97 C 7.355 0.829 7.295 0.619 7.347 0.421 C 7.398 0.224 7.553 0.069 7.75 0.018 C 7.948 -0.033 8.158 0.026 8.299 0.174 L 13.361 5.236 C 13.466 5.341 13.526 5.485 13.526 5.634 C 13.526 5.783 13.466 5.927 13.361 6.032 Z"
        fill="rgb(16, 16, 16)"
      />
    </svg>
  );
}

export function ArrowLink({ href, children }: { href: string; children: string }) {
  return (
    <Link
      href={href}
      className="group relative flex h-min max-w-full cursor-pointer flex-row items-center gap-2 overflow-clip pb-1"
    >
      <h5 className="whitespace-pre-wrap text-[20px] font-medium leading-[1.3] tracking-[-0.02em] text-[rgb(16,16,16)] max-[1199px]:text-[19px] max-[809px]:text-[18px]">
        {children}
      </h5>
      <div className="relative h-6 w-6 overflow-clip">
        <div className="flex w-max -translate-x-8 rtl:translate-x-8 flex-row items-center gap-2 transition-transform duration-300 ease-out group-hover:translate-x-0">
          <div className="flex h-6 w-6 flex-none items-center justify-center p-1.5">
            <Arrow />
          </div>
          <div className="flex h-6 w-6 flex-none -rotate-45 items-center justify-center p-1.5">
            <Arrow />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 start-0 z-[1] h-px w-full bg-[rgba(16,16,16,0.5)] transition-[height] duration-300 group-hover:h-0.5" />
    </Link>
  );
}
