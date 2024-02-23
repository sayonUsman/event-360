import UpcomingEventCard from "../../components/ui/UpcomingEventCard";

const UpcomingEventsSection = () => {
  return (
    <div className="flex justify-center items-center w-full max-w-7xl mx-auto px-3 sm:px-12 md:px-16 lg:px-5 2xl:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
        <UpcomingEventCard
          imgUrl="https://img.freepik.com/free-photo/decorated-wedding-arch-with-greenery-white-eustomas-gardens-outdoors_8353-10868.jpg?t=st=1708690923~exp=1708694523~hmac=a4282e06f3168393f0926471674ad2fdb08da9617c5cc3b5f6109b83a02223bc&w=740"
          eventLocation="San Diego, CA"
          className="lg:max-h-[33rem]"
        />

        <div className="lg:max-h-[33rem] grid lg:grid-rows-2 gap-5">
          <UpcomingEventCard
            imgUrl=" https://img.freepik.com/free-photo/antique-gold-flower-light-candle_1232-4150.jpg?t=st=1708690436~exp=1708694036~hmac=147a88f2848f9c8cc319ddf9f58bfac2a5265bec2a5f29ead448ab59e0298416&w=1380"
            eventLocation="Minneapolis, MN"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <UpcomingEventCard
              imgUrl="https://img.freepik.com/free-photo/alley-leading-wedding-arch_1304-4051.jpg?t=st=1708690591~exp=1708694191~hmac=25f537f63f8c3ad4353186aae3d58404818eede1ee552ddf154c6994ccabb6be&w=740"
              eventLocation="Yucca Valley, CA"
              className="lg:max-h-[16rem]"
            />

            <UpcomingEventCard
              imgUrl="https://img.freepik.com/free-photo/beautiful-archway-decorated-with-floral-composition-outdoors_8353-10972.jpg?t=st=1708690784~exp=1708694384~hmac=bf01c3741a39171bca0a59e169b66291e1a61cae4785ff00282593dfd2ec1e10&w=740"
              eventLocation="Las Vegas, NV"
              className="lg:max-h-[16rem]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2 xl:col-span-1 xl:max-h-[33rem] gap-5">
          <UpcomingEventCard
            imgUrl="https://img.freepik.com/free-photo/low-angle-shot-christmas-tree-emirates-palace-abu-dhabi-uae_181624-26887.jpg?t=st=1708690317~exp=1708693917~hmac=d1e5c46773e6f52b7c581d9a5c3a3c64357346a977d2d6103b6bb5d1677ac863&w=1380"
            eventLocation="Wilton Manors, FL"
            className="lg:max-h-[21rem] xl:max-h-[16rem] xl:col-span-2"
          />

          <UpcomingEventCard
            imgUrl="https://img.freepik.com/free-photo/bridal-bouquet-with-candle-wedding-stuff_114579-1124.jpg?t=st=1708690883~exp=1708694483~hmac=19b8b9a819f4056cfbc7668ad035a87286439142ea6560fc61d57942fdbd580d&w=1380"
            eventLocation="Brandywine, MD"
            className="lg:max-h-[21rem] xl:max-h-[16rem] xl:col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEventsSection;
