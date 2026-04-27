"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { useIntroTimeline } from "@/lib/useIntroTimeline";
import s from "./MotionScope.module.scss";

interface MotionScopeProps {
  nav: ReactNode;
  loader: ReactNode;
  children: ReactNode;
}

export function MotionScope({ nav, loader, children }: MotionScopeProps) {
  const scopeRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useIntroTimeline({
    scopeRef,
    onComplete: () => setIsLoading(false),
  });

  // Body class: locks scroll while the intro plays. Server sets it on first
  // paint via layout.tsx; this effect owns transitions after that.
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("is-loading");
    } else {
      document.body.classList.remove("is-loading");
    }
    return () => {
      document.body.classList.remove("is-loading");
    };
  }, [isLoading]);

  return (
    <div ref={scopeRef} className={s.root}>
      {nav}
      {children}
      {loader}
    </div>
  );
}
