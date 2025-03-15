import { MatchItem } from "../match-item/match-item.component";
import { useQuery } from "@tanstack/react-query";
import { matchesApi } from "entities/match/api";
import { useFilter } from "shared/hooks";
import { Skeleton } from "shared/ui/skeleton";

export const MatchRow = () => {
  const { data: matchList, isLoading } = useQuery({
    ...matchesApi.getQueryOptionsMatches(),
  });

  const { statusFilter } = useFilter();

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      {matchList
        ?.filter((item) =>
          statusFilter === "All" ? item : item.status === statusFilter,
        )
        .map((item, index) => <MatchItem match={item} key={index} />)}
    </div>
  );
};
