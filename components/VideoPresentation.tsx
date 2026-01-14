"use client";

import { useState } from "react";

const VIDEO_ID = process.env.NEXT_PUBLIC_VIDEO_ID || "1PTt1sBf26SoExdAeAP20SmmkPtUU4aLE";
const VIDEO_URL = `https://drive.google.com/file/d/${VIDEO_ID}/preview`;

export default function VideoPresentation() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Video Container */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-4 md:p-8 border border-white/20">
          <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl group">
            {!isPlaying && (
              <div 
                onClick={() => setIsPlaying(true)}
                className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-black/70 to-black/50 cursor-pointer z-10 group-hover:bg-black/60 transition-all duration-300"
              >
                <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                  <div className="w-24 h-24 bg-gradient-to-r from-red-600 to-red-700 rounded-full flex items-center justify-center mb-4 mx-auto shadow-2xl group-hover:shadow-red-500/50">
                    <svg className="w-12 h-12 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-white font-bold text-xl">Phát video</p>
                </div>
              </div>
            )}
            
            {isPlaying && (
              <iframe
                src={VIDEO_URL}
                className="w-full h-full rounded-xl"
                title="Video trình bày nhóm"
                allow="autoplay; fullscreen"
                allowFullScreen
              />
            )}
          </div>

          {/* Video Actions */}
          <div className="mt-6 flex gap-4 justify-center flex-wrap">
            <a
              href={`https://drive.google.com/file/d/${VIDEO_ID}/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Xem trên Drive
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
