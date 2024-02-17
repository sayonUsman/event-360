import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

type TTestimonialCardProps = {
  testimonial: {
    clientImgUrl: string;
    clientName: string;
    clientJobTitle: string;
    clientCompany: string;
    clientComment: string;
  };
};

const TestimonialCard = ({ testimonial }: TTestimonialCardProps) => {
  return (
    <div className="flex justify-center">
      <Card
        placeholder="Testimonial Card"
        color="transparent"
        shadow={false}
        className="w-full max-w-[32rem] h-full max-h-[19.5rem] bg-[#F8F9FF] hover:bg-gradient-to-br from-[#FEC600] to-[#CB9201] p-10 rounded-[2rem]"
      >
        <CardHeader
          placeholder="Card Header"
          color="transparent"
          floated={false}
          shadow={false}
          className="flex items-center gap-4 mx-0 my-0 pt-0 pb-5"
        >
          <Avatar
            placeholder="Client's Image"
            size="lg"
            variant="circular"
            src={testimonial.clientImgUrl}
            alt="tania andrew"
          />

          <div className="flex w-full flex-col gap-0.5">
            <Typography placeholder="Client Name" variant="h5" color="black">
              {testimonial.clientName}
            </Typography>

            <Typography placeholder="Job Title and Company Name" color="black">
              {`${testimonial.clientJobTitle} @ ${testimonial.clientCompany}`}
            </Typography>
          </div>
        </CardHeader>

        <CardBody placeholder="Card Body" className="p-0">
          <Typography
            placeholder="Comment"
            color="black"
            className="text-justify"
          >
            {testimonial.clientComment}
          </Typography>
        </CardBody>
      </Card>
    </div>
  );
};

export default TestimonialCard;
