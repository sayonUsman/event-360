import { cn } from "../../lib/utils";

type TEventItemCard = {
  imgUrl: string;
  eventLocation: string;
  className?: string;
};

const UpcomingEventCard = ({
  imgUrl,
  eventLocation,
  className,
}: TEventItemCard) => {
  return (
    <div
      className={cn(
        "bg-[#8682B0] bg-opacity-10 rounded-md shadow-md px-4 pt-4 lg:pb-9",
        className
      )}
    >
      <img
        src={imgUrl}
        alt="Event Item Image"
        className="max-h-full w-full rounded-md object-cover object-center"
      />

      <p className="text-lg pt-1 pb-2 lg:pb-0">{`${eventLocation}`}</p>
    </div>
  );
};

export default UpcomingEventCard;
