"use client";

import { useState } from "react";

const chapters = [
  { title: "1. Khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn tư tưởng Hồ Chí Minh", page: 5 },
  { title: "2. Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh", page: 20 },
  { title: "3. Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội", page: 45 },
  { title: "4. Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân", page: 78 },
  { title: "5. Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế", page: 102 },
  { title: "6. Tư tưởng Hồ Chí Minh về văn hóa, đạo đức, con người", page: 125 },
];

// URL giáo trình PDF - Dùng Google Docs Viewer để đảm bảo hiển thị
const PDF_ID = process.env.NEXT_PUBLIC_PDF_ID || "1JZoAk0Jd3NJPwawkfe2q5UYsY9tx6p95";

export default function Textbook() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showPDF, setShowPDF] = useState(false);
  const totalPages = 144;
  
  // URL động với số trang
  const PDF_URL = `https://drive.google.com/file/d/${PDF_ID}/preview#page=${currentPage}`;
  const PDF_VIEWER_URL = `https://docs.google.com/viewer?url=https://drive.google.com/uc?id=${PDF_ID}&embedded=true`;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Giáo Trình Môn Học
          </h2>
          <div className="flex gap-4 justify-center flex-wrap">
            <a 
              href={`https://drive.google.com/file/d/${PDF_ID}/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Mở giáo trình
            </a>
            <button 
              onClick={() => setShowPDF(!showPDF)}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {showPDF ? 'Ẩn PDF' : 'Xem PDF'}
            </button>
          </div>
        </div>

        {/* PDF Viewer (Full Width) */}
        {showPDF && (
          <div className="mb-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 animate-fadeIn">
            <div className="mb-4 flex gap-3">
              <a 
                href={`https://drive.google.com/file/d/${PDF_ID}/view`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Mở trên Google Drive
              </a>
              <a 
                href={`https://drive.google.com/uc?export=download&id=${PDF_ID}`}
                className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Tải xuống
              </a>
            </div>
            <iframe
              src={PDF_URL}
              key={currentPage}
              className="w-full h-[800px] rounded-xl border-2 border-gray-200 dark:border-gray-700"
              title="Giáo trình Tư tưởng Hồ Chí Minh"
              allow="autoplay"
            />
          </div>
        )}

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Book Preview */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
            <div className="relative aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl overflow-hidden mb-6 shadow-xl hover:shadow-2xl transition-shadow">
              {/* Book Cover Mockup */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
                <div className="border-4 border-red-700 p-6 w-full h-full flex flex-col items-center justify-center space-y-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    BỘ GIÁO DỤC VÀ ĐÀO TẠO
                  </p>
                  
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-3xl md:text-4xl font-bold text-red-800 dark:text-red-600 mb-2">
                      GIÁO TRÌNH
                    </h3>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                      TƯ TƯỞNG HỒ CHÍ MINH
                    </h2>
                  </div>

                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">DÀNH CHO BẬC ĐẠI HỌC - KHÔNG CHUYÊN NGÀNH</p>
                    <p className="font-bold">LÝ LUẬN CHÍNH TRỊ</p>
                  </div>

                  <div className="mt-auto">
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      HÀ NỘI - 2019
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg"
              >
                Trước
              </button>
              
              <span className="text-gray-700 dark:text-gray-300 font-semibold">
                Trang {currentPage} trên {totalPages}
              </span>
              
              <button
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="bg-orange-500 text-white px-6 py-2 rounded-lg font-bold hover:bg-orange-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors shadow-md hover:shadow-lg"
              >
                Sau
              </button>
            </div>
          </div>

          {/* Right: Table of Contents */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8">
            <h3 className="text-3xl font-bold mb-8 text-center text-gray-900 dark:text-white border-b-4 border-orange-500 pb-4">
              Danh sách mục lục
            </h3>
            
            <div className="space-y-4">
              {chapters.map((chapter, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentPage(chapter.page);
                    setShowPDF(true);
                  }}
                  className={`
                    p-5 rounded-xl cursor-pointer transition-all duration-300
                    ${index === 2 
                      ? 'bg-gradient-to-r from-red-100 to-orange-100 dark:from-red-900/30 dark:to-orange-900/30 border-l-4 border-red-600 shadow-lg scale-105' 
                      : 'bg-gray-50 dark:bg-gray-700/50 hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-102 hover:shadow-md'
                    }
                  `}
                >
                  <div className="flex justify-between items-start">
                    <p className={`
                      font-semibold leading-relaxed flex-1
                      ${index === 2 
                        ? 'text-red-800 dark:text-red-400' 
                        : 'text-gray-800 dark:text-gray-200'
                      }
                    `}>
                      {chapter.title}
                    </p>
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-2 shrink-0">
                      trang {chapter.page}
                    </span>
                  </div>
                  {index === 2 && (
                    <span className="inline-block mt-2 text-xs bg-red-600 text-white px-3 py-1 rounded-full font-bold">
                      Chương trọng tâm
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl border-l-4 border-orange-500">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                <strong className="text-red-700 dark:text-red-400">Lưu ý:</strong> Giáo trình chuẩn do Bộ Giáo dục và Đào tạo ban hành, 
                dùng cho tất cả sinh viên bậc đại học ngành không chuyên. 
                Nội dung bài học tập trung vào <strong>Chương 3</strong> về con đường quá độ lên chủ nghĩa xã hội.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
