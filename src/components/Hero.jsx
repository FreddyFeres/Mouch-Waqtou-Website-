import React from 'react';
import { Play, Film, ExternalLink, Flame, Clock, Award, ChevronDown, Sparkles } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { movieData } from '../data/movieData';

export default function Hero({ onOpenTrailer, onOpenFullMovie }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden film-grain">
      
      {/* Background Poster Visual matching Official Artwork */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/posters/cinema_hero_banner.jpg" 
          alt="Mouch Waqtou Official Cinematic Sunset Poster" 
          className="w-full h-full object-cover object-top filter brightness-[0.55] saturate-[1.15] scale-[1.02] transform motion-safe:animate-pulse-slow"
        />

        {/* Cinematic Layered Vignette & Sunset Ambient Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#08090d] via-transparent to-[#08090d]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090d]/90 via-[#08090d]/30 to-[#08090d]/90"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_20%,_#08090d_85%)]"></div>

        {/* Warm Golden Sunset Flare (Right) & Desert Dusk Glow (Left) */}
        <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-gradient-to-l from-amber-500/25 to-transparent rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-gradient-to-r from-red-600/20 to-transparent rounded-full blur-[130px] pointer-events-none"></div>
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-amber-600/10 rounded-full blur-[160px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Status / Category Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0d0f17]/90 border border-amber-500/40 backdrop-blur-md mb-5 shadow-xl shadow-amber-950/40">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span className="text-xs font-mono tracking-wider text-amber-300 uppercase font-semibold">
            Tunisian Psychological Thriller • Short Film Series
          </span>
          <span className="hidden sm:inline-block text-neutral-600">|</span>
          <a 
            href={movieData.instagram.url} 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-pink-400 transition-colors font-mono"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
            <span>@mech_wa9to</span>
          </a>
        </div>

        {/* Poster-Accurate Arabic Title */}
        <h1 className="font-arabic text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-[#fdf5e6] tracking-wide mb-1 text-glow-amber drop-shadow-[0_15px_30px_rgba(0,0,0,0.95)]">
          موش وقتو !
        </h1>

        {/* Signature Red Brush Stroke Bar from Poster */}
        <div className="w-48 sm:w-72 md:w-96 h-2 sm:h-2.5 poster-red-bar mx-auto my-2.5 shadow-lg shadow-red-600/50"></div>

        {/* Tracked Cinematic Roman Title */}
        <div className="flex items-center justify-center gap-3 text-xs sm:text-sm md:text-base font-cinematic font-black tracking-[0.35em] text-amber-300 uppercase mb-6 drop-shadow-md">
          <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400 to-amber-300"></span>
          <span>MOUCH WAQTOU !</span>
          <span className="w-8 sm:w-16 h-[1.5px] bg-gradient-to-l from-transparent via-amber-400 to-amber-300"></span>
        </div>

        {/* Tagline */}
        <p className="max-w-2xl text-base sm:text-xl md:text-2xl text-neutral-200 font-light tracking-wide mb-3 leading-relaxed drop-shadow-md">
          {movieData.tagline}
        </p>

        {/* Arabic Subtagline */}
        <p className="font-arabic text-sm sm:text-lg text-amber-200/90 mb-10 tracking-normal font-normal drop-shadow-sm">
          {movieData.taglineArabic}
        </p>

        {/* Dual Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12">
          
          {/* Primary CTA: Watch Trailer */}
          <button
            onClick={onOpenTrailer}
            className="w-full sm:w-auto flex-1 group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-600 text-neutral-950 font-black text-sm tracking-wider uppercase shadow-2xl shadow-amber-500/30 hover:shadow-amber-400/50 hover:scale-[1.03] transition-all duration-300 border border-amber-300/50"
          >
            <span className="p-1 rounded-full bg-black/20 text-neutral-950 group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </span>
            <span>Watch Official Trailer</span>
          </button>

          {/* Secondary CTA: Watch Full Movie */}
          <a
            href={movieData.youtube.fullMovieUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex-1 group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#0e1017]/90 hover:bg-[#161a25] text-neutral-100 hover:text-white font-bold text-sm tracking-wider uppercase border border-amber-500/30 hover:border-amber-400 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] shadow-xl shadow-black/60"
          >
            <Film className="w-4 h-4 text-amber-400" />
            <span>Watch Full Movie</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-amber-300 transition-colors" />
          </a>

        </div>

        {/* Season 2 Coming Soon Alert Banner */}
        <a 
          href="#season-2" 
          className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-red-950/60 via-[#10121a]/90 to-red-950/60 border border-red-500/40 hover:border-red-400 transition-all duration-300 mb-12 shadow-xl hover:shadow-red-950/50"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-semibold text-red-200 tracking-wide">
            SEASON 2 IN PRODUCTION: <span className="font-cinematic text-white font-bold">MOUCH WAQTOU 2</span>
          </span>
          <span className="text-xs font-mono text-amber-400 underline underline-offset-4 group-hover:text-amber-300">
            View Teaser & Dossier &rarr;
          </span>
        </a>

        {/* Stats Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl border-t border-amber-500/20 pt-8">
          {movieData.stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-2xl bg-[#0c0e15]/70 border border-amber-500/20 backdrop-blur-md text-center group hover:border-amber-500/50 hover:bg-[#121622]/80 transition-all shadow-lg">
              <div className="font-cinematic text-2xl sm:text-3xl font-black text-amber-400 mb-1 group-hover:scale-105 transition-transform text-glow-gold">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-neutral-100 uppercase tracking-wider mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-neutral-400 font-mono">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <a 
          href="#synopsis" 
          className="mt-12 text-neutral-400 hover:text-amber-400 transition-colors flex flex-col items-center gap-1 text-xs font-mono animate-bounce"
        >
          <span>EXPLORE THE STORY</span>
          <ChevronDown className="w-4 h-4" />
        </a>

      </div>
    </section>
  );
}
