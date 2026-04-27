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
    // Image card "bloops" out of a thin horizontal pill into the full card
    // mid-way through the drawer slide — back.out gives the subtle pop.
    // Starts before the drawer finishes (overlapping by design).
    card: {
      start: 2.6,
      duration: 0.85,
      ease: "back.out(1.6)",
      fromScaleY: 0.04,
    },
    // Cover slides up after the card has popped in, exposing the photo
    // from bottom up.
    cover: { start: 3.1, duration: 0.95, ease: "power3.out" },
    // Nav drops from above as the drawer's almost gone.
    nav: { start: 3.0, duration: 0.75, ease: "power2.out", fromY: -20 },
    // Heading words clip-reveal top-down (top of letters first), staggered
    // by word. Starts in parallel with the card pop.
    heading: { start: 2.9, duration: 0.9, ease: "power3.out", stagger: 0.12 },
    // Lede / actions / scroll fade up last, staggered.
    fades: {
      start: 3.6,
      duration: 0.65,
      ease: "power2.out",
      stagger: 0.12,
      fromY: 20,
    },
  },
} as const;
