import PricingPlansCard from "../../components/ui/PricingPlansCard";

const PricingPlansSection = () => {
  const featuresI = {
    type: "Enterprise",
    intro: "In ornare ligula lorem, sit amet faucibus velit vehicula eget.",
    price: "15",
    features: [
      "Ten links available",
      "Own analytics platform",
      "Mobile app",
      "Chat Support",
      "1000 users",
      "Template Library",
    ],
  };

  const featuresII = {
    type: "Forever",
    intro: "In ornare ligula lorem, sit amet faucibus velit vehicula eget.",
    price: "25",
    features: [
      "Ten links available",
      "Own analytics platform",
      "Mobile app",
      "Chat Support",
      "1000 users",
      "Template Library",
    ],
  };

  const featuresIII = {
    type: "Business Pack",
    intro: "In ornare ligula lorem, sit amet faucibus velit vehicula eget.",
    price: "09",
    features: [
      "Ten links available",
      "Own analytics platform",
      "Mobile app",
      "Chat Support",
      "1000 users",
      "Template Library",
    ],
  };

  return (
    <div className="flex justify-center items-center w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-8 px-3 sm:px-0 xl:px-5 2xl:px-0">
        <PricingPlansCard featureDetails={featuresI} />
        <PricingPlansCard featureDetails={featuresII} />
        <PricingPlansCard featureDetails={featuresIII} />
      </div>
    </div>
  );
};

export default PricingPlansSection;
