import React from 'react';
import { Clock, ShieldAlert, Film, Flame, Compass, Play, MapPin } from 'lucide-react';
import { movieData } from '../data/movieData';

export default function Synopsis({ onOpenTrailer }) {
  const iconMap = {
    Clock: <Clock className="w-6 h-6 text-amber-400" />,
    ShieldAlert: <ShieldAlert className="w-6 h-6 text-red-400" />,
    Film: <Film className="w-6 h-6 text-cyan-400" />,
    Flame: <Flame className="w-6 h-6 text-amber-500" />,
  };

  return (
    <section id="synopsis" className="py-24 relative bg-[#09090b] border-t border-neutral-900 scroll-mt-24 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono uppercase tracking-wider mb-4">
            <Compass className="w-3.5 h-3.5" />
            <span>The Narrative & Vision</span>
          </div>
          <h2 className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            WHAT THE MOVIE TALKS ABOUT
          </h2>
          <p className="font-arabic text-xl text-amber-400/90 mb-3">
            حكاية الشارع التونسي بين الصداقة، الخيانة، وساعة الحساب
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          
          {/* Left Column: Story & Narrative Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 backdrop-blur-md shadow-xl relative overflow-hidden group hover:border-neutral-700 transition-colors">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl"></div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100 mb-4 leading-snug">
                {movieData.synopsis.lead}
              </h3>
              
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
                {movieData.synopsis.story}
              </p>

              <blockquote className="border-l-4 border-amber-500 pl-4 py-2 my-4 bg-amber-500/5 rounded-r-lg font-arabic text-lg text-amber-200/90 italic">
                &ldquo;ما بين صاحب وعدو شعرة تفصل، وما بين الحقيقة والكذبة الوقت يفصل... والسر كي يخرج ما يرجعش للظلام.&rdquo;
              </blockquote>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700/60">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  Filmed in Tunisia (Tunis & Coastal Fortresses)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-800/80 border border-neutral-700/60">
                  <Film className="w-3.5 h-3.5 text-amber-400" />
                  Runtime: Psychological Thriller Short
                </span>
              </div>
            </div>

            {/* Quick Action bar */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenTrailer}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg shadow-amber-500/20"
              >
                <Play className="w-4 h-4 fill-current" />
                Play Official Trailer
              </button>
              <a
                href="#characters"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white font-medium text-xs uppercase tracking-wider border border-neutral-800 transition-colors"
              >
                Meet The Cast &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Key Poster Artwork Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl bg-neutral-950 group-hover:border-amber-500/50 transition-all duration-500">
              <img 
                src="/assets/posters/poster_s1.jpg" 
                alt="Moch WaQtou Poster" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="px-3 py-1 rounded-full bg-amber-500/90 text-neutral-950 text-xs font-bold uppercase tracking-wider inline-block mb-2">
                  Chapter 1: The Sunset Saga
                </span>
                <h4 className="font-cinematic text-xl font-bold text-white mb-1">
                  MOUCH WAQTOU !
                </h4>
                <p className="text-xs text-neutral-300 font-mono">
                  Official Key Visual • Directed & Produced in Tunisia
                </p>
              </div>
            </div>
            
            {/* Ambient backglow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 to-red-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity -z-10"></div>
          </div>

        </div>

        {/* Thematic Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {movieData.synopsis.themes.map((theme, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 hover:border-amber-500/40 hover:bg-neutral-900/70 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {iconMap[theme.icon]}
                </div>
                <div className="text-xs font-mono text-neutral-400 font-semibold mb-1">
                  0{idx + 1} // PILLAR
                </div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {theme.title}
                </h4>
                <p className="font-arabic text-sm text-amber-400/80 mb-3">
                  {theme.titleAr}
                </p>
                <p className="text-xs text-neutral-300 leading-relaxed font-light">
                  {theme.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-neutral-800/50 flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>MOCH WAQTOU</span>
                <span className="text-amber-500">&bull; THEME</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
