import { createContext } from "react";
import { Status } from "shared/types";

export const FilterContext = createContext<{
  statusFilter: Status;
  setStatusFilter: (value: Status) => void;
}>({ statusFilter: Status.All, setStatusFilter: () => {} });
