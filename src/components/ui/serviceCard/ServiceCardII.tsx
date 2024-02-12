import {
  Card,
  CardBody,
  Typography,
  CardFooter,
  Button,
} from "@material-tailwind/react";

function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3 text-[#6FCF97]"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

type TServiceCardIIProps = {
  serviceDetails: {
    serviceName: string;
    shortDescription: string;
    services: string[];
  };
};

const ServiceCardII = ({ serviceDetails }: TServiceCardIIProps) => {
  return (
    <Card
      className="w-full max-w-[26rem] max-h-[37rem] bg-gradient-to-b from-black/5 to-white rounded-md shadow-md p-8"
      placeholder="Service Card"
    >
      <Typography
        placeholder="Service Title"
        className="text-2xl text-black font-semibold"
      >
        {serviceDetails.serviceName}
      </Typography>

      <Typography placeholder="Intro" className="text-[#566B84] pt-3">
        {serviceDetails.shortDescription}
      </Typography>

      <CardBody placeholder="Service Card Body" className="p-0 py-10">
        <ul className="flex flex-col gap-4 text-black">
          {serviceDetails.services.map((service, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="rounded-full border bg-white p-1">
                <CheckIcon />
              </span>

              <Typography
                className="font-normal"
                placeholder={`Service No ${index + 1}`}
              >
                {service}
              </Typography>
            </li>
          ))}
        </ul>
      </CardBody>

      <CardFooter
        placeholder="Service Card Footer"
        className="mt-12 xl:mt-5 2xl:mt-12 px-0"
      >
        <Button
          placeholder="Button"
          size="lg"
          color="white"
          className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-gradient-to-r from-[#FEC600] to-[#CB9201] text-lg font-bold rounded-none"
          ripple={false}
          fullWidth={true}
        >
          Check it out
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCardII;
