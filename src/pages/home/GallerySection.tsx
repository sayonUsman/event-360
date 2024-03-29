import { Typography } from "@material-tailwind/react";
import GalleryImage from "../../components/ui/image/GalleryImage";

const GallerySection = () => {
  const bulletPoints = [
    "Event Highlight",
    "Professional Photography",
    "Organized Layout",
    "Audience Engagement",
    "Diversity",
  ];

  function CheckIcon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="h-4 w-4 text-[#6FCF97] bg-black bg-opacity-10 rounded-full"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    );
  }

  return (
    <div className="flex flex-col 2xl:flex-row justify-between items-center w-full max-w-7xl h-full 2xl:max-h-[41rem] mx-auto my-24 lg:my-28 2xl:my-32 px-5 2xl:px-0">
      <div className="max-w-[40rem]">
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center 2xl:text-left">
          Gallery
        </h1>

        <p className="py-9 2xl:pr-28 text-justify">
          Ut consectetur aspernatur, impedit magni quis id iusto assumenda quos
          laudantium pariatur accusamus itaque laborum incidunt debitis iste!
          Odio, voluptatem? Dolor soluta facilis minus maiores, ducimus facere
          perferendis incidunt modi optio veniam consequatur nobis placeat autem
          aliquam perspiciatis omnis id quaerat cumque sed explicabo ea commodi!
        </p>

        <ul className="flex flex-col gap-2">
          {bulletPoints.map((feature, index) => (
            <li key={index} className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>

              <Typography
                placeholder={`Feature ${index + 1}`}
                className="text-lg"
              >
                {feature}
              </Typography>
            </li>
          ))}
        </ul>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 2xl:max-h-[41rem] pt-16 2xl:pt-0">
        <div className="flex flex-col justify-center gap-4">
          <div className="flex justify-end h-full md:h-[12rem]">
            <GalleryImage
              imgUrl="https://images.unsplash.com/photo-1574154808186-c3b1303a4b4c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="md:max-w-[8rem]"
            />
          </div>

          <div className="flex justify-end h-full md:h-[16rem]">
            <GalleryImage
              imgUrl="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="md:max-w-[10.75rem]"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4 md:pt-8">
          <GalleryImage
            imgUrl="https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="md:h-[13.25rem]"
          />

          <GalleryImage
            imgUrl="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="md:h-[13.25rem]"
          />

          <GalleryImage
            imgUrl="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="md:h-[10rem]"
          />
        </div>

        <div className="flex flex-col justify-center gap-4">
          <GalleryImage
            imgUrl="https://images.unsplash.com/photo-1575029644286-efb9039cac46?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="md:h-[10.75rem]"
          />

          <GalleryImage
            imgUrl="https://images.unsplash.com/photo-1582192730841-2a682d7375f9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="md:h-[10.75rem]"
          />

          <GalleryImage
            imgUrl="https://images.unsplash.com/photo-1543283864-0eba98564bd4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="md:h-[12rem]"
          />
        </div>

        <div className="flex flex-col justify-center gap-4">
          <GalleryImage
            imgUrl="https://images.unsplash.com/photo-1578736641330-3155e606cd40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="md:max-w-[10rem] md:h-[16rem]"
          />

          <GalleryImage
            imgUrl="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="md:max-w-[8rem] md:h-[10rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
