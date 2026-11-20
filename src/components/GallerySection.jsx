import React, { useState } from 'react';
import { Image, X, Maximize2, Sparkles } from 'lucide-react';
import { movieData } from '../data/movieData';

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="gallery" className="py-24 relative bg-[#070709] border-t border-neutral-900 scroll-mt-24 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-mono uppercase tracking-wider mb-4">
            <Image className="w-3.5 h-3.5" />
            <span>Visual Archive & Posters</span>
          </div>

          <h2 className="font-cinematic text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
            GALLERY & KEY ART
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg font-light mb-2">
            Explore the official promotional posters, character collages, and cinematic stills.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 to-red-600 mx-auto rounded-full"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {movieData.gallery.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setSelectedImage(item)}
              className="group relative rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800/80 hover:border-amber-500/50 cursor-pointer shadow-lg transition-all duration-300 aspect-[3/4]"
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-full object-cover filter brightness-90 group-hover:scale-105 group-hover:brightness-100 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity"></div>
              
              {/* Tag Pill */}
              <div className="absolute top-3 left-3">
                <span className="px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-md text-[10px] font-mono text-amber-400 border border-amber-500/30">
                  {item.tag}
                </span>
              </div>

              {/* Expand Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 rounded-full bg-black/70 text-white">
                <Maximize2 className="w-3.5 h-3.5" />
              </div>

              {/* Title */}
              <div className="absolute bottom-3 left-3 right-3">
                <h4 className="text-xs sm:text-sm font-bold text-white leading-tight">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fade-in"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[90vh] bg-neutral-950 border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-3 border-b border-neutral-800 bg-neutral-900/60">
              <span className="text-xs font-mono text-neutral-300">{selectedImage.title}</span>
              <button 
                onClick={() => setSelectedImage(null)}
                className="text-neutral-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-2 flex items-center justify-center bg-black overflow-auto max-h-[80vh]">
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-h-[75vh] w-auto object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
