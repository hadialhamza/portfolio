import { useEffect, useMemo, useRef, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const onChange = () => setReduced(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);

  return reduced;
}

function useInView(ref, { threshold = 0.35, rootMargin = "0px" } = {}) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold, rootMargin }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [threshold, rootMargin, ref]);

  return inView;
}

function useRotatingTypewriterState({
  words,
  enabled,
  paused,
  typeMs = 55,
  deleteMs = 32,
  holdMs = 950,
}) {
  const list = useMemo(() => (words || []).filter(Boolean), [words]);

  const [wordIndex, setWordIndex] = useState(0);
  const [charLen, setCharLen] = useState(0);
  const [dir, setDir] = useState(1); // 1 = typing, -1 = deleting
  const [holding, setHolding] = useState(false);

  // keep config in ref so effect doesn't restart constantly
  const cfg = useRef({ typeMs, deleteMs, holdMs });
  useEffect(() => {
    cfg.current = { typeMs, deleteMs, holdMs };
  }, [typeMs, deleteMs, holdMs]);

  // If the list changes and current index is out of range, clamp (not sync in effect)
  useEffect(() => {
    if (!list.length) return;
    setWordIndex((i) => i % list.length);
  }, [list.length]);

  useEffect(() => {
    if (!enabled || paused) return;
    if (!list.length) return;
    if (document.hidden) return;

    const word = list[wordIndex % list.length];
    const { typeMs: T, deleteMs: D, holdMs: H } = cfg.current;

    let t;

    // Hold at full word before deleting
    if (holding) {
      t = setTimeout(() => {
        setHolding(false);
        setDir(-1);
      }, H);
      return () => clearTimeout(t);
    }

    if (dir === 1) {
      // typing
      if (charLen < word.length) {
        t = setTimeout(() => setCharLen((n) => n + 1), T);
      } else {
        setHolding(true);
      }
    } else {
      // deleting
      if (charLen > 0) {
        t = setTimeout(() => setCharLen((n) => n - 1), D);
      } else {
        // move to next word
        setDir(1);
        setWordIndex((i) => (i + 1) % list.length);
      }
    }

    return () => clearTimeout(t);
  }, [enabled, paused, list, wordIndex, charLen, dir, holding]);

  const currentWord = list.length ? list[wordIndex % list.length] : "";
  const text = currentWord.slice(0, charLen);

  return { text, hasWords: list.length > 0, firstWord: list[0] ?? "" };
}

export function HeroTypewriter({
  words = [
    "MERN Stack Projects",
    "Next.js Applications",
    "Modern User Interfaces",
  ],
}) {
  const wrapRef = useRef(null);
  const inView = useInView(wrapRef, { threshold: 0.35 });
  const prefersReduced = usePrefersReducedMotion();

  // pause on interaction
  const [paused, setPaused] = useState(false);

  const { text, firstWord } = useRotatingTypewriterState({
    words,
    enabled: inView && !prefersReduced,
    paused,
    typeMs: 55,
    deleteMs: 32,
    holdMs: 950,
  });

  // If reduced motion, render static text (no state syncing)
  const shown = prefersReduced ? firstWord : text;

  return (
    <span
      ref={wrapRef}
      className="inline-flex items-baseline gap-2 outline-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      onTouchStart={() => setPaused(true)}
      onTouchEnd={() => setPaused(false)}
      tabIndex={0}
      role="text"
      aria-label={shown}
    >
      <span
        className={[
          "relative inline-block whitespace-nowrap",
          "bg-gradient-to-r from-cyan-300 via-indigo-300 to-fuchsia-300",
          "bg-clip-text text-transparent",
          "drop-shadow-[0_0_18px_rgba(99,102,241,0.22)]",
          "shine-text",
          paused ? "shine-paused" : "",
        ].join(" ")}
      >
        {shown}
        <span className="pointer-events-none absolute -bottom-1 left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-fuchsia-400/40 to-transparent blur-[1px]" />
      </span>

      <span className="inline-block w-[1ch] text-fuchsia-200/90 animate-[caret_0.85s_step-end_infinite]">
        |
      </span>
    </span>
  );
}
