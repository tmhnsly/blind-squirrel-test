"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, type RefObject } from "react";
import { INTRO_TIMINGS } from "./animationConfig";

interface UseIntroTimelineOptions {
  scopeRef: RefObject<HTMLElement | null>;
  onComplete?: () => void;
}

// Master intro timeline. Selectors are scoped to scopeRef.
// Replayability: every animatable tween uses .fromTo so explicit from-values
// re-apply on .restart(). The from-values double as the page's pre-intro
// state (applied as soon as the tween is added), so first paint already has
// nav/title/image/fade items hidden.
export function useIntroTimeline({
  scopeRef,
  onComplete,
}: UseIntroTimelineOptions) {
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useGSAP(
    () => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const isMobile = window.matchMedia("(max-width: 680px)").matches;

      const counterEl =
        scopeRef.current?.querySelector<HTMLElement>("[data-counter]") ?? null;

      if (reduced) {
        if (counterEl) counterEl.textContent = "100";
        gsap.set("[data-loader-drawer]", {
          yPercent: -100,
          borderRadius: "0 0 2.5rem 2.5rem",
        });
        gsap.set("[data-loader-swoosh-mask]", { yPercent: 100 });
        gsap.set("[data-loader-counter-wrap]", { yPercent: 100 });
        gsap.set("[data-loader-swoosh]", {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        });
        gsap.set("[data-nav]", { y: 0, opacity: 1 });
        gsap.set("[data-heading-word]", { clipPath: "inset(0% 0 0 0)" });
        gsap.set("[data-image-card]", { clipPath: "inset(0% 0 0 0)" });
        gsap.set("[data-image-cover]", { yPercent: -100 });
        gsap.set("[data-fade]", { y: 0, opacity: 1 });
        onComplete?.();
        return;
      }

      const counterProxy = { value: 0 };
      const writeCounter = () => {
        if (counterEl) {
          counterEl.textContent = String(Math.floor(counterProxy.value));
        }
      };

      const tl = gsap.timeline({ onComplete });

      // ── load ───────────────────────────────────────────────────────────
      tl.addLabel("load", 0);

      tl.fromTo(
        counterProxy,
        { value: 0 },
        {
          value: 100,
          duration: INTRO_TIMINGS.load.counter.duration,
          ease: INTRO_TIMINGS.load.counter.ease,
          onUpdate: writeCounter,
        },
        "load",
      );

      // Swoosh "draws on" left-to-right by interpolating a clip-path
      // polygon's right two vertices from x=0% (collapsed) to x=100%
      // (full rect). GSAP interpolates each polygon vertex linearly,
      // which produces a reliable left-to-right wipe across browsers.
      tl.fromTo(
        "[data-loader-swoosh]",
        { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: INTRO_TIMINGS.load.swoosh.duration,
          ease: INTRO_TIMINGS.load.swoosh.ease,
        },
        INTRO_TIMINGS.load.swoosh.start,
      );

      // ── exit ───────────────────────────────────────────────────────────
      const exit = INTRO_TIMINGS.exit.drawer;
      tl.addLabel("exit", exit.start);

      // Drawer corners round in faster than the slide so the rounded shape
      // is visible the moment the slide begins (matches the mp4 reference).
      tl.fromTo(
        "[data-loader-drawer]",
        { borderRadius: "0px" },
        {
          borderRadius: "0 0 2.5rem 2.5rem",
          duration: 0.4,
          ease: "power2.out",
        },
        "exit",
      );

      // Counter-translate trick: drawer translates UP, mask + counter-wrap
      // (children of drawer) translate DOWN by equal amount. Translates
      // cancel — swoosh + counter stay screen-anchored — and the drawer's
      // overflow:hidden clips them away. The hero's swoosh underneath at
      // identical screen coords reads through as a colour shift.
      // Three tweens MUST share identical duration + ease — drift = visible
      // jiggle of the swoosh + counter mid-slide.
      tl.fromTo(
        "[data-loader-drawer]",
        { yPercent: 0 },
        { yPercent: -100, duration: exit.duration, ease: exit.ease },
        "exit",
      );
      tl.fromTo(
        "[data-loader-swoosh-mask]",
        { yPercent: 0 },
        { yPercent: 100, duration: exit.duration, ease: exit.ease },
        "exit",
      );
      tl.fromTo(
        "[data-loader-counter-wrap]",
        { yPercent: 0 },
        { yPercent: 100, duration: exit.duration, ease: exit.ease },
        "exit",
      );

      // ── reveal ─────────────────────────────────────────────────────────
      const reveal = INTRO_TIMINGS.reveal;

      tl.fromTo(
        "[data-nav]",
        { y: reveal.nav.fromY, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: reveal.nav.duration,
          ease: reveal.nav.ease,
        },
        reveal.nav.start,
      );

      tl.fromTo(
        "[data-heading-word]",
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: reveal.heading.duration,
          ease: reveal.heading.ease,
          stagger: isMobile ? 0.06 : reveal.heading.stagger,
        },
        reveal.heading.start,
      );

      tl.fromTo(
        "[data-image-card]",
        { clipPath: "inset(100% 0 0 0)" },
        {
          clipPath: "inset(0% 0 0 0)",
          duration: reveal.card.duration,
          ease: reveal.card.ease,
        },
        reveal.card.start,
      );

      tl.fromTo(
        "[data-image-cover]",
        { yPercent: 0 },
        {
          yPercent: -100,
          duration: reveal.cover.duration,
          ease: reveal.cover.ease,
        },
        reveal.cover.start,
      );

      tl.fromTo(
        "[data-fade]",
        { y: reveal.fades.fromY, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: reveal.fades.duration,
          ease: reveal.fades.ease,
          stagger: reveal.fades.stagger,
        },
        reveal.fades.start,
      );

      timelineRef.current = tl;
    },
    { scope: scopeRef },
  );

  return timelineRef;
}
