"use client";

import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

export function HeroReel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  function toggleSound() {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setMuted(video.muted);
  }

  return (
    <div className="relative mt-10 aspect-[5/4] overflow-hidden rounded-lg bg-[#f5f4f1] sm:aspect-[16/9] lg:mt-14 lg:max-h-[610px]">
      <video aria-label="Studio 7 showreel sample" autoPlay className="h-full w-full object-cover" loop muted playsInline poster="https://images.pexels.com/videos/28952503/pexels-photo-28952503.jpeg?auto=compress&cs=tinysrgb&h=800&fit=crop&w=1600" ref={videoRef}>
        <source src="https://videos.pexels.com/video-files/28952503/12526932_1440_2560_30fps.mp4" type="video/mp4" />
      </video>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <p className="absolute bottom-5 left-5 text-xs font-semibold text-white sm:bottom-6 sm:left-6">Sample showreel - replace with Studio 7 footage</p>
      <button aria-label={muted ? "Turn sound on" : "Mute video"} className="absolute bottom-4 right-4 grid size-10 place-items-center rounded-full border border-white/40 bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-black sm:bottom-5 sm:right-5" onClick={toggleSound} type="button">
        {muted ? <VolumeX size={17} /> : <Volume2 size={17} />}
      </button>
    </div>
  );
}
