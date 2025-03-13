import { QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, useState } from "react";
import { queryClient } from "shared/api/query-client";
import { FilterContext } from "shared/context";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [status, setStatus] = useState("all");
  return (
    <QueryClientProvider client={queryClient}>
      <FilterContext.Provider value={{ status, setStatus }}>
        {children}
      </FilterContext.Provider>
    </QueryClientProvider>
  );
};
