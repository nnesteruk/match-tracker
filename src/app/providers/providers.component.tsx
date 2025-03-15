import { QueryClientProvider } from "@tanstack/react-query";
import { FC, PropsWithChildren, useState } from "react";
import { queryClient } from "shared/api/query-client";
import { FilterContext } from "shared/context";
import { Status } from "shared/types";

export const Providers: FC<PropsWithChildren> = ({ children }) => {
  const [statusFilter, setStatusFilter] = useState<Status>(Status.All);

  return (
    <QueryClientProvider client={queryClient}>
      <FilterContext.Provider value={{ statusFilter, setStatusFilter }}>
        {children}
      </FilterContext.Provider>
    </QueryClientProvider>
  );
};
