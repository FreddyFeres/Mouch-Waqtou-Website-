import React, { useState, useRef } from 'react';
import { Flame, Play, Pause, Volume2, VolumeX, Bell, Check, Sparkles, AlertCircle, Clock, ShieldAlert, ExternalLink } from 'lucide-react';
import { InstagramIcon } from './Icons';
import confetti from 'canvas-confetti';
import { movieData } from '../data/movieData';

export default function Season2Teaser() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#dc2626', '#ef4444', '#f59e0b', '#ffffff'],
    });
  };

  return (
    <section id="season-2" className="py-24 relative bg-[#060608] border-t-2 border-red-900/60 scroll-mt-24 overflow-hidden">
      
      {/* Background Dark Crimson Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-950/30 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-900/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/20 text-red-400 border border-red-500/40 text-xs font-mono uppercase tracking-widest mb-4 shadow-lg shadow-red-950/60">
            <Flame className="w-4 h-4 text-red-500 animate-pulse" />
            <span>SEASON 2 PREVIEW • COMING SOON</span>
          </div>

          <h2 className="font-arabic text-4xl sm:text-6xl md:text-7xl font-black text-red-500 text-glow-red tracking-tight mb-2">
            موش وقتو 2
          </h2>

          <h3 className="font-cinematic text-3xl sm:text-5xl md:text-6xl font-black text-white tracking-widest mb-4">
            MOUCH WAQTOU 2
          </h3>

          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-red-400 mb-4 font-bold">
            STAY TUNED — وقت الحساب
          </p>

          <p className="text-neutral-300 text-base sm:text-lg max-w-2xl mx-auto font-light leading-relaxed mb-4">
            {movieData.season2.synopsis}
          </p>

          <div className="w-24 h-1 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Cinematic Dual Layout: Video Teaser & Key Poster */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column (7 cols): The Season 2 Teaser Video Player */}
          <div className="lg:col-span-7">
            <div className="relative rounded-3xl overflow-hidden border-2 border-red-900/80 bg-black shadow-2xl shadow-red-950/50 group">
              
              {/* Actual Video */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  ref={videoRef}
                  src={movieData.season2.teaserVideo}
                  poster="/assets/posters/poster_s2.jpg"
                  playsInline
                  loop
                  muted={isMuted}
                  className="w-full h-full object-cover"
                />

                {/* Overlay Play Button when paused */}
                {!isPlaying && (
                  <div 
                    onClick={togglePlay}
                    className="absolute inset-0 bg-black/50 backdrop-blur-[2px] flex flex-col items-center justify-center cursor-pointer group-hover:bg-black/40 transition-colors"
                  >
                    <div className="w-20 h-20 rounded-full bg-red-600 text-white flex items-center justify-center shadow-2xl shadow-red-900/80 hover:scale-110 hover:bg-red-500 transition-transform">
                      <Play className="w-9 h-9 fill-current ml-1" />
                    </div>
                    <span className="mt-4 text-xs font-mono tracking-widest text-neutral-200 uppercase font-bold">
                      Click to Play Season 2 Teaser
                    </span>
                  </div>
                )}
              </div>

              {/* Custom Player Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-neutral-950 border-t border-neutral-900 text-xs">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlay}
                    className="p-2 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30 border border-red-500/30 transition-colors"
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  <button
                    onClick={toggleMute}
                    className="p-2 rounded-lg bg-neutral-900 text-neutral-300 hover:bg-neutral-800 border border-neutral-800 transition-colors"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-amber-400" />}
                  </button>
                  <span className="font-mono text-neutral-400 text-[11px] hidden sm:inline">
                    MOUCH WAQTOU 2 • TEASER
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={movieData.season2.instagramTeaserUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-950/40 text-pink-300 hover:bg-pink-900/50 border border-pink-500/40 font-mono text-[11px] font-semibold transition-all hover:scale-105"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                    <span>Watch on Instagram</span>
                    <ExternalLink className="w-3 h-3 text-pink-400" />
                  </a>
                  
                  <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse ml-1"></span>
                  <span className="font-mono text-red-400 font-bold uppercase tracking-wider text-[11px] hidden xs:inline">
                    OFFICIAL
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column (5 cols): Season 2 Gothic Poster Feature */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-red-900/50 bg-neutral-950/80 p-6 backdrop-blur-md shadow-xl">
              
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="/assets/posters/poster_s2.jpg" 
                  alt="Mouch Waqtou 2 Official Poster" 
                  className="w-28 h-40 object-cover rounded-xl border border-red-800/80 shadow-lg shadow-red-950/80"
                />
                <div>
                  <span className="px-2.5 py-0.5 rounded-full bg-red-950 text-red-400 border border-red-800/60 text-[10px] font-mono uppercase tracking-wider font-bold">
                    Official Artwork
                  </span>
                  <h4 className="font-cinematic text-xl font-bold text-white mt-1 mb-1">
                    The Bloody Hourglass
                  </h4>
                  <p className="font-arabic text-sm text-red-400 font-bold">
                    الدم يسيل... وساعة الحساب تدق
                  </p>
                  <p className="text-xs text-neutral-400 mt-2 font-mono">
                    Featuring fallen chess pieces, evidence wall, and nocturnal Tunis under full moon surveillance.
                  </p>
                </div>
              </div>

              {/* Season 2 Themes breakdown */}
              <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-neutral-900">
                {movieData.season2.elements.map((elem, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-neutral-900/40 border border-neutral-800/60">
                    <span className="text-[11px] font-bold text-red-400 block font-mono">
                      {elem.name}
                    </span>
                    <span className="text-[10px] text-neutral-400 leading-tight block">
                      {elem.desc}
                    </span>
                  </div>
                ))}
              </div>

            </div>

            {/* Premiere Notification Form */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-red-950/50 via-neutral-900/80 to-black border border-red-900/50 shadow-xl">
              <div className="flex items-center gap-2 mb-2">
                <Bell className="w-4 h-4 text-red-400" />
                <h4 className="text-sm font-bold text-white tracking-wide uppercase font-mono">
                  Get Notified When Season 2 Drops
                </h4>
              </div>
              <p className="text-xs text-neutral-400 mb-4 font-light">
                Join our private VIP premiere list. Receive early access to teasers, behind-the-scenes clips, and release dates.
              </p>

              {subscribed ? (
                <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 flex items-center gap-3 text-red-200 text-xs font-semibold">
                  <Check className="w-5 h-5 text-red-400" />
                  <span>You're on the list! We will notify you for the premiere.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email..."
                    required
                    className="flex-1 px-4 py-2.5 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-red-500"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-950/60 whitespace-nowrap"
                  >
                    Notify Me
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
