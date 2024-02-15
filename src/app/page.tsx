import Contact from "@/components/Contact";
import EducationTimeline from "@/components/EducationTimeline";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import InformalEducationCarousel from "@/components/InformalEducationCarousel";
import Navigation from "@/components/Navigation";
import Summary from "@/components/Summary";
import WorkExperienceTimeline from "@/components/WorkExperienceTimeline";

export default function Home() {
    return (
        <>
            <main>
                <div className="container ">
                    <Navigation />
                    <Header />
                    <Summary />
                    <WorkExperienceTimeline />
                    <EducationTimeline />
                    <InformalEducationCarousel />
                    <Features />
                    <Contact />
                    <Footer />
                </div>
            </main>
        </>
    );
}
