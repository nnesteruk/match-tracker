import { useEffect, useState } from "react";
import { MatchItem } from "../match-item/match-item.component";
import { MatchList } from "entities/match/model/match.types";

const apiUrl = import.meta.env.VITE_API_URL;

export const MatchRow = () => {
  const [matchList, setMatchList] = useState<MatchList[]>([]);
  // const getMatchList = async () => {
  //   const response = await fetch(`${apiUrl}/fronttemp`);
  //   const { data } = await response.json();
  //   console.log(data);
  // localStorage.setItem("matches", JSON.stringify(data.matches));
  //   setMatchList(data.matches);
  // };
  useEffect(() => {
    const match = localStorage.getItem("matches");
    // getMatchList();
    if (match) {
      setMatchList(JSON.parse(match));
    }
  }, []);
  return (
    <div className="flex flex-col gap-3 w-full">
      {matchList.map((item, index) => (
        <MatchItem match={item} key={index} />
      ))}
    </div>
  );
};
