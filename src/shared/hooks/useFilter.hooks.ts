import { useContext } from "react";
import { FilterContext } from "shared/context";

export const useFilter = () => {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }

  return context;
};
