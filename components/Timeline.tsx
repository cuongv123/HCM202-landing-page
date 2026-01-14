"use client";

import { useState } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  phase: string;
}

const events: TimelineEvent[] = [
  {
    year: "1920-1930",
    title: "Hình Thành Tư Tưởng",
    description: "Hồ Chí Minh nghiên cứu chủ nghĩa Mác-Lênin, nhận thấy Việt Nam không thể đi theo con đường TBCN vì đã là thuộc địa, cần giải phóng dân tộc và xây dựng CNXH.",
    phase: "past"
  },
  {
    year: "1930-1945",
    title: "Xác Lập Con Đường",
    description: "Thành lập Đảng Cộng sản (1930), xác định con đường cách mạng giải phóng dân tộc, bỏ qua TBCN, đi thẳng lên CNXH.",
    phase: "past"
  },
  {
    year: "1945-1954",
    title: "Thời Kỳ Quá Độ Đầu",
    description: "Sau Cách mạng tháng Tám 1945, bắt đầu thời kỳ quá độ lên CNXH, song song với kháng chiến chống thực dân Pháp.",
    phase: "past"
  },
  {
    year: "1954-1975",
    title: "Xây Dựng CNXH Miền Bắc",
    description: "Miền Bắc xây dựng CNXH, miền Nam đấu tranh giải phóng. Thực hiện cải cạo ruộng đất, cải tạo XHCN, công nghiệp hóa.",
    phase: "past"
  },
  {
    year: "1975-1986",
    title: "Thống Nhất & Khó Khăn",
    description: "Thống nhất đất nước (1975), xây dựng CNXH trên cả nước. Gặp nhiều khó khăn do bao vây cấm vận, cơ chế quan liêu bao cấp.",
    phase: "past"
  },
  {
    year: "1986-Nay",
    title: "Đổi Mới & Phát Triển",
    description: "Đổi mới (1986), phát triển kinh tế thị trường định hướng XHCN, vẫn giữ mục tiêu CNXH nhưng linh hoạt, sáng tạo.",
    phase: "present"
  },
  {
    year: "2025-Tương Lai",
    title: "Hoàn Thiện & Phát Triển",
    description: "Tiếp tục hoàn thiện thể chế XHCN, phát triển toàn diện, bền vững, khẳng định con đường đã chọn là đúng đắn.",
    phase: "future"
  }
];

export default function Timeline() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const getPhaseColor = (phase: string) => {
    switch(phase) {
      case "past": return "bg-amber-600";
      case "present": return "bg-red-600";
      case "future": return "bg-yellow-500";
      default: return "bg-gray-600";
    }
  };

  return (
    <section id="timeline" className="py-20 px-4 bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Hành Trình Lịch Sử
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg">
          Từ quá khứ đến hiện tại và tương lai
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-linear-to-b from-amber-600 via-red-600 to-yellow-500" />

          {/* Events */}
          <div className="space-y-12">
            {events.map((event, index) => (
              <div 
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="w-1/2 px-6">
                  <div 
                    className={`
                      bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer
                      transition-all duration-300 hover:shadow-2xl hover:scale-105
                      ${activeIndex === index ? 'ring-4 ring-red-600' : ''}
                    `}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    <div className={`inline-block px-3 py-1 rounded-full text-white text-sm mb-2 ${getPhaseColor(event.phase)}`}>
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

                {/* Timeline dot */}
                <div className={`
                  w-6 h-6 rounded-full border-4 border-white dark:border-gray-900 z-10
                  ${getPhaseColor(event.phase)}
                  ${activeIndex === index ? 'scale-150' : ''}
                  transition-transform duration-300
                `} />

                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
