import { useQuery } from "@tanstack/react-query";
import { matchesApi } from "entities/match/api";
import { queryClient } from "shared/api/query-client";
import refresh from "shared/assets/icons/refr.svg";
import logoError from "shared/assets/icons/error.svg";
import { Button } from "shared/ui/button";
import { Menu } from "widgets/menu";
import "./header.styles.css";

export const Header = () => {
  const { isError, isFetching } = useQuery({
    ...matchesApi.getQueryOptionsMatches(),
  });

  const handleRefresh = () => {
    queryClient.invalidateQueries({ queryKey: [matchesApi.baseKey] });
  };

  return (
    <header className="flex justify-between ">
      <div className="flex gap-4 items-center">
        <h1 className="font-[Tactic] text-[32px]">Match Tracker</h1>
        <Menu />
      </div>
      <div className="flex items-center gap-3">
        {isError && (
          <div className="flex gap-2.5 p-4 rounded-sm bg-black-light">
            <img src={logoError} alt="logo error" />
            <span>Ошибка: не удалось загрузить данные</span>
          </div>
        )}
        <Button
          onClick={handleRefresh}
          className={`bg-red flex items-center rounded-sm p-4 gap-2 text-[18px] cursor-pointer
             ${isFetching ? "bg-red-dark text-white-gray" : ""}
             active:bg-red-medium transition-colors duration-300`}
        >
          <span>Обновить</span>
          <img
            src={refresh}
            alt="refresh"
            className={`w-[26px] h-auto ${isFetching ? "animate-spin" : ""}`}
          />
        </Button>
      </div>
    </header>
  );
};
