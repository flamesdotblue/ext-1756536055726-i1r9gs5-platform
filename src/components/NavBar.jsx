import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-neutral-200/70 bg-white/80 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button aria-label="Open menu" className="inline-flex md:hidden h-10 w-10 items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50">
              <Menu className="h-5 w-5" />
            </button>
            <a href="#" className="font-extrabold tracking-tight text-xl">
              PulseNews
            </a>
            <nav className="hidden md:flex items-center gap-6 text-sm text-neutral-700">
              <a href="#" className="hover:text-black">Top</a>
              <a href="#" className="hover:text-black">World</a>
              <a href="#" className="hover:text-black">Business</a>
              <a href="#" className="hover:text-black">Tech</a>
              <a href="#" className="hover:text-black">Sports</a>
            </nav>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <div className="hidden md:flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search articles"
                  className="pl-9 pr-3 h-10 w-64 rounded-md border border-neutral-200 bg-white text-sm placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                />
              </div>
            </div>
            <button aria-label="Notifications" className="h-10 w-10 inline-flex items-center justify-center rounded-md border border-neutral-200 hover:bg-neutral-50">
              <Bell className="h-5 w-5" />
            </button>
            <button className="hidden md:inline-flex h-10 items-center justify-center rounded-md bg-neutral-900 px-4 text-white hover:bg-neutral-800">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
