// Master schedule for the intro animation.
// Phases:
//   load   — counter ticks 0→100, swoosh fades/reveals.
//   exit   — orange drawer slides up; swoosh-mask + counter-wrap counter-
//            translate so they stay screen-anchored. Drawer's overflow:hidden
//            clips them away as it lifts. The hero's swoosh underneath sits at
//            identical screen coordinates → reads as a colour change, not a
//            new element.
//   reveal — nav drop-in, heading word clip-reveal, image card clip-reveal,
//            image cover slide-up, fades for lede / actions / scroll.
// All values in seconds.

export const INTRO_TIMINGS = {
  load: {
    counter: { duration: 2.2, ease: "power2.inOut" },
    swoosh: { start: 0.6, duration: 1.6, ease: "power3.in" },
  },
  exit: {
    drawer: { start: 2.4, duration: 1.3, ease: "power4.inOut" },
  },
  reveal: {
    nav: { start: 3.0, duration: 0.75, ease: "power2.out", fromY: -20 },
    heading: { start: 3.0, duration: 1.1, ease: "power3.out", stagger: 0.1 },
    card: { start: 3.4, duration: 0.95, ease: "power3.out" },
    cover: { start: 3.9, duration: 1.1, ease: "power3.out" },
    fades: {
      start: 4.3,
      duration: 0.75,
      ease: "power2.out",
      stagger: 0.12,
      fromY: 20,
    },
  },
} as const;
