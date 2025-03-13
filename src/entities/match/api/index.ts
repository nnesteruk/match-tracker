import { queryOptions } from "@tanstack/react-query";
import { apiService } from "shared/api/api-service";
import { MatchList } from "shared/types";

export const matchesApi = {
  baseKey: "matches",

  getQueryOptionsMatches: () =>
    queryOptions({
      queryKey: [matchesApi.baseKey],
      queryFn: (meta) =>
        apiService<{ data: { matches: MatchList[] } }>("/fronttemp", {
          signal: meta.signal,
        }),
      select: (data) => data?.data?.matches,
    }),
};
