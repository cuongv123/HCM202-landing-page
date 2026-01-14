"use client";

export default function TransitionPath() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Con Đường Quá Độ Đặc Thù
        </h2>
        <p className="text-center text-xl text-red-600 dark:text-red-400 mb-12 font-semibold">
          Bỏ Qua Chế Độ Tư Bản Chủ Nghĩa - Lên Chủ Nghĩa Xã Hội
        </p>

        {/* Explanation Box */}
        <div className="bg-gradient-to-br from-red-50 to-yellow-50 dark:from-red-900 dark:to-yellow-900 p-8 rounded-2xl shadow-xl mb-12 border-l-8 border-red-600">
          <h3 className="text-2xl font-bold mb-4 text-red-900 dark:text-white">
            Vấn Đề Đặt Ra
          </h3>
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed mb-4">
            Nhiều nước trên thế giới đi lên hiện đại hóa thông qua chủ nghĩa tư bản. 
            Nhưng <strong>Hồ Chí Minh khẳng định Việt Nam phải quá độ lên chủ nghĩa xã hội 
            "bỏ qua chế độ tư bản chủ nghĩa"</strong>.
          </p>
          <p className="text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
            Đây là con đường phát triển đặc thù, phù hợp với điều kiện lịch sử - xã hội 
            của Việt Nam, một nước thuộc địa nửa phong kiến.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left: Ý nghĩa "Bỏ qua" */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-red-200 dark:border-red-800">
            <h3 className="text-2xl font-bold mb-4 text-red-700 dark:text-red-400">
              Ý Nghĩa "Bỏ Qua TBCN"
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Không trải qua giai đoạn phát triển TBCN</strong> như các nước phương Tây</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Không lặp lại chu kỳ</strong>: bóc lột, bất công xã hội của chế độ tư bản</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Đi thẳng lên CNXH</strong> dưới sự lãnh đạo của Đảng Cộng sản, dựa vào sức mạnh nhân dân</span>
              </li>
              <li className="flex items-start">
                <span className="text-red-600 font-bold mr-2">•</span>
                <span><strong>Vẫn học tập, tiếp thu</strong> những thành tựu khoa học kỹ thuật của TBCN</span>
              </li>
            </ul>
          </div>

          {/* Right: Tại sao phù hợp */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border-2 border-yellow-200 dark:border-yellow-800">
            <h3 className="text-2xl font-bold mb-4 text-yellow-700 dark:text-yellow-400">
              Tại Sao Phù Hợp Với VN?
            </h3>
            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">1.</span>
                <span><strong>Điều kiện lịch sử:</strong> VN là nước thuộc địa nửa phong kiến, không có giai cấp tư sản dân tộc mạnh</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">2.</span>
                <span><strong>Bối cảnh thời đại:</strong> Thời kỳ chuyển biến từ TBCN lên CNXH trên thế giới</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">3.</span>
                <span><strong>Lợi thế hậu khởi:</strong> Học hỏi kinh nghiệm từ các nước XHCN đi trước</span>
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 font-bold mr-2">4.</span>
                <span><strong>Mục tiêu nhân văn:</strong> Tránh bóc lột, hướng tới công bằng xã hội ngay từ đầu</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Characteristics of the path */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900 dark:to-orange-900 p-8 rounded-2xl shadow-xl">
          <h3 className="text-2xl font-bold mb-6 text-center text-amber-900 dark:text-white">
            Đặc Điểm Con Đường Quá Độ Của Việt Nam
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-red-600">1</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Lâu Dài</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Quá trình lâu dài, trải qua nhiều thế hệ, không thể vội vàng
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-yellow-600">2</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Nhiều Khó Khăn</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Xuất phát điểm thấp, hậu quả chiến tranh, bao vây cấm vận
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-white dark:bg-gray-800 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-2xl font-bold text-green-600">3</span>
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Tất Yếu</h4>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                Phù hợp quy luật lịch sử, nguyện vọng dân tộc, xu thế thời đại
              </p>
            </div>
          </div>
        </div>

        {/* Quote from Ho Chi Minh */}
        <div className="mt-12 text-center">
          <div className="bg-red-600 text-white p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-serif italic mb-4">
              "Cách mạng tư sản ở nước ta không thể thành công, 
              chỉ có cách mạng vô sản mới giải phóng được dân tộc ta"
            </p>
            <p className="text-xl font-semibold">
              - Hồ Chí Minh -
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
