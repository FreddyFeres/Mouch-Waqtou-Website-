import React from 'react';
import { X, Play, Shield, Skull, Cpu, User, FileText, Film } from 'lucide-react';
import { InstagramIcon } from './Icons';

export default function CharacterModal({ character, onClose, onPlayVideo }) {
  if (!character) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-[#0f0f12] border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl my-8 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="relative h-48 sm:h-64 overflow-hidden bg-neutral-950">
          <img 
            src={character.poster} 
            alt={character.name} 
            className="w-full h-full object-cover object-top opacity-50 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f12] via-[#0f0f12]/60 to-transparent"></div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-neutral-300 hover:text-white border border-neutral-700/60 backdrop-blur-md transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
                  {character.badge}
                </span>
                <span className="text-xs font-mono text-neutral-400">
                  Actor: {character.actor}
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-baseline gap-3">
                <span>{character.name}</span>
                <span className="font-arabic text-2xl sm:text-3xl text-amber-400">{character.nameArabic}</span>
              </h2>
              <p className="text-sm font-semibold text-neutral-300">
                {character.role} • <span className="font-arabic text-neutral-400">{character.roleArabic}</span>
              </p>
            </div>

            <button
              onClick={() => onPlayVideo(character)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-red-900/50 transition-all hover:scale-105"
            >
              <Play className="w-4 h-4 fill-current" />
              Watch Reel / Edit
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Quote Banner */}
          <div className="p-4 rounded-xl bg-neutral-900/80 border-l-4 border-amber-500 border-neutral-800 text-neutral-200">
            <p className="font-arabic text-base sm:text-lg text-amber-300 mb-1">
              &ldquo;{character.quote}&rdquo;
            </p>
          </div>

          {/* Bio Story Arc */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-amber-400" />
              Character Narrative Arc
            </h4>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              {character.bio}
            </p>
          </div>

          {/* Dossier Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">STATUS CLASSIFICATION</span>
              <span className="text-xs sm:text-sm font-bold text-neutral-200">{character.dossier.status}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">AFFILIATION</span>
              <span className="text-xs sm:text-sm font-bold text-amber-400">{character.dossier.affiliation}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">SKILLSET & PROFILE</span>
              <span className="text-xs sm:text-sm font-bold text-neutral-200">{character.dossier.skillset}</span>
            </div>
            <div className="p-3.5 rounded-xl bg-neutral-900/60 border border-neutral-800">
              <span className="text-[11px] font-mono text-neutral-400 block mb-1">DANGER LEVEL</span>
              <span className="text-xs sm:text-sm font-bold text-red-400">{character.dossier.dangerLevel}</span>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Film className="w-4 h-4 text-amber-400" />
              <span className="text-xs font-mono text-neutral-400">Exclusive Instagram Reel available for {character.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={character.instagramEditUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-pink-600/20 text-pink-300 hover:bg-pink-600/30 border border-pink-500/30 text-xs font-semibold transition-colors"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                View Instagram Reel
              </a>
              <button
                onClick={() => onPlayVideo(character)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-neutral-950 text-xs font-bold transition-all shadow-md"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                Play Video Clip
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
