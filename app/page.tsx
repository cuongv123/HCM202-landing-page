import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Biography from "@/components/Biography";
import CourseOverview from "@/components/CourseOverview";
import VideoPresentation from "@/components/VideoPresentation";
import Textbook from "@/components/Textbook";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main className="min-h-screen pt-20">
      <Hero />
      <Biography />
      <CourseOverview id="content" />
      <VideoPresentation />
      <Textbook />
      
      <Footer />
    </main>
    </>
  );
}
