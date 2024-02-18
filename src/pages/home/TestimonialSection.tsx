import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import TestimonialCard from "../../components/ui/TestimonialCard";

const TestimonialSection = () => {
  const testimonial = {
    clientImgUrl:
      "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80",
    clientName: "Jhon Andrew",
    clientJobTitle: "Frontend Lead",
    clientCompany: "Google",
    clientComment:
      "I found solution to all my design needs from Creative Team. I use them as a freelancer in my hobby projects for fun! And its really affordable, very humble guys !!!",
  };

  return (
    <div className="w-full max-w-[23rem] sm:max-w-lg lg:max-w-[60rem] xl:max-w-[71.25rem] 2xl:max-w-7xl h-full max-h-[29.5rem] mx-auto mb-24 lg:mb-28 2xl:mb-32 px-3 sm:px-0 lg:px-3 2xl:px-0">
      <h1 className="text-3xl lg:text-5xl font-extrabold text-center 2xl:text-left mb-16">
        What Our Client Said About Us
      </h1>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop={true}
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          720: {
            slidesPerView: 1,
          },
          960: {
            slidesPerView: 2,
          },
          1320: {
            slidesPerView: 3,
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <SwiperSlide key={i}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TestimonialSection;
