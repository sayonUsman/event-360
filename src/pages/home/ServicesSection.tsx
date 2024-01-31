import ServiceCard from "../../components/ui/serviceCard/ServiceCard";
import ServiceCardII from "../../components/ui/serviceCard/ServiceCardII";

const ServicesSection = () => {
  const servicesNoI = {
    title: "Corporate event",
    image:
      "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      "One day pass access all lecture",
      "Lunch and Snack",
      "Comfortable Zone",
      "Meet Event Speaker",
      "Free Transportation",
    ],
  };

  const servicesNoII = [
    "Wedding Planner",
    "Event Coordinator",
    "Catering Staff",
    "Decorations and Setup Crew",
    "Expert Photographer/Videographer",
  ];

  const servicesNoIII = {
    title: "Organization event",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    services: [
      "One day pass access all lecture",
      "Lunch and Snack",
      "Comfortable Zone",
      "Meet Event Speaker",
      "Free Transportation",
    ],
  };

  return (
    <div className="flex justify-center items-center w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 px-3 sm:px-0 xl:px-5 2xl:px-0">
        <ServiceCard serviceDetails={servicesNoI} />
        <ServiceCardII services={servicesNoII} />
        <ServiceCard serviceDetails={servicesNoIII} />
      </div>
    </div>
  );
};

export default ServicesSection;
