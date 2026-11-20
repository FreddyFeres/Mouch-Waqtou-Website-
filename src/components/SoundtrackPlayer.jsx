import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Music, ChevronUp, ChevronDown, Sparkles, Disc } from 'lucide-react';
import { movieData } from '../data/movieData';

export default function SoundtrackPlayer({ isPlaying, onTogglePlay }) {
  const [volume, setVolume] = useState(0.6);
  const [showLyrics, setShowLyrics] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(() => {
        // Autoplay may be restricted by browsers until user interaction
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={movieData.soundtrack.file}
        loop
        preload="auto"
      />

      {/* Floating Audio Controller (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
        
        {/* Lyrics Drawer Box */}
        {showLyrics && (
          <div className="w-80 sm:w-96 p-5 rounded-2xl bg-[#0e0e12]/95 border border-amber-500/30 backdrop-blur-xl shadow-2xl text-xs space-y-3 animate-fade-in text-neutral-300">
            <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
              <div className="flex items-center gap-2">
                <Music className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-white uppercase font-mono">Soundtrack Lyrics</span>
              </div>
              <button 
                onClick={() => setShowLyrics(false)}
                className="text-neutral-400 hover:text-white"
              >
                &times;
              </button>
            </div>
            
            <p className="font-arabic text-sm text-amber-300 leading-relaxed font-semibold">
              شارة البداية الرسمية — موش وقتو
            </p>

            <div className="space-y-1.5 font-arabic text-xs text-neutral-300 bg-neutral-950/60 p-3 rounded-xl border border-neutral-850 max-h-48 overflow-y-auto">
              {movieData.soundtrack.lyricsSnippet.map((line, idx) => (
                <p key={idx} className="leading-relaxed">
                  {line}
                </p>
              ))}
            </div>

            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 pt-1">
              <span>Vocals & Production: Freddy Studios</span>
              <span className="text-amber-500">&bull; Original OST</span>
            </div>
          </div>
        )}

        {/* The Controller Capsule */}
        <div className="flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-neutral-900/90 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 backdrop-blur-md shadow-2xl transition-all duration-300">
          
          {/* Animated Disc / Icon */}
          <div className="relative">
            <button
              onClick={onTogglePlay}
              className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                isPlaying 
                  ? 'bg-amber-500 text-neutral-950 shadow-lg shadow-amber-500/30' 
                  : 'bg-neutral-800 text-neutral-300 hover:text-white'
              }`}
              title={isPlaying ? "Pause Theme Song" : "Play Theme Song"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 fill-current" />
              ) : (
                <Play className="w-4 h-4 fill-current ml-0.5" />
              )}
            </button>
            {isPlaying && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 animate-ping"></span>
            )}
          </div>

          {/* Track Info */}
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>موش وقتو OST</span>
              {isPlaying && (
                <span className="flex gap-0.5 items-end h-2.5">
                  <span className="w-0.5 h-2.5 bg-amber-400 animate-pulse"></span>
                  <span className="w-0.5 h-1.5 bg-amber-400 animate-pulse delay-75"></span>
                  <span className="w-0.5 h-2 bg-amber-400 animate-pulse delay-150"></span>
                </span>
              )}
            </span>
            <span className="text-[10px] font-mono text-neutral-400">
              Freddy Studios Soundtrack
            </span>
          </div>

          {/* Volume Control */}
          <div className="hidden md:flex items-center gap-1.5 pl-2 border-l border-neutral-800">
            <Volume2 className="w-3.5 h-3.5 text-neutral-400" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="w-16 h-1 bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-amber-500"
              title="Volume"
            />
          </div>

          {/* Toggle Lyrics Button */}
          <button
            onClick={() => setShowLyrics(!showLyrics)}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-amber-400 transition-colors"
            title="View Song Lyrics"
          >
            {showLyrics ? <ChevronDown className="w-4 h-4" /> : <ChevronUp className="w-4 h-4" />}
          </button>

        </div>

      </div>
    </>
  );
}
