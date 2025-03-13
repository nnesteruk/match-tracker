import { createContext } from "react";

export const FilterContext = createContext<{
  status: string;
  setStatus: (value: string) => void;
}>({ status: "all", setStatus: () => {} });
