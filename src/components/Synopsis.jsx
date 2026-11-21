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
    <section id="synopsis" className="py-24 relative bg-[#090b12] border-t border-amber-500/20 scroll-mt-24 overflow-hidden">
      
      {/* Background sunset & dusk ambient glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-600/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-[140px] pointer-events-none"></div>

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
            <div className="p-8 rounded-3xl bg-[#0d0f18]/80 border border-amber-500/20 backdrop-blur-md shadow-2xl relative overflow-hidden group hover:border-amber-500/40 transition-colors">
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-gradient-to-br from-amber-500/20 to-red-600/10 rounded-full blur-2xl"></div>

              <h3 className="text-2xl sm:text-3xl font-bold text-neutral-100 mb-4 leading-snug">
                {movieData.synopsis.lead}
              </h3>
              
              <p className="text-neutral-300 text-base sm:text-lg leading-relaxed mb-6 font-light">
                {movieData.synopsis.story}
              </p>

              <blockquote className="border-l-4 border-amber-500 pl-4 py-3 my-4 bg-amber-500/10 rounded-r-xl font-arabic text-lg text-amber-200/90 italic">
                &ldquo;ما بين صاحب وعدو شعرة تفصل، وما بين الحقيقة والكذبة الوقت يفصل... والسر كي يخرج ما يرجعش للظلام.&rdquo;
              </blockquote>

              <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141724]/90 border border-amber-500/20 text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-red-400" />
                  Filmed in Tunisia (Tunis & Coastal Fortresses)
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#141724]/90 border border-amber-500/20 text-neutral-300">
                  <Film className="w-3.5 h-3.5 text-amber-400" />
                  Runtime: Psychological Thriller Short
                </span>
              </div>
            </div>

            {/* Quick Action bar */}
            <div className="flex items-center gap-4">
              <button
                onClick={onOpenTrailer}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-neutral-950 font-black text-xs uppercase tracking-wider transition-all shadow-xl shadow-amber-500/25 hover:scale-[1.02]"
              >
                <Play className="w-4 h-4 fill-current" />
                Play Official Trailer
              </button>
              <a
                href="#characters"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#0f121d] hover:bg-[#151a28] text-neutral-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-amber-500/30 transition-colors"
              >
                Meet The Cast &rarr;
              </a>
            </div>
          </div>

          {/* Right Column: Key Poster Artwork Card */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl bg-neutral-950 group-hover:border-amber-400/60 transition-all duration-500">
              <img 
                src="/assets/posters/cinema_hero_banner.jpg" 
                alt="Mouch Waqtou Official Poster" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="px-3 py-1 rounded-full bg-amber-500 text-neutral-950 text-xs font-black uppercase tracking-wider inline-block mb-2 shadow-md">
                  Chapter 1: The Sunset Saga
                </span>
                <h4 className="font-cinematic text-2xl font-black text-white mb-1">
                  MOUCH WAQTOU !
                </h4>
                <p className="text-xs text-amber-200/80 font-arabic font-semibold">
                  موش وقتو — الفيلم التشويقي التونسي
                </p>
              </div>
            </div>
            
            {/* Ambient sunset backglow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-red-600 to-amber-600 rounded-3xl blur-2xl opacity-25 group-hover:opacity-50 transition-opacity -z-10"></div>
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
