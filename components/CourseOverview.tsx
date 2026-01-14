"use client";

export default function CourseOverview({ id }: { id?: string }) {
  return (
    <section id={id} className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Chương 3: Độc Lập Dân Tộc & Chủ Nghĩa Xã Hội
        </h2>
        
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              <strong className="text-red-600 dark:text-red-400">Chương 3</strong> trong môn Tư tưởng Hồ Chí Minh 
              là nội dung cốt lõi, trình bày về tư tưởng của Người liên quan đến <strong>độc lập dân tộc gắn liền với 
              chủ nghĩa xã hội</strong> - nền tảng của cách mạng Việt Nam.
            </p>
            
            <p>
              Chương này giải đáp câu hỏi then chốt:
            </p>
            
            <div className="bg-gradient-to-r from-red-50 to-yellow-50 dark:from-red-900 dark:to-yellow-900 p-6 rounded-xl border-l-4 border-red-600 my-6">
              <p className="text-gray-800 dark:text-gray-200 font-semibold text-xl">
                Vì sao Việt Nam phải <strong>bỏ qua chế độ tư bản chủ nghĩa</strong>, 
                đi thẳng lên chủ nghĩa xã hội?
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-400 mt-8">Nội Dung Chính:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-red-600 text-2xl mr-3">1.</span>
                  <span><strong>Tư tưởng về độc lập dân tộc:</strong> Không có gì quý hơn độc lập, tự do</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 text-2xl mr-3">2.</span>
                  <span><strong>Tư tưởng về chủ nghĩa xã hội:</strong> Con đường phát triển phù hợp với Việt Nam</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 text-2xl mr-3">3.</span>
                  <span><strong>Sự kết hợp hài hòa:</strong> Độc lập dân tộc gắn liền với CNXH</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 text-2xl mr-3">4.</span>
                  <span><strong>Con đường quá độ đặc thù:</strong> Bỏ qua TBCN, xây dựng CNXH ở VN</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-amber-50 dark:bg-amber-900 p-6 rounded-xl mt-8">
              <p className="text-gray-800 dark:text-gray-200 font-semibold">
                <strong>Trọng tâm bài học:</strong> Hiểu rõ con đường cách mạng Việt Nam - 
                đặc thù, lâu dài, nhiều khó khăn nhưng tất yếu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
