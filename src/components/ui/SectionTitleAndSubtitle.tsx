type TSectionTitleAndSubtitleProps = {
  title: string;
  subtitle: string;
  className?: string;
};

const SectionTitleAndSubtitle = ({
  title,
  subtitle,
  className,
}: TSectionTitleAndSubtitleProps) => {
  return (
    <div className="flex justify-center w-full max-w-7xl mx-auto">
      <div className={`${className}`}>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-center">
          {title}
        </h1>

        <p className="max-w-[75ch] text-xl text-[#566B84] text-center pt-3 px-3 lg:px-0">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default SectionTitleAndSubtitle;
