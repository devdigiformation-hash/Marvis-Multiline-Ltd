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

  const [headerHeight, setHeaderHeight] = useState<number>(72);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentFrameDisplay, setCurrentFrameDisplay] = useState(1);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Measure rendered sticky header height dynamically
  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerEl = document.querySelector('header');
      if (headerEl) {
        const rect = headerEl.getBoundingClientRect();
        if (rect.height > 0) {
          setHeaderHeight(Math.round(rect.height));
        }
      }
    };

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    return () => window.removeEventListener('resize', updateHeaderHeight);
  }, []);

  // Check reduced motion preference
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

    // Cover math preserving subject-safe framing
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
        // Fallback to nearest loaded frame
        for (let offset = 1; offset < 15; offset++) {
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
    if (rect.width === 0 || rect.height === 0) return;
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

  // Preload frames progressively when near viewport
  useEffect(() => {
    if (!isNearViewport || prefersReducedMotion) return;

    let loadedCount = 0;
    const totalToLoad = frameCount;

    // Load keyframe anchor frames first (every 4th frame for instant scrub response), then fill in
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
      if (orderIndex < 12) {
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

  // Center-pinned scroll scrub handler
  useEffect(() => {
    if (prefersReducedMotion) return;

    const handleScroll = () => {
      if (rafIdRef.current) return;

      rafIdRef.current = requestAnimationFrame(() => {
        rafIdRef.current = null;
        const container = containerRef.current;
        if (!container) return;

        const containerRect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Pin begins when container top reaches header height (safe visible top)
        // Usable viewport height below header:
        const usableHeight = windowHeight - headerHeight;
        
        // Total scrollable travel distance within this chapter while pinned:
        const scrollDistance = containerRect.height - usableHeight;
        if (scrollDistance <= 0) return;

        // Current scroll offset into the pin stage:
        const scrolledDistance = headerHeight - containerRect.top;
        
        // Normalized progress strictly in [0, 1]
        const progress = Math.max(0, Math.min(1, scrolledDistance / scrollDistance));

        // Exact frame mapping:
        // frameIndex = clamp(round(progress * (N - 1)), 0, N - 1) + 1
        const targetFrame = Math.min(
          frameCount,
          Math.max(1, Math.round(progress * (frameCount - 1)) + 1)
        );

        if (targetFrame !== activeFrameRef.current) {
          renderFrameIndex(targetFrame);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial calculation on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, [frameCount, renderFrameIndex, prefersReducedMotion, headerHeight]);

  // Visual order on desktop: right visual = content on left, visual on right; left visual = visual on left, content on right.
  const isVisualRight = desktopAlign === 'right';

  return (
    <section
      ref={containerRef}
      id={slug}
      className="relative min-h-[200vh] sm:min-h-[220vh] bg-brand-surface-dark border-b border-brand-navy-light/40"
    >
      {/* Pinned Stage: Anchored strictly below header, vertically centered in usable viewport */}
      <div
        style={{
          top: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px)`,
        }}
        className="sticky w-full flex items-center justify-center overflow-hidden z-10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-4 sm:py-6 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
            
            {/* Visual Canvas Column (Desktop alternating) */}
            <div
              className={`w-full lg:col-span-7 relative ${
                isVisualRight ? 'lg:order-2' : 'lg:order-1'
              }`}
            >
              <div className="relative rounded-2xl overflow-hidden border border-brand-gold/30 bg-black/60 shadow-2xl group max-h-[42vh] sm:max-h-[50vh] lg:max-h-none mx-auto">
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
                      <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 flex items-center space-x-2 bg-brand-navy-deep/85 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-brand-gold/40 text-[10px] sm:text-xs font-mono text-brand-gold shadow">
                        <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-gold animate-pulse"></span>
                        <span>
                          CH {chapterNumber} • FRAME {String(currentFrameDisplay).padStart(2, '0')}/{frameCount}
                        </span>
                      </div>
                      
                      {/* Scroll scrub prompt */}
                      <div className="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 flex items-center space-x-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] sm:text-[11px] text-gray-300 border border-white/10">
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
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-navy-light/60 border border-brand-gold/40 text-brand-gold text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-2 sm:mb-3">
                <span>CHAPTER {chapterNumber}</span>
                <span className="text-gray-400">•</span>
                <span>{badge}</span>
              </div>

              {/* Title & Headline */}
              <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white tracking-tight leading-snug sm:leading-tight mb-2 sm:mb-3">
                {headline}
              </h2>

              {/* Editorial Description */}
              <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed mb-3 sm:mb-5 font-light line-clamp-3 sm:line-clamp-none">
                {description}
              </p>

              {/* Verified Division Highlights */}
              <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-2.5 sm:space-x-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white">{item.title}</h4>
                      <p className="text-[11px] sm:text-xs text-gray-400 hidden sm:block">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                <Link
                  href={primaryCta.href}
                  className="inline-flex items-center justify-center px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-bold bg-brand-gold hover:bg-brand-gold-light text-brand-navy-dark transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg shadow-brand-gold/20"
                >
                  <span>{primaryCta.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2" />
                </Link>

                {secondaryCta && (
                  <Link
                    href={secondaryCta.href}
                    className="inline-flex items-center justify-center px-3.5 sm:px-5 py-2.5 sm:py-3 rounded-lg text-xs sm:text-sm font-medium text-gray-200 bg-brand-navy-light/60 hover:bg-brand-navy-light border border-white/10 hover:border-brand-gold/40 transition-all duration-200"
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
