import CTASection from "./CTAsection";
import DomainSelection from "./Domain";
import FeaturesSection from "./FeatureSection";
import Footer from "./Footer";
import HeroSection from "./HeroSection";
import HowItWorks from "./HowItWorks";
import TestimonialsSection from "./TestimonialSection";

function Home(){
    return (
        <>
        <div className=" sm:py-8"></div>
            <HeroSection />
            <FeaturesSection />
            <DomainSelection />
            <HowItWorks />
         
            <CTASection />
            <Footer />
        </>
    );
}

export default Home;