import Header from "@/components/Header";
import Quiz from "@/components/Quiz";
import Footer from "@/components/Footer";

export default function QuizPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <Quiz />
      </main>
      <Footer />
    </>
  );
}
