import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useState } from "react";

type TPricingPlansCard = {
  featureDetails: {
    type: string;
    intro: string;
    price: string;
    features: string[];
  };
};

const PricingPlansCard = ({ featureDetails }: TPricingPlansCard) => {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`h-3 w-3 ${isMouseEnter ? "text-black" : "text-[#29C5F6]"}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }

  const handleMouseEnterEvent = () => {
    setIsMouseEnter(true);
  };

  const handleMouseLeaveEvent = () => {
    setIsMouseEnter(false);
  };

  return (
    <Card
      placeholder="Pricing Plans Card"
      className={`w-[21rem] max-h-[34rem] border rounded-md shadow-none overflow-hidden ${
        isMouseEnter ? "bg-[#EA9B00]" : "bg-white"
      }`}
      onMouseEnter={handleMouseEnterEvent}
      onMouseLeave={handleMouseLeaveEvent}
    >
      <div className="px-9">
        <Typography
          placeholder="Features' Type"
          color="black"
          className="text-lg font-semibold pt-9"
        >
          {featureDetails.type}
        </Typography>

        <Typography
          placeholder="Intro"
          color="black"
          className={`text-sm pt-1 ${
            isMouseEnter ? "text-black" : "text-[#656565]"
          }`}
        >
          {featureDetails.intro}
        </Typography>

        <Typography
          placeholder="Price"
          variant="h1"
          color="black"
          className="my-5 flex justify-start gap-1 text-5xl font-bold"
        >
          <span className="mt-2 text-4xl">$</span>
          {featureDetails.price}
        </Typography>

        <Button
          placeholder="Get Package Button"
          color="white"
          ripple={false}
          className={`active:scale-95 rounded-none w-full h-[3rem] text-base text-black font-bold ${
            isMouseEnter
              ? "bg-white"
              : "bg-gradient-to-r from-[#FEC600] to-[#CB9201]"
          }`}
        >
          Get This Package
        </Button>
      </div>

      <CardBody
        placeholder="Pricing Plans Card Body"
        className="px-9 pt-5 pb-0"
      >
        <ul className="flex flex-col gap-2">
          {featureDetails.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>

              <Typography
                placeholder={`Feature ${index + 1}`}
                className={`text-[.75rem] font-semibold ${
                  isMouseEnter ? "text-black" : "text-[#656565]"
                }`}
              >
                {feature}
              </Typography>
            </li>
          ))}
        </ul>
      </CardBody>

      <CardFooter placeholder="Pricing Plans Card Footer" className="mt-12 p-0">
        <Button
          placeholder="All Features Button"
          color="white"
          ripple={false}
          fullWidth={true}
          className={`active:scale-95 rounded-none h-[4rem] text-[.88rem] text-black font-semibold ${
            isMouseEnter
              ? "bg-gradient-to-r from-[#FEC600] to-[#CB9201]"
              : "bg-[#F2F2F2]"
          }`}
        >
          See All Features
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingPlansCard;
