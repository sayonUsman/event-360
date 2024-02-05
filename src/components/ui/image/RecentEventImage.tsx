import { cn } from "../../../lib/utils";
type TRecentEventImageProps = {
  imgUrl: string;
  className?: string;
};

const RecentEventImage = ({ imgUrl, className }: TRecentEventImageProps) => {
  return (
    <img
      src={imgUrl}
      alt="Recent Event Photo"
      className={cn(
        "w-full h-full 2xl:w-[12rem] 2xl:h-[12rem] object-cover object-center rounded-lg 2xl:rounded-[1.65rem]",
        className
      )}
    />
  );
};

export default RecentEventImage;
