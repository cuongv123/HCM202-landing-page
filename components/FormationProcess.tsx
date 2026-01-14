"use client";

import Image from "next/image";

const periods = [
  {
    image: "/images/bac-ho.jpg",
    period: "Giai đoạn 1: Trước 1911",
    title: "Hình Thành Ý Thức Yêu Nước",
    description: "Bác hình thành tư tưởng yêu nước và chí hướng cứu nước. Chứng kiến đất nước bị áp bức, người dân nghèo khổ, Người đã nuôi dưỡng lý tưởng giải phóng dân tộc."
  },
  {
    image: "/images/bac-ho2.jpg",
    period: "Giai đoạn 2: 1911-1920",
    title: "Ra Đi Tìm Đường Cứu Nước",
    description: "Rời Tổ quốc, Người đi tìm con đường giải phóng dân tộc. Đi qua nhiều nước, tiếp xúc với phong trào công nhân quốc tế, tìm hiểu các trào lưu tư tưởng."
  },
  {
    image: "/images/bac-ho3.jpg",
    period: "Giai đoạn 3: 1920-1930",
    title: "Tiếp Nhận Chủ Nghĩa Mác-Lênin",
    description: "Đọc Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và thuộc địa của Lênin. Từ đây, Người tìm thấy con đường cứu nước đúng đắn."
  },
  {
    image: "/images/bacho6.jpg",
    period: "Giai đoạn 4: 1930-1945",
    title: "Sáng Lập Đảng & Chuẩn Bị Khởi Nghĩa",
    description: "Thành lập Đảng Cộng sản Việt Nam (1930). Chuẩn bị lực lượng, thời cơ cho cuộc Tổng khởi nghĩa giành chính quyền."
  },
  {
    image: "/images/image001-5363.jpg",
    period: "Giai đoạn 5: 1945-1969",
    title: "Lãnh Đạo Cách Mạng & Xây Dựng Đất Nước",
    description: "Lãnh đạo Cách mạng Tháng Tám thành công. Đọc Tuyên ngôn độc lập. Lãnh đạo kháng chiến, xây dựng chủ nghĩa xã hội cho đến khi qua đời."
  }
];

export default function FormationProcess() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Quá Trình Hình Thành Tư Tưởng
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg max-w-3xl mx-auto">
          Tư tưởng Hồ Chí Minh được hình thành qua 5 giai đoạn lịch sử quan trọng, 
          từ ý thức yêu nước sớm đến việc trở thành lãnh tụ cách mạng vĩ đại.
        </p>
        
        <div className="space-y-16">
          {periods.map((item, index) => (
            <div 
              key={index}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              
              {/* Content */}
              <div className="w-full md:w-1/2">
                <div className="bg-gradient-to-br from-red-50 to-yellow-50 dark:from-red-900 dark:to-yellow-900 p-8 rounded-2xl shadow-lg">
                  <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    {item.period}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
