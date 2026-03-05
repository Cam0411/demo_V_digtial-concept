import Hero from "../components/Hero";
import Services from "../components/Services";
import CaseStudies from "../components/CaseStudies";
import GrowthMarketing from "../components/GrowthMarketing";
import Process from "../components/Process";
import WhyChooseUs from "../components/WhyChooseUs";
import Pricing from "../components/Pricing";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <CaseStudies />
      <GrowthMarketing />
      <Process />
      <WhyChooseUs />
      <Pricing />
      <ContactForm />
    </>
  );
};

export default Home;
