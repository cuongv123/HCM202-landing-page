"use client";

const curriculum = [
  {
    number: 1,
    title: "Khái niệm, đối tượng, phương pháp nghiên cứu và ý nghĩa học tập môn tư tưởng Hồ Chí Minh",
    description: "Tìm hiểu về môn học, đối tượng nghiên cứu, phương pháp tiếp cận và tầm quan trọng của việc học tập tư tưởng Hồ Chí Minh."
  },
  {
    number: 2,
    title: "Cơ sở, quá trình hình thành và phát triển tư tưởng Hồ Chí Minh",
    description: "Nghiên cứu các yếu tố tác động, quá trình hình thành và phát triển hệ thống tư tưởng của Người qua các giai đoạn lịch sử."
  },
  {
    number: 3,
    title: "Tư tưởng Hồ Chí Minh về độc lập dân tộc và chủ nghĩa xã hội",
    description: "Phân tích quan điểm của Người về sự gắn kết giữa độc lập dân tộc và chủ nghĩa xã hội trong điều kiện Việt Nam."
  },
  {
    number: 4,
    title: "Tư tưởng Hồ Chí Minh về Đảng Cộng sản Việt Nam và Nhà nước của nhân dân, do nhân dân, vì nhân dân",
    description: "Tìm hiểu về vai trò lãnh đạo của Đảng và bản chất của Nhà nước theo tư tưởng Hồ Chí Minh."
  },
  {
    number: 5,
    title: "Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế",
    description: "Nghiên cứu về sức mạnh đại đoàn kết dân tộc và vai trò của đoàn kết quốc tế trong sự nghiệp cách mạng."
  },
  {
    number: 6,
    title: "Tư tưởng Hồ Chí Minh về văn hóa, đạo đức, con người",
    description: "Phân tích quan điểm của Người về vai trò của văn hóa, đạo đức và sự phát triển toàn diện của con người."
  }
];

export default function Curriculum() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-red-50 via-yellow-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 dark:text-white">
          Cấu Trúc Môn Học
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-4 text-lg">
          6 chương của môn Tư tưởng Hồ Chí Minh
        </p>
        <p className="text-center text-red-600 dark:text-red-400 mb-12 text-lg font-semibold">
          Bài học tập trung vào Chương 3
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {curriculum.map((chapter) => (
            <div 
              key={chapter.number}
              className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 border-l-4 ${
                chapter.number === 3 
                  ? 'border-red-600 ring-4 ring-red-200 dark:ring-red-800' 
                  : 'border-gray-400 opacity-75'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {chapter.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white leading-tight">
                    {chapter.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {chapter.description}
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
