import {
  Button,
  Input,
  Textarea,
  Timeline,
  TimelineItem,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  TimelineConnector,
} from "@material-tailwind/react";

import { PhoneIcon, InboxIcon, MapPinIcon } from "@heroicons/react/24/solid";

const ContactSection = () => {
  return (
    <div className="flex flex-col justify-between items-center lg:flex-row-reverse w-full lg:min-h-screen pt-12 sm:pt-24 px-3 sm:px-5">
      <div className="w-full lg:w-7/12 lg:pl-12 xl:pl-16 2xl:pl-0 pt-7 lg:pt-0">
        <p className="text-gray-500 text-xl md:text-2xl">
          For further questions or any other request, please contact us.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-between gap-5 mt-5 md:mt-7 lg:mt-12 mb-7">
          <Input label="Name" crossOrigin="anonymous" />
          <Input label="Email" crossOrigin="anonymous" />
        </div>

        <Textarea label="What can we help you with" />

        <Button
          placeholder="Learn More Button"
          color="white"
          ripple={false}
          fullWidth={true}
          className="active:scale-95 rounded-none text-base text-black font-bold bg-gradient-to-r from-[#FEC600] to-[#CB9201] mt-9"
        >
          Send Message
        </Button>
      </div>

      <div className="w-full lg:w-5/12 py-16 lg:py-0">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <PhoneIcon className="h-4 w-4" />
              </TimelineIcon>

              <Typography placeholder="Telephone" variant="h5">
                Telephone
              </Typography>
            </TimelineHeader>

            <TimelineBody className="pb-4">
              <ul className="text-gray-500">
                <li>United States: +1 208 691 4143</li>
                <li>United Kingdom: +44 7488 855300</li>
                <li>Australia: +61 489 921018</li>
              </ul>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <InboxIcon className="h-4 w-4" />
              </TimelineIcon>

              <Typography placeholder="Inbox" variant="h5">
                Inbox
              </Typography>
            </TimelineHeader>

            <TimelineBody className="pb-4">
              <ul className="text-gray-500">
                <li>hello@event-360.com</li>
                <li>help@event-360.com</li>
              </ul>
            </TimelineBody>
          </TimelineItem>

          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <MapPinIcon className="h-4 w-4" />
              </TimelineIcon>

              <Typography placeholder="Office" variant="h5">
                Office
              </Typography>
            </TimelineHeader>

            <TimelineBody>
              <ul className="text-gray-500">
                <li>United States: Yellowstone National Park, Wyoming, USA.</li>
                <li>United Kingdom: Edinburgh, Scotland, UK.</li>
                <li>Australia: Great Barrier Reef, Queensland, Australia.</li>
              </ul>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    </div>
  );
};

export default ContactSection;
