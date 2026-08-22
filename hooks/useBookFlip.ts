"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

let pluginRegistered = false;

interface UseBookFlipRefs {
  sceneRef: RefObject<HTMLDivElement | null>;
  bookRef: RefObject<HTMLDivElement | null>;
  hintRef: RefObject<HTMLParagraphElement | null>;
}

const clamp = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

/**
 * Direct port of the original script.js: Lenis smooth scroll + GSAP
 * ScrollTrigger pinning drive a 3D page-flip animation. Desktop pins the
 * full spread and flips each `.leaf`; mobile collapses every face into a
 * full-screen page and flips one at a time (see globals.css @media block).
 */
export function useBookFlip({ sceneRef, bookRef, hintRef }: UseBookFlipRefs) {
  useEffect(() => {
    if (!pluginRegistered) {
      gsap.registerPlugin(ScrollTrigger);
      pluginRegistered = true;
    }

    const scene = sceneRef.current;
    const book = bookRef.current;
    const hint = hintRef.current;
    if (!scene || !book) return;

    const root = document.documentElement;

    // ---------- Smooth scrolling via Lenis ----------
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // ---------- Top progress bar ----------
    const bar = document.querySelector<HTMLElement>(".progress__bar");
    const setBar = (p: number) => {
      if (bar) bar.style.width = (p * 100).toFixed(2) + "%";
    };
    const onLenisScroll = (e: { scroll: number }) => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setBar(max > 0 ? e.scroll / max : 0);
    };
    lenis.on("scroll", onLenisScroll);

    // ---------- Inject lighting overlays into each leaf ----------
    const leaves = Array.from(book.querySelectorAll<HTMLElement>(".leaf"));
    const shades: HTMLDivElement[] = [];
    leaves.forEach((leaf) => {
      const shade = document.createElement("div");
      shade.className = "leaf__shade";
      leaf.appendChild(shade);
      shades.push(shade);
    });

    const N = leaves.length;

    function applyFlip(progress: number) {
      for (let i = 0; i < N; i++) {
        const leaf = leaves[i];
        const local = clamp(progress * N - i);
        leaf.style.transform = `rotateY(${-180 * local}deg)`;

        let z: number;
        if (local <= 0) z = N - i;
        else if (local >= 1) z = N + i;
        else z = 2 * N + 5;
        leaf.style.zIndex = String(z);

        const shade = shades[i];
        if (shade) shade.style.opacity = (Math.sin(local * Math.PI) * 0.45).toFixed(3);
      }
    }

    function fitBook() {
      const bw = book!.offsetWidth || 880;
      const bh = book!.offsetHeight || 660;
      const s = Math.min(
        (window.innerWidth * 0.92) / bw,
        (window.innerHeight * 0.9) / bh
      );
      root.style.setProperty("--book-scale", Math.min(s, 1.2).toFixed(4));
    }

    const mm = gsap.matchMedia();

    mm.add("(min-width: 769px)", () => {
      fitBook();
      applyFlip(0);
      window.addEventListener("resize", fitBook);

      const st = ScrollTrigger.create({
        trigger: scene,
        start: "top top",
        end: () => "+=" + (N + 0.6) * window.innerHeight,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          applyFlip(self.progress);
          if (hint) hint.style.opacity = self.progress > 0.02 ? "0" : "1";
        },
      });

      return () => {
        st.kill();
        window.removeEventListener("resize", fitBook);
        root.style.setProperty("--book-scale", "1");
        leaves.forEach((leaf, i) => {
          leaf.style.transform = "";
          leaf.style.zIndex = "";
          const shade = shades[i];
          if (shade) shade.style.opacity = "";
        });
      };
    });

    mm.add("(max-width: 768px)", () => {
      // Cover (page--left-base) becomes page 0 on mobile too, then flips
      // away like any other page since there's no side-by-side spread.
      const leftBase = book!.querySelector<HTMLElement>(".page--left-base .face");
      const pages = Array.from(book!.querySelectorAll<HTMLElement>(".leaf__face"));
      if (leftBase) pages.unshift(leftBase);
      const rightBase = document.querySelector<HTMLElement>(".page--right-base .face");
      if (rightBase) pages.push(rightBase);
      const M = pages.length;
      const F = M - 1;

      pages.forEach((p, i) => {
        p.style.zIndex = String(M - i);
        p.style.transform = "rotateY(0deg)";
      });

      function applyFlipMobile(progress: number) {
        for (let i = 0; i < M; i++) {
          if (i >= F) {
            pages[i].style.transform = "rotateY(0deg)";
            continue;
          }
          const local = clamp(progress * F - i);
          pages[i].style.transform = `rotateY(${-180 * local}deg)`;
        }
      }

      fitBook();
      applyFlipMobile(0);
      window.addEventListener("resize", fitBook);

      const stM = ScrollTrigger.create({
        trigger: scene,
        start: "top top",
        end: () => "+=" + (F + 0.6) * window.innerHeight,
        pin: true,
        scrub: 0.6,
        onUpdate: (self) => {
          applyFlipMobile(self.progress);
          if (hint) hint.style.opacity = self.progress > 0.02 ? "0" : "1";
        },
      });

      return () => {
        stM.kill();
        window.removeEventListener("resize", fitBook);
        root.style.setProperty("--book-scale", "1");
        pages.forEach((p) => {
          p.style.transform = "";
          p.style.zIndex = "";
        });
      };
    });

    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      mm.revert();
      gsap.ticker.remove(raf);
      lenis.off("scroll", onLenisScroll);
      lenis.destroy();
      shades.forEach((shade) => shade.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}