import { useQuery } from "@tanstack/react-query";
import { matchesApi } from "entities/match/api";
import { MatchItem } from "../match-item/match-item.component";

export const MatchRow = () => {
  const { data: matchList, isLoading } = useQuery({
    ...matchesApi.getQueryOptionsMatches(),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      {matchList?.map((item, index) => <MatchItem match={item} key={index} />)}
    </div>
  );
};
