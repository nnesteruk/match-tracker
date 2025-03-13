import { useQuery } from "@tanstack/react-query";
import { matchesApi } from "entities/match/api";
import { MatchItem } from "../match-item/match-item.component";
import { useFilter } from "shared/hooks";

export const MatchRow = () => {
  const { data: matchList, isLoading } = useQuery({
    ...matchesApi.getQueryOptionsMatches(),
  });

  const { status } = useFilter();
  console.log(status);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      {matchList
        ?.filter((item) => (status === "all" ? item : item.status === status))
        .map((item, index) => <MatchItem match={item} key={index} />)}
    </div>
  );
};
