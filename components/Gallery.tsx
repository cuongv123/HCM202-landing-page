"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const images = [
  { src: "/images/bac-ho.jpg", title: "Chủ tịch Hồ Chí Minh", description: "Người sáng lập Đảng Cộng sản Việt Nam" },
  { src: "/images/bac-ho2.jpg", title: "Bác Hồ với nhân dân", description: "Luôn gần gũi với quần chúng nhân dân" },
  { src: "/images/bac-ho3.jpg", title: "Hồ Chủ tịch", description: "Lãnh tụ kính yêu của dân tộc" },
  { src: "/images/bacho6.jpg", title: "Di sản Hồ Chí Minh", description: "Tư tưởng trường tồn qua các thế hệ" },
  { src: "/images/image001-5363.jpg", title: "Bác Hồ thời trẻ", description: "Hành trình đi tìm đường cứu nước" },
  { src: "/images/N4.png", title: "Kỷ niệm Bác Hồ", description: "Tấm gương sáng muôn đời" }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [visibleImages, setVisibleImages] = useState<boolean[]>(new Array(images.length).fill(false));
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = imageRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleImages(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Thư Viện Hình Ảnh
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 text-lg">
          Hình ảnh về Chủ tịch Hồ Chí Minh
        </p>

        <div className="max-w-5xl mx-auto space-y-8">
          {images.map((image, index) => {
            const isLeft = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                ref={(el) => { imageRefs.current[index] = el; }}
                initial={{ opacity: 0, x: isLeft ? -200 : 200, y: 50 }}
                animate={visibleImages[index] ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ 
                  duration: 1, 
                  delay: 0.3,
                  ease: "easeOut"
                }}
                className={`flex ${isLeft ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className="w-full md:w-3/4 lg:w-2/3 group relative overflow-hidden rounded-lg shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="aspect-[16/10] relative bg-gray-200 dark:bg-gray-700">
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 66vw"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-white font-bold text-xl mb-2">
                      {image.title}
                    </h3>
                    <p className="text-gray-200 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal cho ảnh phóng to */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full h-[80vh]">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].title}
              fill
              className="object-contain"
              sizes="100vw"
            />
            <button
              className="absolute top-4 right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-200"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
              <h3 className="font-bold text-xl mb-2">{images[selectedImage].title}</h3>
              <p>{images[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
