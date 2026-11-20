import React, { useState } from 'react';
import { Film, Play, ExternalLink, MonitorPlay, Sparkles } from 'lucide-react';
import { YoutubeIcon } from './Icons';
import { movieData } from '../data/movieData';

export default function VideoCenter() {
  const [activeTab, setActiveTab] = useState('full-movie');

  const tabs = [
    {
      id: 'full-movie',
      title: 'Full Movie',
      titleArabic: 'الفيلم الكامل',
      youtubeUrl: movieData.youtube.fullMovieUrl,
      embedUrl: movieData.youtube.fullMovieEmbed,
      desc: 'Watch the full psychological thriller short film "Moch WaQtou" streaming in high definition.',
      tag: 'STREAMING NOW',
      color: 'amber',
    },
    {
      id: 'trailer',
      title: 'Official Trailer & Teaser',
      titleArabic: 'الإعلان التشويقي الرسمي',
      youtubeUrl: movieData.youtube.trailerUrl,
      embedUrl: movieData.youtube.trailerEmbed,
      desc: 'The official trailer capturing the gritty tension, police pursuits, and turning points.',
      tag: 'OFFICIAL TRAILER',
      color: 'red',
    },
    {
      id: 'teaser-reel',
      title: 'Local Cinematic Cut',
      titleArabic: 'لقطات سينمائية خاصة',
      localVideo: '/assets/videos/teaser1.mp4',
      desc: 'Direct cinematic reel featuring fast-paced cuts, sound design, and character confrontations.',
      tag: 'CINEMATIC REEL',
      color: 'cyan',
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="video-center" className="py-24 relative bg-[#09090c] border-t border-neutral-900 scroll-mt-24 overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono uppercase tracking-wider mb-4">
            <MonitorPlay className="w-3.5 h-3.5" />
            <span>Cinematic Screening Room</span>
          </div>

          <h2 className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            VIDEO CENTER
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light mb-2">
            Stream the full movie, official trailers, and exclusive cinema teasers.
          </p>
          <p className="font-arabic text-lg text-amber-400/90 mb-6">
            شاهد الفيلم الكامل والإعلانات الرسمية بدقة عالية
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Tab Selection */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-2xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 border ${
                activeTab === tab.id
                  ? 'bg-neutral-900 text-white border-amber-500 shadow-xl shadow-amber-500/10 scale-105'
                  : 'bg-neutral-950/70 text-neutral-400 border-neutral-800 hover:text-white hover:border-neutral-700'
              }`}
            >
              <YoutubeIcon className={`w-4 h-4 ${activeTab === tab.id ? 'text-red-500' : 'text-neutral-500'}`} />
              <span>{tab.title}</span>
              <span className="font-arabic text-xs text-neutral-400 hidden sm:inline">{tab.titleArabic}</span>
            </button>
          ))}
        </div>

        {/* Main Video Screen Container */}
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border-2 border-neutral-800 bg-black shadow-2xl shadow-black/80 group hover:border-neutral-700 transition-colors">
            
            {/* Top Cinema Toolbar */}
            <div className="flex items-center justify-between px-6 py-3.5 bg-neutral-950 border-b border-neutral-800/80">
              <div className="flex items-center gap-3">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
                <span className="text-xs font-mono text-neutral-400 ml-2 hidden sm:inline">
                  {currentTab.title} &bull; MOCH WAQTOU
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-mono font-bold">
                  {currentTab.tag}
                </span>
                {currentTab.youtubeUrl && (
                  <a
                    href={currentTab.youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-neutral-400 hover:text-red-400 transition-colors font-mono"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Watch on YouTube</span>
                  </a>
                )}
              </div>
            </div>

            {/* Video Viewport */}
            <div className="relative aspect-video w-full bg-black flex items-center justify-center">
              {currentTab.embedUrl ? (
                <iframe
                  src={`${currentTab.embedUrl}?rel=0`}
                  title={currentTab.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  src={currentTab.localVideo}
                  controls
                  className="w-full h-full object-cover"
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>

            {/* Bottom Info Bar */}
            <div className="p-6 bg-neutral-950 border-t border-neutral-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-bold text-white mb-1">
                  {currentTab.title}
                </h4>
                <p className="text-xs sm:text-sm text-neutral-400 font-light">
                  {currentTab.desc}
                </p>
              </div>

              {currentTab.youtubeUrl && (
                <a
                  href={currentTab.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-950/60 transition-all hover:scale-105 whitespace-nowrap"
                >
                  <YoutubeIcon className="w-4 h-4 fill-current" />
                  Open on YouTube
                </a>
              )}
            </div>

          </div>
        </div>

        {/* Dual Video Cards Row */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          
          {/* Card 1: Trailer Quick Launcher */}
          <div className="p-6 rounded-2xl bg-neutral-950/60 border border-neutral-800 hover:border-amber-500/40 transition-colors flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block mb-1">
                TEASER & TRAILER
              </span>
              <h5 className="font-bold text-white text-base">Official Trailer</h5>
              <p className="text-xs text-neutral-400 mt-1">
                Featuring the tension between Josef, Freddy, and Detective Bayrem.
              </p>
            </div>
            <a
              href={movieData.youtube.trailerUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl bg-neutral-900 hover:bg-red-600 text-neutral-300 hover:text-white border border-neutral-800 hover:border-red-500 transition-all"
              title="Watch Trailer on YouTube"
            >
              <Play className="w-5 h-5 fill-current" />
            </a>
          </div>

          {/* Card 2: Full Movie Quick Launcher */}
          <div className="p-6 rounded-2xl bg-neutral-950/60 border border-neutral-800 hover:border-red-500/40 transition-colors flex items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono text-red-400 font-bold uppercase tracking-wider block mb-1">
                COMPLETE STORY
              </span>
              <h5 className="font-bold text-white text-base">Full Movie (Part 1)</h5>
              <p className="text-xs text-neutral-400 mt-1">
                Stream the complete original short film on YouTube.
              </p>
            </div>
            <a
              href={movieData.youtube.fullMovieUrl}
              target="_blank"
              rel="noreferrer"
              className="p-3.5 rounded-xl bg-red-600 hover:bg-red-500 text-white transition-all shadow-lg shadow-red-950/60"
              title="Watch Full Movie on YouTube"
            >
              <Film className="w-5 h-5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
