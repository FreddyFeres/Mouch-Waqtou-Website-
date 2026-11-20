import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Synopsis from './components/Synopsis';
import CharactersGrid from './components/CharactersGrid';
import CharacterModal from './components/CharacterModal';
import Season2Teaser from './components/Season2Teaser';
import VideoCenter from './components/VideoCenter';
import GallerySection from './components/GallerySection';
import SoundtrackPlayer from './components/SoundtrackPlayer';
import Footer from './components/Footer';
import VideoModal from './components/VideoModal';
import { movieData } from './data/movieData';

export default function App() {
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    videoSrc: '',
    title: '',
    subtitle: '',
    isYouTube: false,
    youtubeUrl: '',
  });

  const handleOpenTrailer = () => {
    setVideoModal({
      isOpen: true,
      videoSrc: movieData.youtube.trailerEmbed,
      title: "Moch WaQtou (موش وقتو) — Official Trailer",
      subtitle: "Chapter 1: The Sunset Saga • Psychological Thriller",
      isYouTube: true,
      youtubeUrl: movieData.youtube.trailerUrl,
    });
  };

  const handleOpenFullMovie = () => {
    setVideoModal({
      isOpen: true,
      videoSrc: movieData.youtube.fullMovieEmbed,
      title: "Moch WaQtou (موش وقتو) — Full Movie Screening",
      subtitle: "Original Short Film Drama • Directed & Produced in Tunisia",
      isYouTube: true,
      youtubeUrl: movieData.youtube.fullMovieUrl,
    });
  };

  const handlePlayCharacterVideo = (character) => {
    // If character modal was open, close it or play inside video modal
    setSelectedCharacter(null);
    setVideoModal({
      isOpen: true,
      videoSrc: character.video,
      title: `${character.name} (${character.nameArabic}) — Exclusive Video Reel`,
      subtitle: `Actor: ${character.actor} • ${character.role} • Instagram Edit`,
      isYouTube: false,
      youtubeUrl: '',
    });
  };

  const handleCloseVideoModal = () => {
    setVideoModal((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#070709] text-neutral-100 flex flex-col selection:bg-amber-500/30 selection:text-amber-300">
      
      {/* Sticky Navigation Bar */}
      <Navbar
        onOpenTrailer={handleOpenTrailer}
        isPlayingMusic={isPlayingMusic}
        onToggleMusic={() => setIsPlayingMusic(!isPlayingMusic)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenTrailer={handleOpenTrailer}
          onOpenFullMovie={handleOpenFullMovie}
        />

        {/* 2. Story / What the Movie Talks About */}
        <Synopsis
          onOpenTrailer={handleOpenTrailer}
        />

        {/* 3. Characters & Edits Showcase (Interactive Grid) */}
        <CharactersGrid
          onSelectCharacter={(char) => setSelectedCharacter(char)}
          onPlayCharacterVideo={handlePlayCharacterVideo}
        />

        {/* 4. Season 2 Teaser: Mech WaQtou 2 - Stay Tuned */}
        <Season2Teaser />

        {/* 5. Video Center (Trailer & Full Movie) */}
        <VideoCenter />

        {/* 6. Cinematic Gallery & Key Art */}
        <GallerySection />
      </main>

      {/* Persistent Audio / Soundtrack Player */}
      <SoundtrackPlayer
        isPlaying={isPlayingMusic}
        onTogglePlay={() => setIsPlayingMusic(!isPlayingMusic)}
      />

      {/* Footer */}
      <Footer />

      {/* Universal Video Playback Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        onClose={handleCloseVideoModal}
        videoSrc={videoModal.videoSrc}
        title={videoModal.title}
        subtitle={videoModal.subtitle}
        isYouTube={videoModal.isYouTube}
        youtubeUrl={videoModal.youtubeUrl}
      />

      {/* Character Dossier Modal */}
      <CharacterModal
        character={selectedCharacter}
        onClose={() => setSelectedCharacter(null)}
        onPlayVideo={handlePlayCharacterVideo}
      />

    </div>
  );
}
