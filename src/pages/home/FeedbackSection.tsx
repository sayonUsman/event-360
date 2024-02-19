import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const FeedbackSection = () => {
  return (
    <div className="w-full max-w-[90rem] h-full mx-auto mb-12 xl:mb-16">
      <h1 className="text-3xl lg:text-5xl font-extrabold text-center mb-12 md:mb-16 lg:mb-20">
        Feedback
      </h1>

      <div
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
        className="bg-fixed w-full h-72 lg:h-96"
      >
        <div className="bg-black bg-opacity-25 w-full h-full flex justify-center md:justify-end items-center">
          <div>
            <h3 className="text-xl lg:text-3xl text-white font-extrabold bg-gradient-to-r from-[#061C3D]/70 to-[#061C3D] px-7 py-3 md:mr-5 mb-5">
              Give Your Feedback Here...
            </h3>

            <Link to="/contact-us" className="flex justify-center mt-5">
              <Button
                placeholder="Feedback btn"
                size="lg"
                ripple={false}
                className="active:scale-95 bg-gradient-to-r from-[#061C3D]/70 to-[#061C3D] text-white text-md lg:text-lg rounded-md"
              >
                Feedback
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackSection;
