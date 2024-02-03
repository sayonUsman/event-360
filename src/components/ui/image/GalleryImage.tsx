import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { useState } from "react";
import { cn } from "../../../lib/utils";

type TGalleryImage = {
  imgUrl: string;
  className?: string;
};

const GalleryImage = ({ imgUrl, className }: TGalleryImage) => {
  const [open, setOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);
  const handleIsFavorite = () => setIsFavorite((cur) => !cur);

  return (
    <>
      <Tooltip content="Click On" className="rounded-none">
        <img
          alt="Gallery Image"
          className={cn(
            "object-cover object-center rounded-md hover:opacity-80",
            className
          )}
          src={imgUrl}
          onClick={handleOpen}
        />
      </Tooltip>

      <Dialog
        size="xl"
        open={open}
        handler={handleOpen}
        placeholder="Modal"
        className="bg-black bg-opacity-40"
      >
        <DialogHeader placeholder="Modal Header" className="justify-between">
          <div className="flex items-center">
            <h1 className="text-[24px] sm:text-[32px] text-white font-bold text-nowrap">
              Event <span className="text-[#FFD600]">360</span>
            </h1>
          </div>

          <div className="flex items-center">
            <IconButton
              variant="text"
              size="sm"
              color="white"
              onClick={handleIsFavorite}
              placeholder="Favorite Icon Button"
              className={`${
                isFavorite ? "text-deep-orange-700" : "text-[#FFD600]"
              } rounded-none focus:border-none`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
              </svg>
            </IconButton>
          </div>
        </DialogHeader>

        <DialogBody placeholder="Modal Body">
          <img
            alt="Gallery Image"
            className="max-h-[45rem] w-full rounded-lg object-cover object-center"
            src={imgUrl}
          />
        </DialogBody>

        <DialogFooter placeholder="Modal Footer" className="justify-end">
          <Button
            placeholder="Button"
            size="md"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100 bg-gradient-to-r from-[#FEC600] to-[#CB9201] text-sm font-bold rounded-none"
            ripple={false}
          >
            Share
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default GalleryImage;
