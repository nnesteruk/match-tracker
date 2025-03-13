import refresh from "shared/assets/icons/refr.svg";
import "./button.styles.css";

export const Button = () => {
  return (
    <button
      className="bg-red flex items-center rounded-[4px] p-4 gap-2  
    text-[18px] cursor-pointer active:bg-red-medium  transition-colors duration-300 "
    >
      Обновить
      <img
        src={refresh}
        alt="refresh"
        className="w-[26px] h-auto active:animate-spin"
      />
    </button>
  );
};
