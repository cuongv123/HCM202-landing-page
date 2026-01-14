"use client";

import Image from "next/image";

export default function Biography() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white">
          Tiểu Sử
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <h3 className="text-3xl font-bold mb-6 text-red-700 dark:text-red-400">
              Chủ tịch Hồ Chí Minh (19/5/1890 - 2/9/1969)
            </h3>
            
            <div className="space-y-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                <strong>Hồ Chí Minh</strong>, tên khai sinh là <strong>Nguyễn Sinh Cung</strong>, 
                còn được biết với tên gọi <strong>Bác Hồ</strong>, là một nhà cách mạng và chính khách người Việt Nam.
              </p>
              
              <p>
                Ông là người <strong>sáng lập Đảng Cộng sản Việt Nam</strong>, từng là 
                Chủ tịch nước Việt Nam Dân chủ Cộng hòa từ 1945 – 1969, 
                Thủ tướng Việt Nam Dân chủ Cộng hòa trong những năm 1945–1955.
              </p>
              
              <p>
                Ông là <strong>Tổng Bí thư Ban Chấp hành Trung ương Đảng Lao động Việt Nam</strong> từ 1956 – 1960, 
                Chủ tịch Ban Chấp hành Trung ương Đảng Lao động Việt Nam từ năm 1951 cho đến khi qua đời.
              </p>
              
              <p>
                Hồ Chí Minh là biểu tượng của <strong>độc lập dân tộc</strong> và 
                <strong> chủ nghĩa xã hội</strong> ở Việt Nam, người đặt nền móng cho 
                đất nước Việt Nam hiện đại.
              </p>
              
              <a 
                href="https://tulieuvankien.dangcongsan.vn/c-mac-angghen-lenin-ho-chi-minh/ho-chi-minh/tieu-su-cuoc-doi-va-su-nghiep/tieu-su-chu-tich-ho-chi-minh-52"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Tìm hiểu thêm →
              </a>
            </div>
          </div>
          
          {/* Portrait Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800">
              <Image
                src="/images/bacho8.jpg"
                alt="Chân dung Chủ tịch Hồ Chí Minh"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-red-200 dark:bg-red-900 rounded-full -z-10" />
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-200 dark:bg-yellow-900 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
