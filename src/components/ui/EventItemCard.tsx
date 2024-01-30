import { cn } from "../../lib/utils";

type TEventItemCard = {
  imgUrl: string;
  itemNo: number;
  className?: string;
};

const EventItemCard = ({ imgUrl, itemNo, className }: TEventItemCard) => {
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
        className="max-h-full w-full rounded-md"
      />

      <p className="text-lg pt-1 pb-2 lg:pb-0">{`Event Item - ${itemNo}`}</p>
    </div>
  );
};

export default EventItemCard;
