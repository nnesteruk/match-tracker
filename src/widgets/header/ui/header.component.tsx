import { useQueryErrorResetBoundary } from "@tanstack/react-query";
import { Button } from "shared/ui/button";
import "./header.styles.css";
import { Menu } from "widgets/menu";
import refresh from "shared/assets/icons/refr.svg";
import { queryClient } from "shared/api/query-client";
import { matchesApi } from "entities/match/api";

export const Header = () => {
  const queryErrorResetBoundary = useQueryErrorResetBoundary();
  console.log(queryErrorResetBoundary);

  return (
    <header className="flex justify-between ">
      <div className="flex gap-4 items-center">
        <h1 className="font-[Tactic] text-[32px]">Match Tracker</h1>
        <Menu />
      </div>
      <Button
        onClick={() => {
          queryClient.invalidateQueries({ queryKey: [matchesApi.baseKey] });
        }}
      >
        <img
          src={refresh}
          alt="refresh"
          className="w-[26px] h-auto active:animate-spin"
        />
      </Button>
    </header>
  );
};
