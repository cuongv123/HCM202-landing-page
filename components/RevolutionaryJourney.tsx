"use client";

import { useState } from "react";
import Image from "next/image";

export default function RevolutionaryJourney() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/bac-ho.jpg",
      caption: "Chủ tịch Hồ Chí Minh - Lãnh tụ vĩ đại của dân tộc Việt Nam",
      year: "1890-1969"
    },
    {
      image: "/images/bac-ho2.jpg",
      caption: "Bác Hồ với nhân dân - Người luôn sống vì dân, vì nước",
      year: "Thời kỳ kháng chiến"
    },
    {
      image: "/images/bac-ho3.jpg",
      caption: "Hồ Chí Minh - Biểu tượng độc lập và tự do",
      year: "Cách mạng tháng Tám 1945"
    },
    {
      image: "/images/bacho6.jpg",
      caption: "Người sáng lập Đảng Cộng sản Việt Nam",
      year: "3/2/1930"
    },
    {
      image: "/images/bacho8.jpg",
      caption: "Bác Hồ với thiếu nhi - Thế hệ tương lai của đất nước",
      year: "Xây dựng đất nước"
    },
    {
      image: "/images/bacho9.jpg",
      caption: "Di sản tư tưởng bất diệt của Chủ tịch Hồ Chí Minh",
      year: "Đời đời nhớ ơn Bác"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Hành Trình Cách Mạng
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Những khoảnh khắc lịch sử của Chủ tịch Hồ Chí Minh
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden">
            {/* Image Container */}
            <div className="relative h-[400px] md:h-[600px]">
              <Image
                src={slides[currentSlide].image}
                alt={slides[currentSlide].caption}
                fill
                className="object-cover"
                priority
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-sm font-semibold text-yellow-400 mb-2">
                  {slides[currentSlide].year}
                </p>
                <h3 className="text-2xl md:text-3xl font-bold">
                  {slides[currentSlide].caption}
                </h3>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-3 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === index
                    ? "w-12 h-3 bg-gradient-to-r from-red-600 to-orange-500"
                    : "w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4 text-gray-600 dark:text-gray-400 font-medium">
            {currentSlide + 1} / {slides.length}
          </div>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-8">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative h-20 md:h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                currentSlide === index
                  ? "ring-4 ring-red-600 scale-105"
                  : "opacity-60 hover:opacity-100 hover:scale-105"
              }`}
            >
              <Image
                src={slide.image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
