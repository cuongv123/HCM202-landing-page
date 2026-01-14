"use client";

import { useState } from "react";

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

const questions: QuizQuestion[] = [
  {
    question: "Tại sao Việt Nam phải bỏ qua chế độ tư bản chủ nghĩa, đi thẳng lên chủ nghĩa xã hội?",
    options: [
      "Vì Việt Nam quá nghèo, không thể phát triển TBCN",
      "Vì Việt Nam không có giai cấp tư sản đủ mạnh, điều kiện lịch sử khách quan và xu thế thời đại",
      "Vì Hồ Chí Minh không thích TBCN",
      "Vì tất cả các nước đều đi theo con đường này"
    ],
    correct: 1,
    explanation: "Việt Nam bỏ qua TBCN vì: (1) Giai cấp tư sản dân tộc yếu kém, không đủ khả năng lãnh đạo cách mạng giải phóng dân tộc; (2) Điều kiện lịch sử - VN là thuộc địa nửa phong kiến, chịu áp bức nặng nề; (3) Xu thế thời đại - sau Cách mạng tháng 10 Nga, con đường XHCN đã chứng minh được sức mạnh; (4) Sự lãnh đạo đúng đắn của Đảng Cộng sản với cương lĩnh cách mạng phù hợp."
  },
  {
    question: "Con đường quá độ lên chủ nghĩa xã hội ở Việt Nam có đặc điểm gì?",
    options: [
      "Ngắn hạn và dễ dàng",
      "Lâu dài, gian khổ nhưng tất yếu",
      "Giống hệt mô hình Liên Xô",
      "Chỉ tập trung vào công nghiệp hóa"
    ],
    correct: 1,
    explanation: "Theo tư tưởng HCM, con đường quá độ của VN là 'lâu dài, gian khổ nhưng tất yếu'. LÂU DÀI vì VN xuất phát từ nền kinh tế nông nghiệp lạc hậu, cần thời gian xây dựng CNTB hiện đại. GIAN KHỔ do phải vượt qua nhiều thử thách từ điều kiện ban đầu nghèo nàn, hậu quả chiến tranh. TẤT YẾU vì đây là con đường phù hợp với quy luật lịch sử, lợi ích dân tộc và xu hướng thời đại."
  },
  {
    question: "Vai trò của Đảng Cộng sản Việt Nam trong con đường quá độ lên CNXH là gì?",
    options: [
      "Chỉ đóng vai trò tư vấn",
      "Lực lượng lãnh đạo duy nhất, định hướng con đường phát triển",
      "Chia sẻ quyền lãnh đạo với các đảng phái khác",
      "Không có vai trò quan trọng"
    ],
    correct: 1,
    explanation: "Đảng Cộng sản Việt Nam là lực lượng lãnh đạo duy nhất, đóng vai trò then chốt trong việc: (1) Xác định đường lối cách mạng đúng đắn - bỏ qua TBCN, đi thẳng lên CNXH; (2) Tổ chức, động viên toàn dân thực hiện mục tiêu độc lập dân tộc gắn liền với CNXH; (3) Vận dụng sáng tạo CNMC-L vào điều kiện VN; (4) Lãnh đạo xây dựng nhà nước, quân đội, mặt trận dân tộc thống nhất."
  },
  {
    question: "Mục tiêu cuối cùng của con đường quá độ lên CNXH ở Việt Nam là gì?",
    options: [
      "Chỉ giành độc lập dân tộc",
      "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
      "Bắt kịp các nước phát triển về GDP",
      "Xây dựng quân đội mạnh nhất khu vực"
    ],
    correct: 1,
    explanation: "Mục tiêu toàn diện của HCM là xây dựng một nước Việt Nam: DÂN GIÀU (đời sống vật chất đầy đủ), NƯỚC MẠNH (kinh tế phát triển, quốc phòng vững chắc), DÂN CHỦ (nhân dân làm chủ), CÔNG BẰNG (phân phối hợp lý, xóa bỏ bất bình đẳng), VĂN MINH (văn hóa tiên tiến, con người phát triển toàn diện). Đây là sự kết hợp hài hòa giữa phát triển kinh tế và tiến bộ xã hội."
  },
  {
    question: "Điều kiện tiên quyết để xây dựng CNXH ở Việt Nam là gì?",
    options: [
      "Có đủ vốn đầu tư nước ngoài",
      "Giành và giữ vững độc lập dân tộc",
      "Có dân số đông",
      "Có tài nguyên thiên nhiên phong phú"
    ],
    correct: 1,
    explanation: "HCM khẳng định: 'Không có gì quý hơn độc lập, tự do'. Muốn xây dựng CNXH, trước hết phải GIÀNH ĐỘC LẬP DÂN TỘC (thoát khỏi ách thống trị thực dân, phong kiến) và GIỮ VỮNG ĐỘC LẬP (bảo vệ chủ quyền, toàn vẹn lãnh thổ). Không có độc lập, dân tộc không thể làm chủ số phận, không thể xây dựng chế độ xã hội mới. Đây là nguyên lý xuất phát từ thực tiễn VN - nước thuộc địa nửa phong kiến."
  },
  {
    question: "Con đường quá độ của Việt Nam khác với các nước xã hội chủ nghĩa khác ở điểm nào?",
    options: [
      "Hoàn toàn giống Liên Xô",
      "Bỏ qua TBCN từ nền sản xuất nông nghiệp nhỏ, lạc hậu",
      "Không cần Đảng lãnh đạo",
      "Chỉ phát triển công nghiệp nặng"
    ],
    correct: 1,
    explanation: "Khác với các nước Đông Âu đã trải qua TBCN, VN đi thẳng lên CNXH từ xã hội NỬA PHONG KIẾN, NỬA THUỘC ĐỊA với nền sản xuất NÔNG NGHIỆP NHỎ, LẠC HẬU. Đặc thù này đòi hỏi: (1) Vừa giải phóng dân tộc, vừa giải phóng giai cấp, giải phóng con người; (2) Kết hợp cách mạng dân tộc dân chủ nhân dân với cách mạng XHCN; (3) Vận dụng sáng tạo CNMC-L phù hợp điều kiện VN, không áp dụng máy móc."
  },
  {
    question: "Trong giai đoạn hiện nay, con đường quá độ lên CNXH ở Việt Nam được thể hiện qua chính sách nào?",
    options: [
      "Kinh tế tập trung quan liêu hoàn toàn",
      "Kinh tế thị trường định hướng xã hội chủ nghĩa",
      "Tư nhân hóa toàn bộ nền kinh tế",
      "Đóng cửa, tự cấp tự túc"
    ],
    correct: 1,
    explanation: "Từ Đổi Mới 1986, VN thực hiện KINH TẾ THỊ TRƯỜNG ĐỊNH HƯỚNG XHCN: (1) Có cơ chế thị trường nhưng Nhà nước định hướng theo mục tiêu XHCN; (2) Nhiều thành phần kinh tế, nhiều hình thức sở hữu phát triển; (3) Hội nhập quốc tế sâu rộng (WTO, CPTPP, ASEAN); (4) Kết hợp tăng trưởng kinh tế với tiến bộ, công bằng xã hội. Đây là vận dụng sáng tạo tư tưởng HCM trong điều kiện mới."
  },
  {
    question: "Thế hệ trẻ cần làm gì để góp phần thực hiện con đường quá độ lên CNXH?",
    options: [
      "Chỉ cần học giỏi là đủ",
      "Học tập tốt, lao động sáng tạo, giữ vững lý tưởng cách mạng",
      "Không cần quan tâm đến chính trị",
      "Chỉ lo kiếm tiền cá nhân"
    ],
    correct: 1,
    explanation: "Thế hệ trẻ là lực lượng nòng cốt, cần: (1) HỌC TẬP TỐT - nắm vững kiến thức khoa học, kỹ năng nghề nghiệp, hiểu rõ tư tưởng HCM; (2) LAO ĐỘNG SÁNG TẠO - đổi mới, khởi nghiệp, đóng góp vào phát triển kinh tế; (3) GIỮ VỮNG LÝ TƯỞNG - yêu nước, trung thành với mục tiêu độc lập dân tộc gắn liền CNXH; (4) ĐẠO ĐỨC CÁCH MẠNG - sống có ích cho xã hội, phục vụ nhân dân. HCM nói: 'Thanh niên phải đi đầu trong mọi công việc'."
  }
];

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const handleAnswer = (index: number) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <section className="py-20 px-4 bg-red-50 dark:bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Hoàn Thành!
          </h2>
          <p className="text-2xl mb-4 text-gray-700 dark:text-gray-300">
            Điểm của bạn: {score}/{questions.length}
          </p>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
            {score === questions.length 
              ? "Xuất sắc! Bạn hiểu rất rõ về tư tưởng Hồ Chí Minh!" 
              : score >= questions.length / 2
              ? "Tốt lắm! Tiếp tục tìm hiểu thêm nhé!"
              : "Hãy đọc lại nội dung để hiểu rõ hơn!"}
          </p>
          <button
            onClick={resetQuiz}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
          >
            Làm Lại
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-4 bg-red-50 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Kiểm Tra Hiểu Biết
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
          Câu {currentQuestion + 1}/{questions.length}
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">
            {questions[currentQuestion].question}
          </h3>

          <div className="space-y-4 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(index)}
                disabled={selectedAnswer !== null}
                className={`
                  w-full p-4 rounded-lg text-left transition-all
                  ${selectedAnswer === null 
                    ? 'bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600' 
                    : selectedAnswer === index
                    ? index === questions[currentQuestion].correct
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : index === questions[currentQuestion].correct
                    ? 'bg-green-500 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 opacity-50'
                  }
                `}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg mb-6">
              <p className="text-gray-800 dark:text-gray-200">
                <strong>Giải thích:</strong> {questions[currentQuestion].explanation}
              </p>
            </div>
          )}

          {showExplanation && (
            <button
              onClick={nextQuestion}
              className="w-full bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              {currentQuestion < questions.length - 1 ? 'Câu Tiếp Theo →' : 'Xem Kết Quả'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
