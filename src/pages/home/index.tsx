import SectionTitleAndSubtitle from "../../components/SectionTitleAndSubtitle";
import EventItemsSection from "./EventItemsSection";
import GallerySection from "./GallerySection";
import HeaderBannerSection from "./HeaderBannerSection";
import PricingPlansSection from "./PricingPlansSection";
import RecentEventsSection from "./RecentEventsSection";
import ServicesSection from "./ServicesSection";

const Home = () => {
  return (
    <div className="absolute top-0">
      <HeaderBannerSection />

      <SectionTitleAndSubtitle
        title="Our Services"
        subtitle="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
        className="mt-20 mb-14"
      />
      <ServicesSection />

      <SectionTitleAndSubtitle
        title="Event Items"
        subtitle="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
        className="mt-24 xl:mt-32 mb-14"
      />
      <EventItemsSection />

      <SectionTitleAndSubtitle
        title="Explore Our Pricing Plans"
        subtitle="Ut posuere felis arcu tellus tempus in in ultricies. Gravida id nibh ornare viverra. Ultrices faucibus neque velit risus ac id lorem."
        className="mt-24 xl:mt-32 mb-14"
      />
      <PricingPlansSection />

      <GallerySection />
      <RecentEventsSection />
    </div>
  );
};

export default Home;
