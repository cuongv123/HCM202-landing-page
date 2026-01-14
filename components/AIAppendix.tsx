"use client";

export default function AIAppendix() {
  const aiTools = [
    {
      tool: "ChatGPT (GPT-4)",
      purpose: "Nghiên cứu và biên soạn nội dung",
      prompts: [
        "Phân tích tư tưởng HCM về con đường quá độ lên CNXH",
        "Tổng hợp quan điểm về việc Việt Nam bỏ qua TBCN",
        "Soạn thảo các câu hỏi trắc nghiệm về Chương 3"
      ],
      output: "Nội dung thô về lý thuyết, khung câu hỏi quiz",
      humanEdit: "Kiểm chứng với giáo trình HCM202, điều chỉnh ngôn ngữ phù hợp văn phong học thuật, bổ sung trích dẫn"
    },
    {
      tool: "Vbee AI (Text-to-Speech)",
      purpose: "Tạo video thuyết trình",
      prompts: [
        "Chuyển đổi script thuyết trình về Chương 3 thành giọng nói tiếng Việt tự nhiên"
      ],
      output: "File âm thanh voice-over cho video",
      humanEdit: "Chỉnh sửa script, đồng bộ với slide, thêm nhạc nền và hiệu ứng"
    },
    {
      tool: "GitHub Copilot",
      purpose: "Hỗ trợ lập trình website",
      prompts: [
        "Tạo component Timeline với animation",
        "Thiết kế quiz tương tác với TypeScript",
        "Tối ưu responsive design cho mobile"
      ],
      output: "Code template cho các component",
      humanEdit: "Tùy chỉnh logic, styling, tích hợp dữ liệu thực tế, debug và test"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent">
            Phụ Lục: Ứng Dụng AI Có Trách Nhiệm
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            AI Usage Disclosure - Năm Cánh Học Thuật Tạo
          </p>
        </div>

        {/* AI Tools Table */}
        <div className="space-y-6 mb-12">
          {aiTools.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-red-600"
            >
              <h3 className="text-2xl font-bold text-red-600 dark:text-red-400 mb-4">
                {item.tool}
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Mục đích sử dụng:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.purpose}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Prompts chính:
                  </h4>
                  <ul className="space-y-1">
                    {item.prompts.map((prompt, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 text-sm">
                        • {prompt}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Kết quả từ AI:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.output}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phần chỉnh sửa của sinh viên:
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.humanEdit}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Principles */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 rounded-2xl p-8 border border-red-200 dark:border-red-800">
            <h3 className="text-xl font-bold text-red-700 dark:text-red-400 mb-4">
              🎯 Nguyên tắc sử dụng
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• <strong>Minh bạch:</strong> Công khai công cụ AI đã sử dụng</li>
              <li>• <strong>Có trách nhiệm:</strong> Kiểm chứng thông tin bằng giáo trình chính thống</li>
              <li>• <strong>Sáng tạo:</strong> AI chỉ hỗ trợ, không thay thế con người</li>
              <li>• <strong>Liêm chính:</strong> Phân biệt rõ AI output vs. human edit</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
            <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-4">
              ✅ Kiểm chứng nguồn
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• Giáo trình: <em>Tư tưởng Hồ Chí Minh</em> (NXB CTQG, 2021)</li>
              <li>• Nghị quyết Trung ương về phát triển KTTT ĐNXHCN</li>
              <li>• Văn kiện Đại hội Đảng XIII</li>
              <li>• Tác phẩm gốc của Chủ tịch Hồ Chí Minh</li>
            </ul>
          </div>
        </div>

        {/* Commitment */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            📜 Cam kết Liêm chính Học thuật
          </h3>
          <p className="text-lg leading-relaxed">
            Tôi cam kết rằng <strong>không sử dụng AI để thay thế hoàn toàn</strong> quá trình học tập và nghiên cứu.
            Tất cả nội dung đã được <strong>kiểm chứng, chỉnh sửa và biên soạn lại</strong> dựa trên nguồn học thuật chính thống.
            AI chỉ đóng vai trò <strong>hỗ trợ công cụ</strong>, giúp tối ưu thời gian và nâng cao chất lượng sản phẩm.
          </p>
          <p className="mt-4 text-sm opacity-90">
            Sinh viên: [Họ tên] - MSSV: [MSSV] - Lớp: [Lớp]
          </p>
        </div>
      </div>
    </section>
  );
}
