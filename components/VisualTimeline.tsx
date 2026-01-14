"use client";

import { useState, useEffect, useRef } from "react";

const timelineEvents = [
  {
    year: "1920",
    title: "Tiếp Nhận Chủ Nghĩa Mác-Lênin",
    description: "Đọc Sơ thảo Lênin, tìm thấy con đường cứu nước đúng đắn",
    color: "from-blue-600 to-blue-700"
  },
  {
    year: "1930",
    title: "Thành Lập Đảng Cộng Sản",
    description: "Xác lập con đường cách mạng bỏ qua TBCN, đi thẳng lên CNXH",
    color: "from-red-600 to-red-700"
  },
  {
    year: "1945",
    title: "Tuyên Ngôn Độc Lập",
    description: "Khẳng định độc lập dân tộc, bắt đầu thời kỳ quá độ",
    color: "from-yellow-600 to-yellow-700"
  },
  {
    year: "1954-1975",
    title: "Xây Dựng CNXH Miền Bắc",
    description: "Cải cách ruộng đất, công nghiệp hóa, xây dựng CNXH",
    color: "from-green-600 to-green-700"
  },
  {
    year: "1986",
    title: "Đổi Mới",
    description: "Kinh tế thị trường định hướng XHCN, mở cửa hội nhập",
    color: "from-purple-600 to-purple-700"
  },
  {
    year: "Hiện Nay",
    title: "Tiếp Tục Con Đường",
    description: "Hoàn thiện thể chế XHCN, phát triển bền vững",
    color: "from-orange-600 to-orange-700"
  }
];

export default function VisualTimeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(timelineEvents.length).fill(false));
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      if (!ref) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setVisibleItems(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }
          });
        },
        { threshold: 0.3 }
      );
      
      observer.observe(ref);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-red-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-black animate-gradient-shift" />
      <div className="relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Lịch Sử Con Đường Quá Độ
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg">
          Dòng thời gian từ lý thuyết đến thực tiễn
        </p>

        <div className="relative">
          {/* Main Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-red-500 via-yellow-500 via-green-500 to-orange-500 hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  ref={(el) => { itemRefs.current[index] = el; }}
                  className={`
                    flex items-center gap-8
                    ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}
                    transition-all duration-700
                    ${visibleItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                      className={`
                        bg-white/95 dark:bg-gray-800/95 backdrop-blur p-8 rounded-2xl shadow-2xl cursor-pointer
                        transform transition-all duration-500 hover:scale-110 hover:shadow-red-500/30 hover:rotate-1
                        border-2 border-transparent hover:border-red-300
                        ${activeIndex === index ? 'ring-4 ring-offset-4 ring-red-500 scale-105 shadow-red-500/50' : ''}
                      `}
                    >
                      <div className={`inline-block px-6 py-3 rounded-full text-white text-base font-bold mb-4 bg-gradient-to-r ${event.color} shadow-lg hover:shadow-xl transition-shadow`}>
                        {event.year}
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {event.description}
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className={`
                    hidden md:block relative z-10
                    w-10 h-10 rounded-full border-4 border-white dark:border-gray-900
                    bg-gradient-to-r ${event.color} shadow-xl
                    ${activeIndex === index ? 'scale-[2] shadow-2xl' : 'scale-100 hover:scale-125'}
                    transition-all duration-500 cursor-pointer
                  `}>
                    {activeIndex === index && (
                      <div className="absolute inset-0 rounded-full bg-white animate-ping" />
                    )}
                  </div>

                  {/* Empty space for balance */}
                  <div className="flex-1 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Summary Box */}
        <div className="mt-16 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white p-10 rounded-3xl shadow-2xl hover:shadow-red-500/50 hover:scale-[1.02] transition-all duration-500 border-4 border-white/20">
          <h3 className="text-2xl font-bold mb-4 text-center">
            Kết Luận
          </h3>
          <p className="text-center text-lg leading-relaxed">
            Con đường quá độ lên chủ nghĩa xã hội ở Việt Nam là quá trình <strong>lâu dài, gian khổ nhưng tất yếu</strong>, 
            phù hợp với điều kiện lịch sử và xu thế thời đại. Việt Nam đã và đang kiên định đi theo con đường này, 
            từng bước đạt được những <strong>thành tựu to lớn</strong>, khẳng định sự đúng đắn của tư tưởng Hồ Chí Minh.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
