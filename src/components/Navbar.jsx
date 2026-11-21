import React, { useState, useEffect } from 'react';
import { Film, Play, Volume2, VolumeX, Menu, X, Sparkles, Flame, ChevronRight } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { movieData } from '../data/movieData';

export default function Navbar({ onOpenTrailer, isPlayingMusic, onToggleMusic }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Simple active section spy
      const sections = ['synopsis', 'characters', 'season-2', 'video-center', 'gallery'];
      const scrollPosition = window.scrollY + 180;
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
      if (window.scrollY < 200) {
        setActiveSection('hero');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'synopsis', label: 'Synopsis', href: '#synopsis' },
    { id: 'characters', label: 'Cast & Edits', href: '#characters' },
    { id: 'season-2', label: 'Season 2', href: '#season-2', badge: 'NEW' },
    { id: 'video-center', label: 'Screening Room', href: '#video-center' },
    { id: 'gallery', label: 'Key Art', href: '#gallery' },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 pt-3 pb-2 transition-all duration-300 pointer-events-none">
      <header 
        className={`pointer-events-auto max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
          isScrolled 
            ? 'bg-[#090b12]/92 backdrop-blur-xl border-amber-500/30 shadow-2xl shadow-black/90 py-2.5 px-4 sm:px-6' 
            : 'bg-[#090b12]/60 backdrop-blur-md border-amber-500/20 py-3.5 px-4 sm:px-6 shadow-xl shadow-amber-950/20'
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-amber-500/20 via-neutral-900 to-red-950/50 border border-amber-500/40 flex items-center justify-center shadow-lg shadow-amber-500/10 group-hover:border-amber-400 group-hover:scale-105 transition-all">
              <Film className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 group-hover:rotate-12 transition-transform" />
              <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-red-500 ring-2 ring-black animate-pulse"></span>
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-cinematic text-base sm:text-lg font-black tracking-wider text-white group-hover:text-amber-400 transition-colors">
                  MOCH WAQTOU
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-amber-500/20 text-amber-300 font-arabic border border-amber-500/30 font-bold">
                  موش وقتو
                </span>
              </div>
              <span className="text-[9px] sm:text-[10px] tracking-widest text-neutral-400 uppercase font-mono hidden xs:inline-block">
                Psychological Thriller Series
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-neutral-950/60 p-1 rounded-xl border border-neutral-800/80">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-xs font-medium tracking-wide px-3.5 py-1.5 rounded-lg transition-all duration-200 relative flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30 font-semibold shadow-inner'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-900/80'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 rounded bg-red-600 text-white font-mono font-bold animate-pulse">
                      {link.badge}
                    </span>
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action Tools & CTAs */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Soundtrack Ambient Audio Player Button */}
            <button
              onClick={onToggleMusic}
              title={isPlayingMusic ? "Pause Atmospheric Soundtrack" : "Play Atmospheric Soundtrack"}
              className={`flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl border text-xs transition-all duration-200 ${
                isPlayingMusic 
                  ? 'bg-amber-500/15 border-amber-500/40 text-amber-300 shadow-md shadow-amber-500/10' 
                  : 'bg-neutral-900/80 border-neutral-800 text-neutral-400 hover:text-neutral-200 hover:border-neutral-700'
              }`}
            >
              {isPlayingMusic ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden md:inline font-mono text-[11px]">Audio</span>
                  <span className="flex gap-0.5 items-end h-3">
                    <span className="w-0.5 h-3 bg-amber-400 animate-pulse"></span>
                    <span className="w-0.5 h-1.5 bg-amber-400 animate-pulse delay-100"></span>
                    <span className="w-0.5 h-2.5 bg-amber-400 animate-pulse delay-200"></span>
                  </span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="hidden md:inline font-mono text-[11px]">Music Off</span>
                </>
              )}
            </button>

            {/* Instagram Link Pill */}
            <a
              href={movieData.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-pink-950/30 hover:bg-pink-950/50 border border-pink-500/30 hover:border-pink-500/60 text-pink-300 text-xs font-mono transition-all"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
              <span>@mech_wa9to</span>
            </a>

            {/* Watch Part 2 Teaser CTA */}
            <a
              href="#season-2"
              className="group relative overflow-hidden px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-xl bg-gradient-to-r from-red-600 via-red-700 to-amber-600 text-white font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.03] shadow-lg shadow-red-950/80 border border-red-500/50 flex items-center gap-1.5"
            >
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <Flame className="w-3.5 h-3.5 text-amber-300 animate-bounce" />
              <span className="hidden xs:inline">Part 2 Teaser</span>
              <span className="xs:hidden">Teaser</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>

        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-4 border-t border-neutral-800/80 animate-fade-in flex flex-col gap-2">
            <div className="flex items-center justify-between px-2 pb-2 text-[11px] font-mono text-neutral-400">
              <span>EXPLORE CHAPTERS</span>
              <span className="font-arabic text-amber-400">موش وقتو</span>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-3 py-2.5 rounded-xl bg-neutral-950/70 hover:bg-neutral-900 border border-neutral-800/60 text-sm font-medium text-neutral-200 hover:text-amber-400 transition-colors"
              >
                <span>{link.label}</span>
                <div className="flex items-center gap-2">
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded bg-red-600 text-white font-mono font-bold">
                      {link.badge}
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-neutral-500" />
                </div>
              </a>
            ))}

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={movieData.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-pink-950/30 border border-pink-500/40 text-pink-300 text-xs font-semibold"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span>Follow on Instagram @mech_wa9to</span>
              </a>

              <a
                href="#season-2"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-950/60"
              >
                <Flame className="w-4 h-4 text-amber-300" />
                <span>Watch Season 2 Teaser (STAY TUNED)</span>
              </a>
            </div>
          </div>
        )}

      </header>
    </div>
  );
}
