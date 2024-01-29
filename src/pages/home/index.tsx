import SectionTitleAndSubtitle from "../../components/SectionTitleAndSubtitle";
import HeaderBannerSection from "./HeaderBannerSection";
import ServicesSection from "./ServicesSection";

const Home = () => {
  return (
    <div>
      <HeaderBannerSection />

      <SectionTitleAndSubtitle
        title="Our Services"
        subtitle="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
        className="mt-20 mb-14"
      />
      <ServicesSection />
    </div>
  );
};

export default Home;
