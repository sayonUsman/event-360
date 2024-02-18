import Adobe from "../../assets/companyLogo/Adobe.svg";
import amazon from "../../assets/companyLogo/amazon.svg";
import asana from "../../assets/companyLogo/asana.svg";
import Evernote from "../../assets/companyLogo/Evernote.svg";
import Google from "../../assets/companyLogo/Google.svg";
import Microsoft from "../../assets/companyLogo/Microsoft.svg";
import Paypal from "../../assets/companyLogo/PayPal.svg";
import shopify from "../../assets/companyLogo/shopify.svg";
import Spotify from "../../assets/companyLogo/Spotify.svg";
import Uber from "../../assets/companyLogo/Uber.svg";

const ClientSection = () => {
  return (
    <div className="w-full max-w-7xl h-full mx-auto mb-24 lg:mb-28 2xl:mb-32 px-5 2xl:px-0">
      <h1 className="text-3xl lg:text-5xl font-extrabold text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
        Our Valuable Client
      </h1>

      <div className="flex justify-evenly lg:flex-col lg:gap-24">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <img
            src={Spotify}
            alt="company logo"
            className="w-24 sm:w-full h-12"
          />

          <img
            src={Google}
            alt="company logo"
            className="w-24 sm:w-full h-12 my-7 sm:my-10 lg:my-0"
          />

          <img src={Uber} alt="company logo" className="w-12 sm:w-full h-12" />

          <img
            src={Microsoft}
            alt="company logo"
            className="w-24 sm:w-full h-12 my-7 sm:my-10 lg:my-0"
          />

          <img
            src={shopify}
            alt="company logo"
            className="w-24 sm:w-full h-12"
          />
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between">
          <img
            src={Evernote}
            alt="company logo"
            className="w-24 sm:w-full h-12"
          />

          <img
            src={Adobe}
            alt="company logo"
            className="w-24 sm:w-full h-12 my-7 sm:my-10 lg:my-0"
          />

          <img
            src={Paypal}
            alt="company logo"
            className="w-24 sm:w-full h-12"
          />

          <img
            src={amazon}
            alt="company logo"
            className="w-24 sm:w-full h-12 my-7 sm:my-10 lg:my-0"
          />

          <img
            src={asana}
            alt="company logo"
            className=" w-24 sm:w-full h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default ClientSection;
