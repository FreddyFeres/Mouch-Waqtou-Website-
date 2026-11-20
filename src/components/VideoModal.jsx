import React, { useEffect } from 'react';
import { X, Play, ExternalLink, Film } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function VideoModal({ isOpen, onClose, videoSrc, title, subtitle, isYouTube, youtubeUrl }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#101012] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl shadow-amber-500/10 flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/80 bg-neutral-900/60">
          <div className="flex items-center gap-3">
            <span className="p-2 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/20">
              <Film className="w-5 h-5" />
            </span>
            <div>
              <h3 className="text-lg font-bold text-neutral-100 tracking-wide">{title || "Video Showcase"}</h3>
              {subtitle && <p className="text-xs text-neutral-400 font-mono">{subtitle}</p>}
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden">
          {isYouTube ? (
            <iframe
              src={`${videoSrc}?autoplay=1&rel=0`}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <video
              src={videoSrc}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>

        {/* Footer info & CTAs */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-3.5 bg-neutral-950/80 border-t border-neutral-800/80 text-xs text-neutral-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>MOCH WAQTOU • Official Cinema Archive</span>
          </div>
          <div className="flex items-center gap-3">
            {youtubeUrl && (
              <a 
                href={youtubeUrl} 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 text-red-400 hover:bg-red-600/30 border border-red-500/30 transition-colors font-medium"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Open on YouTube
              </a>
            )}
            <a 
              href="https://www.instagram.com/mech_wa9to/" 
              target="_blank" 
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-600/20 text-pink-300 hover:bg-pink-600/30 border border-pink-500/30 transition-colors font-medium"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              Follow @mech_wa9to
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
