import { useState } from "react";
import ArrowIcon from "shared/assets/icons/Vector.svg";

const options: { value: string; label: string }[] = [
  { value: "all", label: "Все статусы" },
  { value: "Ongoing", label: "Live" },
  { value: "Finished", label: "Finished" },
  { value: "Scheduled", label: "Match preparing" },
];
export const Menu = () => {
  const [selected, setSelected] = useState(options[0]); // Текущий выбор
  const [open, setOpen] = useState(false); // Состояние меню

  return (
    <div className="relative w-50">
      {/* Выпадающий заголовок */}
      <button
        className="w-full bg-black-light text-gray  px-5 py-2.5 rounded-xs flex items-center justify-between focus:text-white"
        onClick={() => setOpen(!open)}
      >
        {selected.label}
        <img
          src={ArrowIcon}
          alt="arrow icon"
          className={` transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <ul className="absolute w-full bg-black-light  rounded-md mt-1 z-10 overflow-hidden">
          {options.map((option) => (
            <li
              key={option.value}
              className={`px-4 py-2 cursor-pointer transition-all 
                hover:text-white hover:bg-gray-700`}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
