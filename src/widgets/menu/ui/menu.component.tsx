import { useState } from "react";
import ArrowIcon from "shared/assets/icons/Vector.svg";
import { useFilter } from "shared/hooks";

const options: { value: string; label: string }[] = [
  { value: "all", label: "Все статусы" },
  { value: "Ongoing", label: "Live" },
  { value: "Finished", label: "Finished" },
  { value: "Scheduled", label: "Match preparing" },
];
export const Menu = () => {
  const [open, setOpen] = useState(false);
  const { status, setStatus } = useFilter();

  const selected = options.find((item) => item.value === status) || options[0];

  return (
    <div className="relative w-50">
      <button
        className="w-full bg-black-light text-gray  px-5 py-2.5 
        rounded-xs flex items-center justify-between focus:text-white"
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
              className={`px-4 py-2 cursor-pointer transition-all text-gray 
                hover:text-white `}
              onClick={() => {
                setStatus(option.value);
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
