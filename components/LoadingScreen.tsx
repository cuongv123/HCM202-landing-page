"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem('hasLoadedBefore');
    
    if (!hasLoaded) {
      setIsLoading(true);
      
      // Stage 0: Logo animation (0-2s)
      const timer1 = setTimeout(() => setStage(1), 2000);
      
      // Stage 1: Features animation (2-4s)
      const timer2 = setTimeout(() => setStage(2), 4000);
      
      // Complete (4.5s)
      const timer3 = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasLoadedBefore', 'true');
      }, 4500);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-r from-orange-600 to-orange-500 overflow-hidden pointer-events-auto"
          style={{ pointerEvents: 'auto' }}
        >
          {/* Animated Background Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                initial={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
                }}
                animate={{
                  x: typeof window !== 'undefined' ? Math.random() * window.innerWidth : 0,
                  y: typeof window !== 'undefined' ? Math.random() * window.innerHeight : 0,
                  scale: [1, 1.5, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>

          {/* Corner Decorations */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
              scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute top-10 right-10 w-32 h-32 border-4 border-white/20 rounded-full"
          />
          <motion.div
            animate={{ 
              rotate: -360,
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: 'linear' },
              scale: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' }
            }}
            className="absolute bottom-10 left-10 w-24 h-24 border-4 border-white/20 rounded-full"
          />

          <div className="relative z-10 text-center text-white px-4">
            {/* Logo and Title Animation */}
            <AnimatePresence mode="wait">
              {stage >= 0 && (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ 
                    type: 'spring', 
                    stiffness: 200, 
                    damping: 20,
                    duration: 0.8 
                  }}
                  className="mb-8"
                >
                  <div className="flex items-center justify-center mb-6">
                    <motion.div
                      animate={{ 
                        scale: [1, 1.05, 1]
                      }}
                      transition={{ 
                        scale: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
                      }}
                      className="w-32 h-32 bg-white/10 backdrop-blur-lg rounded-3xl flex items-center justify-center shadow-2xl p-6"
                    >
                      <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        viewBox="0 0 24 24"
                        fill="none"
                        className="w-full h-full"
                      >
                        <path
                          d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                          fill="#DC2626"
                        />
                      </motion.svg>
                    </motion.div>
                  </div>

                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-5xl md:text-6xl font-bold mb-4"
                  >
                    HCM202
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="text-xl md:text-2xl text-white/90 font-medium"
                  >
                    Tư Tưởng Hồ Chí Minh
                  </motion.p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Feature Cards */}
            {stage >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-wrap justify-center gap-4 mb-8"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0, x: -50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ 
                    delay: 0,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                  className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center gap-3 shadow-xl border border-white/30"
                >
                  <div className="relative w-10 h-10">
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-white/30"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent, transparent, #06b6d4, #0891b2)',
                        mask: 'radial-gradient(circle at center, transparent 30%, black 31%)',
                        WebkitMask: 'radial-gradient(circle at center, transparent 30%, black 31%)'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear'
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                  </div>
                  <span className="font-semibold text-lg">Học tập</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: -50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ 
                    delay: 0.2,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                  className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center gap-3 shadow-xl border border-white/30"
                >
                  <div className="relative w-10 h-10">
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-white/30"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent, transparent, #ec4899, #db2777)',
                        mask: 'radial-gradient(circle at center, transparent 30%, black 31%)',
                        WebkitMask: 'radial-gradient(circle at center, transparent 30%, black 31%)'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: 0.2
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                  <span className="font-semibold text-lg">Trải nghiệm</span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0, x: -50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ 
                    delay: 0.4,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15
                  }}
                  className="bg-white/20 backdrop-blur-md rounded-2xl px-6 py-3 flex items-center gap-3 shadow-xl border border-white/30"
                >
                  <div className="relative w-10 h-10">
                    <motion.div
                      className="absolute inset-0 rounded-xl border-2 border-white/30"
                    />
                    <motion.div
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: 'conic-gradient(from 0deg, transparent, transparent, #f97316, #ea580c)',
                        mask: 'radial-gradient(circle at center, transparent 30%, black 31%)',
                        WebkitMask: 'radial-gradient(circle at center, transparent 30%, black 31%)'
                      }}
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                        delay: 0.4
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                  </div>
                  <span className="font-semibold text-lg">Sáng tạo</span>
                </motion.div>
              </motion.div>
            )}

            {/* Loading Bar */}
            {stage >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
                className="max-w-md mx-auto"
              >
                <div className="h-2 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 2.5, ease: 'easeInOut' }}
                    className="h-full bg-gradient-to-r from-white via-yellow-200 to-white rounded-full"
                  />
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-white/90 text-sm mt-3 font-medium"
                >
                  Đang khởi tạo trải nghiệm học tập...
                </motion.p>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
