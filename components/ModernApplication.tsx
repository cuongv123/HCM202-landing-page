"use client";

export default function ModernApplication() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
          Vận Dụng Tư Tưởng Vào Thực Tiễn Hiện Nay
        </h2>
        <p className="text-center text-yellow-100 mb-16 text-lg">
          Từ lý thuyết đến hành động - Áp dụng tư tưởng HCM trong bối cảnh mới
        </p>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-8 mb-12 items-start">
          {/* Left: Thành tựu */}
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-red-200/50 h-full">
            <h3 className="text-2xl font-bold mb-6 text-red-700 border-b-4 border-red-700 pb-3">
              Thành Tựu Đạt Được
            </h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start group hover:bg-green-50 p-3 rounded-lg transition-all duration-200">
                <span className="text-green-600 font-bold text-xl mr-3 shrink-0">•</span>
                <div>
                  <strong>Độc lập, chủ quyền:</strong> Giữ vững độc lập dân tộc trong bối cảnh toàn cầu hóa
                </div>
              </li>
              <li className="flex items-start group hover:bg-green-50 p-3 rounded-lg transition-all duration-200">
                <span className="text-green-600 font-bold text-xl mr-3 shrink-0">•</span>
                <div>
                  <strong>Đổi mới kinh tế:</strong> Kinh tế thị trường định hướng XHCN - GDP tăng trưởng ổn định
                </div>
              </li>
              <li className="flex items-start group hover:bg-green-50 p-3 rounded-lg transition-all duration-200">
                <span className="text-green-600 font-bold text-xl mr-3 shrink-0">•</span>
                <div>
                  <strong>Hội nhập quốc tế:</strong> Thành viên WTO, CPTPP, ASEAN - mở rộng quan hệ đối ngoại
                </div>
              </li>
              <li className="flex items-start group hover:bg-green-50 p-3 rounded-lg transition-all duration-200">
                <span className="text-green-600 font-bold text-xl mr-3 shrink-0">•</span>
                <div>
                  <strong>Xóa đói giảm nghèo:</strong> Thoát khỏi nhóm nước nghèo, cải thiện đời sống nhân dân
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Thách thức */}
          <div className="bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-yellow-200/50 h-full">
            <h3 className="text-2xl font-bold mb-6 text-yellow-700 border-b-4 border-yellow-700 pb-3">
              Thách Thức Cần Vượt Qua
            </h3>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-start group hover:bg-red-50 p-3 rounded-lg transition-all duration-200">
                <span className="text-red-600 font-bold text-xl mr-3 shrink-0 group-hover:scale-125 transition-transform">!</span>
                <div>
                  <strong>Cạnh tranh quốc tế:</strong> Áp lực từ các nền kinh tế lớn, bảo hộ mậu dịch
                </div>
              </li>
              <li className="flex items-start group hover:bg-red-50 p-3 rounded-lg transition-all duration-200">
                <span className="text-red-600 font-bold text-xl mr-3 shrink-0">!</span>
                <div>
                  <strong>Bất bình đẳng xã hội:</strong> Khoảng cách giàu nghèo, phát triển chưa đồng đều
                </div>
              </li>
              <li className="flex items-start group hover:bg-red-50 p-3 rounded-lg transition-all duration-200">
                <span className="text-red-600 font-bold text-xl mr-3 shrink-0">!</span>
                <div>
                  <strong>Ô nhiễm môi trường:</strong> Cân bằng tăng trưởng kinh tế với bảo vệ môi trường
                </div>
              </li>
              <li className="flex items-start group hover:bg-red-50 p-3 rounded-lg transition-all duration-200">
                <span className="text-red-600 font-bold text-xl mr-3 shrink-0">!</span>
                <div>
                  <strong>Biến đổi khí hậu:</strong> Tác động nặng nề, cần giải pháp phát triển bền vững
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Solutions */}
        <div className="bg-white/95 backdrop-blur rounded-xl shadow-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Con Đường Phát Triển Tiếp Theo
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center group hover:transform hover:scale-110 transition-all duration-300">
              <div className="bg-gradient-to-br from-red-600 to-red-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-2xl group-hover:shadow-red-500/50 group-hover:rotate-12 transition-all">
                1
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-red-700 transition-colors">Công Nghiệp Hóa - Hiện Đại Hóa</h4>
              <p className="text-gray-700 text-sm">
                Phát triển công nghệ cao, chuyển đổi số, nâng cao năng suất lao động
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-110 transition-all duration-300">
              <div className="bg-gradient-to-br from-yellow-600 to-yellow-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-2xl group-hover:shadow-yellow-500/50 group-hover:rotate-12 transition-all">
                2
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-yellow-700 transition-colors">Công Bằng Xã Hội</h4>
              <p className="text-gray-700 text-sm">
                Phân phối lại thu nhập hợp lý, chăm sóc người yếu thế, giảm bất bình đẳng
              </p>
            </div>
            
            <div className="text-center group hover:transform hover:scale-110 transition-all duration-300">
              <div className="bg-gradient-to-br from-green-600 to-green-700 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold shadow-2xl group-hover:shadow-green-500/50 group-hover:rotate-12 transition-all">
                3
              </div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 group-hover:text-green-700 transition-colors">Phát Triển Bền Vững</h4>
              <p className="text-gray-700 text-sm">
                Kinh tế xanh, năng lượng sạch, bảo vệ môi trường cho thế hệ mai sau
              </p>
            </div>
          </div>

          {/* Key Message */}
          <div className="mt-12 bg-gradient-to-r from-red-50 to-yellow-50 p-8 rounded-xl border-l-4 border-red-600 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
            <p className="text-xl font-semibold text-gray-800 text-center">
              "Giữ vững độc lập dân tộc, xây dựng CNXH theo con đường phù hợp với đặc điểm Việt Nam, 
              hướng tới mục tiêu: <strong className="text-red-700">Dân giàu, nước mạnh, dân chủ, công bằng, văn minh</strong>"
            </p>
          </div>
        </div>

        {/* Call to Action for Youth */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">
              Vai Trò Của Thế Hệ Trẻ
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Thế hệ trẻ là lực lượng nòng cốt trong việc vận dụng tư tưởng Hồ Chí Minh, 
              xây dựng đất nước giàu mạnh, văn minh trong thời kỳ mới.
            </p>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="bg-red-50 p-4 rounded-lg hover:bg-red-100 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <strong className="text-red-700 text-base">Học tập tốt</strong>
                <p className="text-gray-600 mt-2">Nắm vững kiến thức, kỹ năng</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg hover:bg-yellow-100 hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer">
                <strong className="text-yellow-700 text-base">Lao động sáng tạo</strong>
                <p className="text-gray-600 mt-2">Đổi mới, khởi nghiệp</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <strong className="text-green-700">Yêu nước tiến bộ</strong>
                <p className="text-gray-600 mt-2">Giữ gìn văn hóa, bảo vệ Tổ quốc</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <strong className="text-blue-700">Đạo đức lối sống</strong>
                <p className="text-gray-600 mt-2">Sống có ích cho xã hội</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
