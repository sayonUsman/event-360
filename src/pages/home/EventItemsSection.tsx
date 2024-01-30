import EventItemCard from "../../components/ui/EventItemCard";

const EventItemsSection = () => {
  return (
    <div className="flex justify-center items-center w-full max-w-7xl mx-auto px-3 sm:px-12 md:px-16 lg:px-5 2xl:px-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5 w-full">
        <EventItemCard
          imgUrl="https://images.unsplash.com/photo-1619386113777-f92dd987bfb0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          itemNo={1}
          className="lg:max-h-[33rem]"
        />

        <div className="lg:max-h-[33rem] grid lg:grid-rows-2 gap-5">
          <EventItemCard
            imgUrl="https://images.unsplash.com/photo-1606825593210-28862b3d2cda?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            itemNo={2}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            <EventItemCard
              imgUrl="https://images.unsplash.com/photo-1563845104282-efeedd2b75d8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              itemNo={3}
              className="lg:max-h-[16rem]"
            />

            <EventItemCard
              imgUrl="https://images.unsplash.com/photo-1622663235911-dc2ee781f4f1?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              itemNo={4}
              className="lg:max-h-[16rem]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 lg:col-span-2 xl:col-span-1 xl:max-h-[33rem] gap-5">
          <EventItemCard
            imgUrl="https://images.unsplash.com/photo-1517343155053-3bc076e687b9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            itemNo={5}
            className="lg:max-h-[21rem] xl:max-h-[16rem] xl:col-span-2"
          />

          <EventItemCard
            imgUrl="https://images.unsplash.com/photo-1507245921392-e902673ca772?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            itemNo={6}
            className="lg:max-h-[21rem] xl:max-h-[16rem] xl:col-span-2"
          />
        </div>
      </div>
    </div>
  );
};

export default EventItemsSection;
