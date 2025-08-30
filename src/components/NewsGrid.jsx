import React, { useMemo, useState } from 'react';
import { Clock, Globe, TrendingUp, Newspaper } from 'lucide-react';

const allArticles = [
  {
    id: '1',
    title: 'Markets rally as inflation cools; tech leads gains',
    excerpt: 'Investors cheered a softer inflation print, fueling a broad-based rally with mega-cap tech at the forefront.',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=1600&auto=format&fit=crop',
    time: '12m ago',
    byline: 'By Sarah Chen',
  },
  {
    id: '2',
    title: 'Breakthrough in quantum networking promises ultra-secure communications',
    excerpt: 'Researchers link multi-node quantum systems, paving the way for scalable, tamper-proof data transfer.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1600&auto=format&fit=crop',
    time: '27m ago',
    byline: 'By Alex Romero',
  },
  {
    id: '3',
    title: 'Global leaders convene for emergency summit on climate resilience',
    excerpt: 'A coordinated plan aims to accelerate adaptation funding and infrastructure across vulnerable regions.',
    category: 'World',
    image: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1600&auto=format&fit=crop',
    time: '41m ago',
    byline: 'By Lila Ahmed',
  },
  {
    id: '4',
    title: 'Underdogs upset tournament favorites in stunning quarterfinal finish',
    excerpt: 'A last-minute goal sealed a historic win, sending shockwaves through the championship bracket.',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?q=80&w=1600&auto=format&fit=crop',
    time: '1h ago',
    byline: 'By Marcus Lee',
  },
  {
    id: '5',
    title: 'New battery chemistry promises faster charging and longer life cycles',
    excerpt: 'Startups race to commercialize solid-state breakthroughs for next-gen consumer devices and EVs.',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
    time: '2h ago',
    byline: 'By Priya Nair',
  },
  {
    id: '6',
    title: 'Supply chains normalize as shipping rates return to pre-pandemic levels',
    excerpt: 'Logistics firms report improved port throughput and shorter lead times across key trade lanes.',
    category: 'Business',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop',
    time: '2h ago',
    byline: 'By Daniel Ortiz',
  },
  {
    id: '7',
    title: 'New pact expands data-sharing to fight global cybercrime',
    excerpt: 'Governments finalize framework to streamline cross-border investigations and evidence collection.',
    category: 'World',
    image: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=1600&auto=format&fit=crop',
    time: '3h ago',
    byline: 'By Naomi Fischer',
  },
  {
    id: '8',
    title: 'Rising stars redefine the game as analytics reshape team strategies',
    excerpt: 'Data-driven coaching unlocks player potential while changing how fans experience the sport.',
    category: 'Sports',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1600&auto=format&fit=crop',
    time: '3h ago',
    byline: 'By Eli Turner',
  },
];

const categories = ['All', 'World', 'Business', 'Technology', 'Sports'];

export default function NewsGrid() {
  const [active, setActive] = useState('All');

  const articles = useMemo(() => {
    if (active === 'All') return allArticles;
    return allArticles.filter((a) => a.category === active);
  }, [active]);

  return (
    <div id="news" className="w-full">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5">
            <Newspaper className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-wide">Top Stories</span>
          </div>
          <h2 className="mt-3 text-2xl md:text-3xl font-bold tracking-tight">Latest coverage across categories</h2>
          <p className="mt-1 text-neutral-600">Curated highlights updated throughout the day.</p>
        </div>
        <CategoryPills active={active} onChange={setActive} />
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {articles.map((a) => (
          <ArticleCard key={a.id} article={a} />)
        )}
      </div>
    </div>
  );
}

function CategoryPills({ active, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {categories.map((c) => {
        const selected = c === active;
        return (
          <button
            key={c}
            onClick={() => onChange(c)}
            className={
              `inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-sm transition ` +
              (selected
                ? 'border-neutral-900 bg-neutral-900 text-white'
                : 'border-neutral-200 bg-white text-neutral-900 hover:bg-neutral-50')
            }
            aria-pressed={selected}
          >
            {c === 'All' && <TrendingUp className="h-4 w-4" />}
            {c === 'World' && <Globe className="h-4 w-4" />}
            {c}
          </button>
        );
      })}
    </div>
  );
}

function ArticleCard({ article }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-neutral-200 bg-white transition hover:shadow-md">
      <a href="#" className="block">
        <div className="aspect-[16/9] w-full overflow-hidden bg-neutral-100">
          <img
            src={article.image}
            alt=""
            className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2 text-xs text-neutral-600">
            <span className="inline-flex items-center rounded-sm bg-neutral-900/90 px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-white">{article.category}</span>
            <span className="inline-flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {article.time}</span>
          </div>
          <h3 className="mt-2 line-clamp-2 text-lg font-semibold leading-snug group-hover:underline">
            {article.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-sm text-neutral-700">{article.excerpt}</p>
          <div className="mt-3 text-sm text-neutral-600">{article.byline}</div>
        </div>
      </a>
    </article>
  );
}
