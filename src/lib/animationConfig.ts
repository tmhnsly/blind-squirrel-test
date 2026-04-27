// Master schedule for the intro animation. All values in seconds.
// Phases:
//   load   — counter 0→100, swoosh wipes on.
//   exit   — orange drawer slides up; swoosh-mask + counter-wrap counter-
//            translate so they stay screen-anchored. Hero's swoosh
//            underneath sits at the same screen coords → colour shift.
//   reveal — nav, heading words, image card + cover, fades.

export const INTRO_TIMINGS = {
  load: {
    counter: { duration: 2.2, ease: "power2.inOut" },
    swoosh: { start: 0.6, duration: 1.6, ease: "power3.in" },
  },
  exit: {
    drawer: { start: 2.4, duration: 1.3, ease: "power3.out" },
  },
  reveal: {
    card: {
      start: 2.6,
      duration: 0.4,
      ease: "back.out(0.8)",
      fromScaleY: 0.04,
    },
    // Starts during card bloom so the cover is already moving by the time
    // the drawer has lifted enough to expose the card.
    cover: { start: 2.7, duration: 0.55, ease: "power3.out" },
    nav: { start: 3.0, duration: 0.75, ease: "power2.out", fromY: -20 },
    heading: { start: 2.9, duration: 0.6, ease: "power3.out", stagger: 0.1 },
    fades: {
      start: 3.2,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.12,
      fromY: 20,
    },
  },
} as const;
