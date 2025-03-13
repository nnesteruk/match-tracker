import { ComponentPropsWithoutRef } from "react";

export const Button = (props: ComponentPropsWithoutRef<"button">) => {
  return (
    <button
      className="bg-red flex items-center rounded-[4px] p-4 gap-2  
    text-[18px] cursor-pointer active:bg-red-medium  transition-colors duration-300 "
      {...props}
    >
      Обновить
    </button>
  );
};
