import Container from "../../components/ui/Container";
import ServiceCard from "../../components/ui/serviceCard/ServiceCard";
import ServiceCardII from "../../components/ui/serviceCard/ServiceCardII";

const ServicesSection = () => {
  const servicesNoI = {
    title: "Corporate event",
    image:
      "https://images.unsplash.com/photo-1561489396-888724a1543d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    serviceNoI: "One day pass access all lecture",
    serviceNoII: "Lunch and Snack",
    serviceNoIII: "Comfortable Zone",
    serviceNoIV: "Meet Event Speaker",
    serviceNoV: "Free Transportation",
  };

  const servicesNoII = {
    title: "Organization event",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    serviceNoI: "One day pass access all lecture",
    serviceNoII: "Lunch and Snack",
    serviceNoIII: "Comfortable Zone",
    serviceNoIV: "Meet Event Speaker",
    serviceNoV: "Free Transportation",
  };

  return (
    <Container>
      <div className="flex justify-center items-center w-full h-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 px-3 sm:px-0 xl:px-5 2xl:px-0">
          <ServiceCard services={servicesNoI} />
          <ServiceCardII />
          <ServiceCard services={servicesNoII} />
        </div>
      </div>
    </Container>
  );
};

export default ServicesSection;
