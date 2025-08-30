import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[78vh]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-white/80" />
      <div className="relative z-10 h-full">
        <div className="container mx-auto h-full px-4">
          <div className="flex h-full flex-col items-start justify-center max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
              The stories shaping the world — updated in real time
            </h1>
            <p className="mt-4 md:mt-6 text-lg md:text-xl text-neutral-700">
              Deep insights, crisp analysis, and live coverage across business, technology, and global affairs.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#news"
                className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-2.5 text-white hover:bg-neutral-800"
              >
                Read Top Stories
              </a>
              <a
                href="#subscribe"
                className="inline-flex items-center justify-center rounded-md border border-neutral-300 bg-white px-5 py-2.5 text-neutral-900 hover:bg-neutral-50"
              >
                Get News Alerts
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
