import React from 'react';
import { Play, Film, ExternalLink, Flame, Clock, Award, ChevronDown } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { movieData } from '../data/movieData';

export default function Hero({ onOpenTrailer, onOpenFullMovie }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden film-grain">
      
      {/* Background Poster Visual with Cinematic Vignette */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/assets/posters/poster_s1.jpg" 
          alt="Moch WaQtou Cinematic Sunset" 
          className="w-full h-full object-cover object-center opacity-25 filter blur-[2px] scale-105 transform motion-safe:animate-pulse-slow"
        />
        {/* Layered Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070708] via-[#070708]/85 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#070708] via-transparent to-[#070708]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-black/90"></div>
      </div>

      {/* Floating Ambient Lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Status / Category Pill */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-neutral-900/90 border border-amber-500/30 backdrop-blur-md mb-6 shadow-lg shadow-black/50">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          <span className="text-xs font-mono tracking-wider text-amber-300 uppercase font-semibold">
            Tunisian Psychological Thriller • Short Film Series
          </span>
          <span className="hidden sm:inline-block text-neutral-600">|</span>
          <a 
            href={movieData.instagram.url} 
            target="_blank" 
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-neutral-400 hover:text-pink-400 transition-colors font-mono"
          >
            <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
            <span>@mech_wa9to</span>
          </a>
        </div>

        {/* Arabic Title Overlay */}
        <h2 className="font-arabic text-3xl sm:text-5xl md:text-6xl font-black text-amber-500 tracking-wide mb-2 text-glow-amber drop-shadow-2xl">
          موش وقتو !
        </h2>

        {/* Main Cinematic Heading */}
        <h1 className="font-cinematic text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-400 mb-6 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]">
          MOCH WAQTOU
        </h1>

        {/* Tagline */}
        <p className="max-w-2xl text-base sm:text-xl md:text-2xl text-neutral-300 font-light tracking-wide mb-3 leading-relaxed">
          {movieData.tagline}
        </p>

        {/* Arabic Subtagline */}
        <p className="font-arabic text-sm sm:text-lg text-amber-200/80 mb-10 tracking-normal font-normal">
          {movieData.taglineArabic}
        </p>

        {/* Dual Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mb-12">
          
          {/* Primary CTA: Watch Trailer */}
          <button
            onClick={onOpenTrailer}
            className="w-full sm:w-auto flex-1 group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 text-neutral-950 font-bold text-sm tracking-wider uppercase shadow-xl shadow-amber-600/25 hover:shadow-amber-500/40 hover:scale-[1.03] transition-all duration-300 border border-amber-400/40"
          >
            <span className="p-1 rounded-full bg-black/20 text-neutral-950 group-hover:scale-110 transition-transform">
              <Play className="w-4 h-4 fill-current" />
            </span>
            <span>Watch Official Trailer</span>
          </button>

          {/* Secondary CTA: Watch Full Movie */}
          <a
            href={movieData.youtube.fullMovieUrl}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto flex-1 group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 hover:text-white font-semibold text-sm tracking-wider uppercase border border-neutral-700/80 hover:border-amber-500/40 backdrop-blur-md transition-all duration-300 hover:scale-[1.03] shadow-lg"
          >
            <Film className="w-4 h-4 text-amber-400" />
            <span>Watch Full Movie</span>
            <ExternalLink className="w-3.5 h-3.5 text-neutral-500 group-hover:text-amber-400 transition-colors" />
          </a>

        </div>

        {/* Season 2 Coming Soon Alert Banner */}
        <a 
          href="#season-2" 
          className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-red-950/40 via-neutral-900/80 to-red-950/40 border border-red-500/40 hover:border-red-400 transition-all duration-300 mb-12 shadow-lg hover:shadow-red-900/30"
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
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-4xl border-t border-neutral-800/80 pt-8">
          {movieData.stats.map((stat, i) => (
            <div key={i} className="p-4 rounded-xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-sm text-center group hover:border-amber-500/30 transition-colors">
              <div className="font-cinematic text-2xl sm:text-3xl font-extrabold text-amber-400 mb-1 group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-neutral-200 uppercase tracking-wider mb-0.5">
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
          className="mt-12 text-neutral-500 hover:text-amber-400 transition-colors flex flex-col items-center gap-1 text-xs font-mono animate-bounce"
        >
          <span>EXPLORE THE STORY</span>
          <ChevronDown className="w-4 h-4" />
        </a>

      </div>
    </section>
  );
}
