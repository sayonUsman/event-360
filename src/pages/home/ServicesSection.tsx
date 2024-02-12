import { useGetAllService } from "../../api/user/services/services.hook";
import Preloader from "../../components/ui/preloader/Preloader";
import ServiceCard from "../../components/ui/serviceCard/ServiceCard";
import ServiceCardII from "../../components/ui/serviceCard/ServiceCardII";

type TServiceDetails = {
  serviceName: string;
  imageUrl: string;
  services: string[];
};

type TServiceDetailsII = {
  serviceName: string;
  shortDescription: string;
  services: string[];
};

const ServicesSection = () => {
  const { isLoading, data, isError } = useGetAllService();

  const serviceDetails = data?.data.filter(
    (details: TServiceDetails) => details.imageUrl !== undefined
  );

  const serviceDetailsII = data?.data.filter(
    (details: TServiceDetailsII) => details.shortDescription !== undefined
  );

  return (
    <div className="flex justify-center items-center w-full max-w-7xl mx-auto">
      {isLoading && <Preloader />}

      {data && (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 px-3 sm:px-0 xl:px-5 2xl:px-0">
          <ServiceCard serviceDetails={serviceDetails[0]} />
          <ServiceCardII serviceDetails={serviceDetailsII[0]} />
          <ServiceCard serviceDetails={serviceDetails[1]} />
        </div>
      )}

      {isError && (
        <p className="text-deep-orange-700">Something Happened Wrong Here!</p>
      )}
    </div>
  );
};

export default ServicesSection;
