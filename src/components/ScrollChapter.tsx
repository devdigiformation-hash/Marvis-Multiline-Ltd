'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HighlightItem {
  title: string;
  desc: string;
}

export interface ScrollChapterProps {
  chapterNumber: string;
  slug: string;
  divisionTitle: string;
  badge: string;
  headline: string;
  description: string;
  highlights: HighlightItem[];
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  desktopAlign: 'right' | 'left';
  frameCount?: number;
  framePattern?: string;
  posterUrl: string;
}

export default function ScrollChapter({
  chapterNumber,
  slug,
  divisionTitle,
  badge,
  headline,
  description,
  highlights,
  primaryCta,
  secondaryCta,
  desktopAlign,
  frameCount = 75,
  framePattern = `/media/chapters/${slug}/frames/frame_%03d.jpg`,
  posterUrl,
}: ScrollChapterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Track cached images
  const imagesCacheRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const activeFrameRef = useRef<number>(1);
  const rafIdRef = useRef<number | null>(null);

  const [isNearViewport, setIsNearViewport] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrameDisplay, setCurrentFrameDisplay] = useState(1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Check reduced motion
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);
      const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
      mediaQuery.addEventListener('change', listener);
      return () => mediaQuery.removeEventListener('change', listener);
    }
  }, []);

  // Format frame URL
  const getFrameUrl = useCallback(
    (index: number) => {
      const padded = String(index).padStart(3, '0');
      return framePattern.replace('%03d', padded);
    },
    [framePattern]
  );

  // Draw frame on canvas with object-fit: cover
  const drawFrame = useCallback((img: HTMLImageElement) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cw = canvas.width;
    const ch = canvas.height;
    const iw = img.naturalWidth || 1920;
    const ih = img.naturalHeight || 1080;

    // Cover math
    const hRatio = cw / iw;
    const vRatio = ch / ih;
    const ratio = Math.max(hRatio, vRatio);
    const centerShiftX = (cw - iw * ratio) / 2;
    const centerShiftY = (ch - ih * ratio) / 2;

    ctx.clearRect(0, 0, cw, ch);
    ctx.drawImage(
      img,
      0,
      0,
      iw,
      ih,
      centerShiftX,
      centerShiftY,
      iw * ratio,
      ih * ratio
    );
  }, []);

  // Paint specific frame index
  const renderFrameIndex = useCallback(
    (targetIndex: number) => {
      const clamped = Math.max(1, Math.min(frameCount, targetIndex));
      activeFrameRef.current = clamped;
      setCurrentFrameDisplay(clamped);

      const cached = imagesCacheRef.current.get(clamped);
      if (cached && cached.complete) {
        drawFrame(cached);
      } else {
        // Find nearest loaded frame
        for (let offset = 1; offset < 10; offset++) {
          const lower = imagesCacheRef.current.get(clamped - offset);
          if (lower && lower.complete) {
            drawFrame(lower);
            break;
          }
          const higher = imagesCacheRef.current.get(clamped + offset);
          if (higher && higher.complete) {
            drawFrame(higher);
            break;
          }
        }
      }
    },
    [drawFrame, frameCount]
  );

  // Resize canvas according to device pixel ratio
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(rect.width * dpr);
    canvas.height = Math.round(rect.height * dpr);
    renderFrameIndex(activeFrameRef.current);
  }, [renderFrameIndex]);

  // Viewport intersection observer to lazy-load sequence
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNearViewport(true);
          }
        });
      },
      { rootMargin: '600px 0px 600px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Preload initial poster and progressively load frames when near viewport
  useEffect(() => {
    if (!isNearViewport || prefersReducedMotion) return;

    let loadedCount = 0;
    const totalToLoad = frameCount;

    // Load keyframe anchor frames first (every 5th frame for fast responsiveness), then fill in
    const keyframes: number[] = [];
    const normalFrames: number[] = [];

    for (let i = 1; i <= totalToLoad; i++) {
      if (i === 1 || i === totalToLoad || i % 4 === 0) {
        keyframes.push(i);
      } else {
        normalFrames.push(i);
      }
    }

    const loadOrder = [...keyframes, ...normalFrames];

    const loadImage = (idx: number) => {
      if (imagesCacheRef.current.has(idx)) return;
      const img = new Image();
      img.src = getFrameUrl(idx);
      img.onload = () => {
        imagesCacheRef.current.set(idx, img);
        loadedCount++;
        setLoadProgress(Math.round((loadedCount / totalToLoad) * 100));
        if (idx === 1 && activeFrameRef.current === 1) {
          drawFrame(img);
        }
        if (loadedCount >= totalToLoad) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
      };
    };

    // Stagger loading
    loadOrder.forEach((idx, orderIndex) => {
      if (orderIndex < 10) {
        loadImage(idx);
      } else {
        setTimeout(() => loadImage(idx), Math.min(orderIndex * 15, 1200));
      }
    });

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isNearViewport, prefersReducedMotion, frameCount, getFrameUrl, drawFrame, handleResize]);

  // Scroll handler tied to container progress
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (rafIdRef.current) return;

      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        const container = containerRef.current;
        if (!container) return;

        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Start scrub when container top reaches bottom of viewport, finish when container bottom leaves top
        // Or sticky container progress:
        // Container height is e.g. 180vh. Visual is sticky inside.
        const scrollableDistance = rect.height - windowHeight;
        if (scrollableDistance <= 0) return;

        // Current progress [0 to 1]
        const topOffset = -rect.top;
        const progress = Math.max(0, Math.min(1, topOffset / scrollableDistance));

        const targetFrame = Math.round(progress * (frameCount - 1)) + 1;
        if (targetFrame !== activeFrameRef.current) {
          renderFrameIndex(targetFrame);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [frameCount, renderFrameIndex, prefersReducedMotion]);

  // Visual order on desktop: right visual = content on left, visual on right; left visual = visual on left, content on right.
  const isVisualRight = desktopAlign === 'right';

  return (
    <section
      ref={containerRef}
      id={slug}
      className="relative min-h-[160vh] md:min-h-[180vh] bg-brand-surface-dark border-b border-brand-navy-light/40"
    >
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-8 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Visual Canvas Column (Desktop alternating) */}
            <div
              className={`w-full lg:col-span-7 relative ${
                isVisualRight ? 'lg:order-2' : 'lg:order-1'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden border border-brand-gold/30 bg-black/60 shadow-2xl group">
                {/* 16:9 Canvas Container */}
                <div className="relative w-full aspect-video">
                  {prefersReducedMotion ? (
                    <img
                      src={posterUrl}
                      alt={divisionTitle}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <canvas
                        ref={canvasRef}
                        aria-hidden="true"
                        className="w-full h-full object-cover block"
                      />
                      {/* Loading & Scrubbing HUD overlay */}
                      <div className="absolute top-3 left-3 flex items-center space-x-2 bg-brand-navy-deep/80 backdrop-blur-md px-3 py-1 rounded-full border border-brand-gold/40 text-xs font-mono text-brand-gold">
                        <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
                        <span>
                          CHAPTER {chapterNumber} • FRAME {String(currentFrameDisplay).padStart(2, '0')}/{frameCount}
                        </span>
                      </div>
                      
                      {/* Scroll scrub prompt */}
                      <div className="absolute bottom-3 right-3 hidden sm:flex items-center space-x-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[11px] text-gray-300 border border-white/10">
                        <span>Scroll to scrub</span>
                        <span className="text-brand-gold font-bold">↕</span>
                      </div>
                    </>
                  )}
                </div>

                {/* Ambient glow accent */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-gold/10 via-transparent to-brand-navy-light/20 -z-10 blur-xl opacity-60 pointer-events-none"></div>
              </div>
            </div>

            {/* Editorial Content Column */}
            <div
              className={`w-full lg:col-span-5 ${
                isVisualRight ? 'lg:order-1' : 'lg:order-2'
              }`}
            >
              {/* Division Badge */}
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy-light/60 border border-brand-gold/40 text-brand-gold text-xs font-semibold tracking-wider uppercase mb-3">
                <span>CHAPTER {chapterNumber}</span>
                <span className="text-gray-400">•</span>
                <span>{badge}</span>
              </div>

              {/* Title & Headline */}
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
                {headline}
              </h2>

              {/* Editorial Description */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {description}
              </p>

              {/* Verified Division Highlights */}
              <div className="space-y-3 mb-8">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-bold bg-brand-gold hover:bg-brand-gold-light text-brand-navy-dark transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-brand-gold/20"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center px-5 py-3 rounded-lg text-sm font-medium text-gray-200 bg-brand-navy-light/60 hover:bg-brand-navy-light border border-white/10 hover:border-brand-gold/40 transition-all duration-200"
                  >
                    {secondaryCta.label}
                  </Link>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
