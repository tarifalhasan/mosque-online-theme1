import React from "react";

interface containerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<containerProps> = ({ children, className }) => {
  return (
    <div
      className={`max-w-[1203.18px] max-[280px]:px-2 md:px-5 lg:px-5 xl:px-10  px-7 mx-auto ${className} `}
    >
      {children}
    </div>
  );
};

export default Container;
