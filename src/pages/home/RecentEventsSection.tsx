import { Button } from "@material-tailwind/react";
import RecentEventImage from "../../components/ui/image/RecentEventImage";

const RecentEventsSection = () => {
  return (
    <div className="flex justify-center items-center mx-auto w-full h-full 2xl:h-[31rem] px-5 2xl:px-0 mb-24 lg:mb-28 2xl:mb-32">
      <div className="flex flex-col 2xl:flex-row justify-between items-center w-full max-w-7xl 2xl:h-[25rem]">
        <div className="max-w-[40rem]">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-center 2xl:text-left">
            Recent Events
          </h1>

          <p className="pt-6 pb-12 2xl:pr-28 text-justify">
            Ut consectetur aspernatur, impedit magni quis id iusto assumenda
            quos laudantium pariatur accusamus itaque laborum incidunt debitis
            iste! Odio, voluptatem!
          </p>

          <Button
            placeholder="Learn More Button"
            color="white"
            size="lg"
            ripple={false}
            className="active:scale-95 rounded-none text-base text-black font-bold bg-gradient-to-r from-[#FEC600] to-[#CB9201]"
          >
            Learn More
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-16 2xl:pt-0 2xl:w-[40rem]">
          <div className="flex flex-col gap-4">
            <RecentEventImage imgUrl="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <RecentEventImage
              imgUrl="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="2xl:rounded-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <RecentEventImage imgUrl="https://images.unsplash.com/photo-1558008258-3256797b43f3?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />

            <RecentEventImage imgUrl="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
            <RecentEventImage
              imgUrl="https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="2xl:rounded-full"
            />

            <RecentEventImage imgUrl="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentEventsSection;
