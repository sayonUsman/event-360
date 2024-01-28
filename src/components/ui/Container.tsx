import { ReactNode } from "react";
import { cn } from "../../lib/utils";

type TContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: TContainerProps) => {
  return (
    <div className={cn("w-full max-w-[1440px] h-full mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
