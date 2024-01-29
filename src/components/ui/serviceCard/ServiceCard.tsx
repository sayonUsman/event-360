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
  services: {
    title: string;
    image: string;
    serviceNoI: string;
    serviceNoII: string;
    serviceNoIII: string;
    serviceNoIV: string;
    serviceNoV: string;
  };
};

const ServiceCard = ({ services }: TServiceCardProps) => {
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
        <img src={services.image} alt="ui/ux review check" className="h-64" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60" />
      </CardHeader>

      <CardBody className="px-4" placeholder="Service Card Body">
        <Typography
          className="text-2xl text-black font-semibold pb-6"
          placeholder="Service Title"
        >
          {services.title}
        </Typography>

        <ul className="flex flex-col gap-4 text-black">
          <li className="flex items-center gap-4">
            <span className="rounded-full border bg-white p-1">
              <CheckIcon />
            </span>

            <Typography className="font-normal" placeholder="Service No 1">
              {services.serviceNoI}
            </Typography>
          </li>

          <li className="flex items-center gap-4">
            <span className="rounded-full border bg-white p-1">
              <CheckIcon />
            </span>

            <Typography className="font-normal" placeholder="Service No 2">
              {services.serviceNoII}
            </Typography>
          </li>

          <li className="flex items-center gap-4">
            <span className="rounded-full border bg-white p-1">
              <CheckIcon />
            </span>

            <Typography className="font-normal" placeholder="Service No 3">
              {services.serviceNoIII}
            </Typography>
          </li>

          <li className="flex items-center gap-4">
            <span className="rounded-full border bg-white p-1">
              <CheckIcon />
            </span>

            <Typography className="font-normal" placeholder="Service No 4">
              {services.serviceNoIV}
            </Typography>
          </li>

          <li className="flex items-center gap-4">
            <span className="rounded-full border bg-white p-1">
              <CheckIcon />
            </span>

            <Typography className="font-normal" placeholder="Service No 5">
              {services.serviceNoV}
            </Typography>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
};

export default ServiceCard;
