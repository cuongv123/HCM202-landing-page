import Header from "@/components/Header";
import VisualTimeline from "@/components/VisualTimeline";
import TransitionPath from "@/components/TransitionPath";
import ModernApplication from "@/components/ModernApplication";
import VideoPresentation from "@/components/VideoPresentation";
import Footer from "@/components/Footer";

export default function ContentPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <VisualTimeline />
        <TransitionPath />
        <ModernApplication />
        <VideoPresentation />
      </main>
      <Footer />
    </>
  );
}
