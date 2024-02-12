import preloaderStyle from "../preloader/Preloader.module.css";

const Preloader = () => {
  return (
    <div
      className={`h-12 w-12 border-[6px] border-amber-500 border-r-white rounded-full ${preloaderStyle.loader}`}
    ></div>
  );
};

export default Preloader;
