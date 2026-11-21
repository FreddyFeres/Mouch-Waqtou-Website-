import React from 'react';
import { Film, Heart, ArrowUp, Mail, Sparkles } from 'lucide-react';
import { InstagramIcon, YoutubeIcon } from './Icons';
import { movieData } from '../data/movieData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#06070a] border-t border-amber-950/40 pt-16 pb-12 text-neutral-400">
      
      {/* Red/amber bottom glow matching poster palette */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
      <div className="absolute bottom-0 right-10 w-96 h-48 bg-amber-500/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-red-900/30 border border-amber-500/30 flex items-center justify-center">
                <Film className="w-5 h-5 text-amber-400" />
              </div>
              <div>
                <h3 className="font-cinematic text-lg font-bold text-white tracking-widest">
                  MOCH WAQTOU
                </h3>
                <span className="font-arabic text-xs text-amber-400">موش وقتو !</span>
              </div>
            </div>
            
            <p className="text-xs text-neutral-400 leading-relaxed font-light">
              An independent Tunisian psychological thriller and suspense short film series. Exploring urban grit, brotherhood, betrayal, and high-stakes survival.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={movieData.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 hover:bg-pink-950 text-neutral-300 hover:text-pink-400 border border-neutral-800 hover:border-pink-500/40 transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={movieData.youtube.fullMovieUrl}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-neutral-900 hover:bg-red-950 text-neutral-300 hover:text-red-400 border border-neutral-800 hover:border-red-500/40 transition-colors"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Cast & Crew Credits */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-200 font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Key Cast & Characters
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex justify-between border-b border-neutral-900 pb-1.5">
                <span className="text-white font-medium">Youssef Miledi</span>
                <span className="font-mono text-amber-400">Josef / جوزاف</span>
              </li>
              <li className="flex justify-between border-b border-neutral-900 pb-1.5">
                <span className="text-white font-medium">Feres Fatmi</span>
                <span className="font-mono text-amber-400">Freddy / فريدي</span>
              </li>
              <li className="flex justify-between border-b border-neutral-900 pb-1.5">
                <span className="text-white font-medium">Rahma Maalaoui</span>
                <span className="font-mono text-purple-400">Don Aurora</span>
              </li>
              <li className="flex justify-between border-b border-neutral-900 pb-1.5">
                <span className="text-white font-medium">Ghaith</span>
                <span className="font-mono text-purple-400">Vincenzo</span>
              </li>
              <li className="flex justify-between border-b border-neutral-900 pb-1.5">
                <span className="text-white font-medium">Khalil Ghozi</span>
                <span className="font-mono text-rose-400">Rostom / روستوم</span>
              </li>
              <li className="flex justify-between border-b border-neutral-900 pb-1.5">
                <span className="text-white font-medium">Mohamed Ben Kraiem</span>
                <span className="font-mono text-emerald-400">Bouhmid (IT Core)</span>
              </li>
              <li className="flex justify-between border-b border-neutral-900 pb-1.5">
                <span className="text-white font-medium">Beyrem Kriaa</span>
                <span className="font-mono text-cyan-400">Detective Bayrem</span>
              </li>
              <li className="flex justify-between border-b border-neutral-900 pb-1.5">
                <span className="text-white font-medium">Elaa Boughalmi</span>
                <span className="font-mono text-blue-400">Detective Elaa</span>
              </li>
            </ul>
          </div>

          {/* Production & Chapters */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-200 font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
              Production & Series
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="flex items-center gap-2 pb-2">
                <img
                  src="/assets/freddy_studio_logo.jpg"
                  alt="Freddy Studio"
                  className="w-8 h-8 rounded-lg object-cover border border-amber-500/30 shrink-0"
                />
                <div>
                  <span className="text-neutral-200 font-medium block">Production Studio:</span>
                  <a
                    href="https://www.instagram.com/freddystudio2026/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-cinematic text-amber-400 hover:text-amber-300 font-bold tracking-wide transition-colors"
                  >
                    FREDDY STUDIO
                  </a>
                </div>
              </li>
              <li>
                <span className="text-neutral-200 font-medium block">Chapter 1:</span>
                <span>Mouch Waqtou (The Sunset Saga)</span>
              </li>
              <li>
                <span className="text-neutral-200 font-medium block">Chapter 2:</span>
                <span className="text-red-400 font-semibold">Mouch Waqtou 2 (Stay Tuned)</span>
              </li>
              <li>
                <span className="text-neutral-200 font-medium block">Location:</span>
                <span>Tunis, Tunisia 🇹🇳</span>
              </li>
            </ul>
          </div>

          {/* Quick Links & Back to top */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-widest text-neutral-200 font-bold mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#synopsis" className="hover:text-amber-400 transition-colors">Story & Narrative</a></li>
              <li><a href="#characters" className="hover:text-amber-400 transition-colors">Character Dossiers & Edits</a></li>
              <li><a href="#video-center" className="hover:text-amber-400 transition-colors">Screening Room (Full Movie)</a></li>
              <li><a href="#season-2" className="hover:text-red-400 transition-colors font-medium">Season 2 Teaser & Alert</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Poster Gallery</a></li>
            </ul>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-xs font-mono text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>

        </div>

        {/* Freddy Studio Production Banner */}
        <div className="mb-10 p-6 rounded-3xl bg-gradient-to-br from-neutral-900/80 via-[#0d0d10] to-neutral-950 border border-amber-500/20 shadow-xl shadow-amber-950/20 relative overflow-hidden">
          {/* Subtle glow behind logo */}
          <div className="absolute left-0 top-0 w-40 h-full bg-amber-500/5 blur-2xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
            
            {/* Freddy Studio Logo */}
            <div className="shrink-0">
              <img
                src="/assets/freddy_studio_logo.jpg"
                alt="Freddy Studio Logo"
                className="w-24 h-24 rounded-2xl object-cover border border-amber-500/30 shadow-lg shadow-amber-950/60"
              />
            </div>

            {/* Studio Info */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
                <span className="px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/30 text-[10px] font-mono uppercase tracking-widest font-bold">
                  Production House
                </span>
              </div>
              <h4 className="font-cinematic text-2xl font-black text-white tracking-widest mb-1">
                FREDDY STUDIO
              </h4>
              <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-md mb-3">
                Independent Tunisian production studio crafting bold, cinematic stories rooted in authentic street culture, drama, and psychological depth. Behind every frame of <span className="text-amber-400 font-semibold">Moch WaQtou</span> — a Freddy Studio vision.
              </p>

              {/* Collaboration CTA */}
              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gradient-to-r from-amber-500/15 to-amber-600/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Open for Collaborations — Let's create something great together!</span>
                </div>

                <a
                  href="https://www.instagram.com/freddystudio2026/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-950/60 to-purple-950/40 hover:from-pink-900/70 hover:to-purple-900/50 border border-pink-500/40 hover:border-pink-400/60 text-pink-300 hover:text-pink-200 text-xs font-semibold transition-all duration-200 hover:scale-105 shadow-md shadow-pink-950/40"
                >
                  <InstagramIcon className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                  <span>@freddystudio2026</span>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copyright & Tunisia Pride */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-neutral-400">
            <span>&copy; {new Date().getFullYear()} Moch WaQtou &amp; Freddy Studio. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-1.5 text-neutral-300">
            <span>Made with passion in</span>
            <span className="text-red-500 font-bold">Tunisia</span>
            <span className="text-base">🇹🇳</span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/mech_wa9to/"
              target="_blank"
              rel="noreferrer"
              className="text-amber-400 hover:text-amber-300 underline underline-offset-4"
            >
              @mech_wa9to
            </a>
            <span className="text-neutral-700">|</span>
            <a
              href="https://www.instagram.com/freddystudio2026/"
              target="_blank"
              rel="noreferrer"
              className="text-pink-400 hover:text-pink-300 underline underline-offset-4"
            >
              @freddystudio2026
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
