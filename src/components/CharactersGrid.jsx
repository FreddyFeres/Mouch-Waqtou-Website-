import React, { useState } from 'react';
import { Users, Play, Shield, Eye, Flame, Sparkles, LayoutGrid, FileText, Pause, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { InstagramIcon } from './Icons';
import { movieData } from '../data/movieData';

export default function CharactersGrid({ onSelectCharacter, onPlayCharacterVideo }) {
  const [filter, setFilter] = useState('all');
  const [viewMode, setViewMode] = useState('poster'); // 'poster' | 'dossier'
  const [activeInlineVideo, setActiveInlineVideo] = useState(null); // character id currently playing inline
  const [inlineMuted, setInlineMuted] = useState(true);

  const filteredCharacters = movieData.characters.filter((char) => {
    if (filter === 'mafia') return ['don_aurora', 'vincenzo', 'rostom'].includes(char.id);
    if (filter === 'hunters') return ['josef', 'freddy', 'bouhmid'].includes(char.id);
    if (filter === 'law') return ['bayrem', 'elaa'].includes(char.id);
    return true;
  });

  const getThemeStyles = (themeColor) => {
    switch (themeColor) {
      case 'blue':
        return {
          border: 'border-blue-500/30 hover:border-blue-400/80',
          badge: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
          accent: 'text-blue-400',
          glow: 'group-hover:shadow-[0_0_35px_-5px_rgba(59,130,246,0.3)]',
          btn: 'bg-blue-600 hover:bg-blue-500 text-white',
        };
      case 'cyan':
        return {
          border: 'border-cyan-500/30 hover:border-cyan-400/80',
          badge: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
          accent: 'text-cyan-400',
          glow: 'group-hover:shadow-[0_0_35px_-5px_rgba(6,182,212,0.3)]',
          btn: 'bg-cyan-600 hover:bg-cyan-500 text-white',
        };
      case 'red':
        return {
          border: 'border-red-500/30 hover:border-red-400/80',
          badge: 'bg-red-500/20 text-red-300 border-red-500/40',
          accent: 'text-red-400',
          glow: 'group-hover:shadow-[0_0_35px_-5px_rgba(220,38,38,0.3)]',
          btn: 'bg-red-600 hover:bg-red-500 text-white',
        };
      case 'purple':
        return {
          border: 'border-purple-500/30 hover:border-purple-400/80',
          badge: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
          accent: 'text-purple-400',
          glow: 'group-hover:shadow-[0_0_35px_-5px_rgba(168,85,247,0.3)]',
          btn: 'bg-purple-600 hover:bg-purple-500 text-white',
        };
      case 'emerald':
        return {
          border: 'border-emerald-500/30 hover:border-emerald-400/80',
          badge: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
          accent: 'text-emerald-400',
          glow: 'group-hover:shadow-[0_0_35px_-5px_rgba(16,185,129,0.3)]',
          btn: 'bg-emerald-600 hover:bg-emerald-500 text-white',
        };
      case 'rose':
        return {
          border: 'border-rose-500/30 hover:border-rose-400/80',
          badge: 'bg-rose-500/20 text-rose-300 border-rose-500/40',
          accent: 'text-rose-400',
          glow: 'group-hover:shadow-[0_0_35px_-5px_rgba(244,63,94,0.3)]',
          btn: 'bg-rose-600 hover:bg-rose-500 text-white',
        };
      case 'amber':
      default:
        return {
          border: 'border-amber-500/30 hover:border-amber-400/80',
          badge: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
          accent: 'text-amber-400',
          glow: 'group-hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.3)]',
          btn: 'bg-amber-500 hover:bg-amber-400 text-neutral-950 font-bold',
        };
    }
  };

  const handleToggleInlinePlay = (charId) => {
    if (activeInlineVideo === charId) {
      setActiveInlineVideo(null);
    } else {
      setActiveInlineVideo(charId);
    }
  };

  return (
    <section id="characters" className="py-24 relative bg-[#070709] border-t border-neutral-900 scroll-mt-24 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-red-950/20 rounded-full blur-[130px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-amber-950/20 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 text-red-400 border border-red-500/30 text-xs font-mono uppercase tracking-wider mb-4 shadow-sm">
            <Users className="w-3.5 h-3.5" />
            <span>Character Profiles & Video Archive</span>
          </div>

          <h2 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-tight mb-3">
            THE CAST & EDITS
          </h2>

          <p className="text-neutral-400 text-sm sm:text-base font-light max-w-xl mx-auto mb-2">
            Dive into the character profiles and fan edits inspired by our Instagram. Every character features their dedicated video clip and story arc.
          </p>

          <p className="font-arabic text-base sm:text-lg text-amber-400 font-semibold mb-6">
            تعرّف على شخصيات موش وقتو وتفرّج في الفيديوهات الحصرية لكل شخصية
          </p>

          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* View Mode & Filter Controls Toolbar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 p-3 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 backdrop-blur-md">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {[
              { id: 'all', label: 'All Characters (8)' },
              { id: 'mafia', label: 'Lakamura Mafia (مافيا لاكامورا)' },
              { id: 'hunters', label: 'Treasure Hunters (صائدي الكنوز)' },
              { id: 'law', label: 'TNPD Police (الشرطة)' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 border ${
                  filter === tab.id
                    ? 'bg-amber-500 text-neutral-950 border-amber-400 shadow-md shadow-amber-500/20'
                    : 'bg-neutral-900/60 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* View Mode Toggle: Cinema Posters vs Detailed Dossiers */}
          <div className="flex items-center gap-1 bg-neutral-900 p-1 rounded-xl border border-neutral-800 shrink-0 self-end md:self-auto">
            <button
              onClick={() => setViewMode('poster')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'poster'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5 text-amber-400" />
              <span>Poster View</span>
            </button>
            <button
              onClick={() => setViewMode('dossier')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                viewMode === 'dossier'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-neutral-200'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-red-400" />
              <span>Dossier View</span>
            </button>
          </div>

        </div>

        {/* Characters Grid: Rendered with proper Vertical Poster Aspect Ratio */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCharacters.map((char) => {
            const theme = getThemeStyles(char.themeColor);
            const isPlayingInline = activeInlineVideo === char.id;

            return (
              <div
                key={char.id}
                className={`group relative rounded-3xl bg-[#0d0d10] border ${theme.border} transition-all duration-300 flex flex-col overflow-hidden shadow-2xl shadow-black/80 ${theme.glow}`}
              >
                
                {/* Character Visual / Inline Video Frame */}
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-950">
                  
                  {isPlayingInline ? (
                    /* Active Inline Video Player */
                    <div className="relative w-full h-full bg-black">
                      <video
                        src={char.video}
                        autoPlay
                        loop
                        playsInline
                        muted={inlineMuted}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Video Controls Overlay */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                        <span className="px-2.5 py-1 rounded-md bg-red-600/90 backdrop-blur-md text-[10px] font-mono font-bold text-white flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                          PLAYING REEL
                        </span>
                        
                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setInlineMuted(!inlineMuted)}
                            className="p-1.5 rounded-lg bg-black/70 text-white hover:bg-black border border-white/20 backdrop-blur-md"
                            title={inlineMuted ? "Unmute" : "Mute"}
                          >
                            {inlineMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-amber-400" />}
                          </button>
                          <button
                            onClick={() => setActiveInlineVideo(null)}
                            className="p-1.5 rounded-lg bg-black/70 text-white hover:bg-black border border-white/20 backdrop-blur-md"
                            title="Close Video"
                          >
                            <Pause className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      {/* Expand to Modal Button */}
                      <div className="absolute bottom-3 right-3 z-20">
                        <button
                          onClick={() => onPlayCharacterVideo(char)}
                          className="px-3 py-1 rounded-lg bg-neutral-900/90 text-[11px] font-mono text-white border border-neutral-700 hover:border-amber-400 backdrop-blur-md flex items-center gap-1"
                        >
                          <span>Full Screen</span>
                          <Play className="w-3 h-3 fill-current ml-0.5" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    /* Default Character Poster Art */
                    <>
                      <img 
                        src={char.poster} 
                        alt={char.name} 
                        className="w-full h-full object-cover object-top filter brightness-[0.92] group-hover:scale-105 group-hover:brightness-100 transition-all duration-700"
                      />

                      {/* Subtle Cinematic Vignette */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d10] via-black/20 to-black/40"></div>

                      {/* Top Badges */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between z-10">
                        <span className={`px-2.5 py-1 rounded-lg backdrop-blur-md text-[11px] font-mono font-bold border ${theme.badge}`}>
                          {char.badge}
                        </span>

                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md text-[10px] font-mono font-semibold text-neutral-300 border border-neutral-700/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                          VIDEO REEL READY
                        </span>
                      </div>

                      {/* Big Interactive Hover Play Button */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px] z-10 gap-3">
                        <button
                          onClick={() => handleToggleInlinePlay(char.id)}
                          className={`p-4 rounded-full ${theme.btn} shadow-2xl hover:scale-110 transition-transform flex items-center justify-center`}
                          title={`Play ${char.name} reel directly on card`}
                        >
                          <Play className="w-7 h-7 fill-current ml-0.5" />
                        </button>
                        <span className="text-[11px] font-mono text-white bg-black/80 px-3 py-1 rounded-full border border-white/20">
                          Click to Play Reel
                        </span>
                      </div>

                      {/* Bottom Banner on Image */}
                      <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between z-10">
                        <span className="text-[11px] font-mono text-neutral-300 bg-black/80 px-2.5 py-1 rounded-md backdrop-blur-md border border-neutral-800">
                          Actor: <strong className="text-white">{char.actor}</strong>
                        </span>
                        <span className="font-arabic text-sm text-amber-400 font-bold bg-black/80 px-2.5 py-0.5 rounded-md backdrop-blur-md border border-neutral-800">
                          {char.nameArabic}
                        </span>
                      </div>
                    </>
                  )}

                </div>

                {/* Card Body Information */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    
                    {/* Header: Name & Role */}
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-amber-400 transition-colors">
                        {char.name}
                      </h3>
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${theme.accent}`}>
                        {char.role}
                      </span>
                    </div>

                    <p className="font-arabic text-xs text-neutral-400 mb-3">
                      {char.roleArabic}
                    </p>

                    {/* Character Dialouge Quote */}
                    <div className="p-3.5 rounded-xl bg-neutral-950/80 border border-neutral-800/80 mb-4">
                      <p className="font-arabic text-xs sm:text-sm text-amber-200/90 leading-snug">
                        &ldquo;{char.quote}&rdquo;
                      </p>
                    </div>

                    {/* View Specific Content: Dossier vs Poster */}
                    {viewMode === 'dossier' ? (
                      <div className="space-y-2 mb-4 text-xs font-mono">
                        <div className="flex justify-between p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
                          <span className="text-neutral-500">CLASSIFICATION:</span>
                          <span className="text-neutral-300 font-semibold">{char.dossier.status}</span>
                        </div>
                        <div className="flex justify-between p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
                          <span className="text-neutral-500">THREAT LEVEL:</span>
                          <span className="text-red-400 font-bold">{char.dossier.dangerLevel}</span>
                        </div>
                        <div className="flex justify-between p-2 rounded-lg bg-neutral-900/60 border border-neutral-800/60">
                          <span className="text-neutral-500">PROFILE:</span>
                          <span className="text-neutral-300">{char.dossier.skillset}</span>
                        </div>
                      </div>
                    ) : (
                      <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3 mb-5 font-light">
                        {char.bio}
                      </p>
                    )}

                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-4 border-t border-neutral-800/80 space-y-2.5">
                    
                    <div className="flex items-center gap-2">
                      {/* Primary Button: Watch Video Reel (In-Card or Modal) */}
                      <button
                        onClick={() => handleToggleInlinePlay(char.id)}
                        className={`flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl ${
                          isPlayingInline 
                            ? 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700' 
                            : `${theme.btn}`
                        } text-xs uppercase tracking-wider transition-all duration-200 shadow-md font-bold`}
                      >
                        {isPlayingInline ? (
                          <>
                            <Pause className="w-3.5 h-3.5" />
                            <span>Stop In-Card Reel</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>Play Video Reel</span>
                          </>
                        )}
                      </button>

                      {/* Modal Launcher */}
                      <button
                        onClick={() => onPlayCharacterVideo(char)}
                        className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
                        title="Open Theater Mode Modal"
                      >
                        <Play className="w-4 h-4" />
                      </button>

                      {/* Detailed Dossier Inspector Button */}
                      <button
                        onClick={() => onSelectCharacter(char)}
                        className="p-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-800 transition-colors"
                        title="View Full Casefile Dossier"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Instagram Reel Direct Link */}
                    <a
                      href={char.instagramEditUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-1.5 text-[11px] text-neutral-400 hover:text-pink-400 transition-colors font-mono"
                    >
                      <InstagramIcon className="w-3 h-3 text-pink-400" />
                      <span>View Fan Edit &bull; @mech_wa9to</span>
                    </a>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
