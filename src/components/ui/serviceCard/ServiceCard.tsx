import {
  Card,
  CardHeader,
  CardBody,
  Typography,
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

type TServiceCardProps = {
  serviceDetails: {
    title: string;
    image: string;
    services: string[];
  };
};

const ServiceCard = ({ serviceDetails }: TServiceCardProps) => {
  return (
    <Card
      className="w-full max-w-[26rem] max-h-[37rem] bg-gradient-to-b from-black/5 to-white rounded-md shadow-md"
      placeholder="Service Card"
    >
      <CardHeader
        floated={false}
        placeholder="Service Card Header"
        className="rounded-md"
      >
        <img
          src={serviceDetails.image}
          alt="ui/ux review check"
          className="h-64"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
      </CardHeader>

      <CardBody className="px-4" placeholder="Service Card Body">
        <Typography
          className="text-2xl text-black font-semibold pb-6"
          placeholder="Service Title"
        >
          {serviceDetails.title}
        </Typography>

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
    </Card>
  );
};

export default ServiceCard;
