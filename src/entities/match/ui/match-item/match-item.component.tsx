import { MatchItemProps } from "entities/match/model/match.types";
import { FC, useState } from "react";
import Logo from "shared/assets/icons/illustrations_role.svg";
import Arrow from "shared/assets/icons/arrow drop-list down.svg";
import { MatchStatus } from "shared/ui/match-status";

import { MatchTeam } from "../team/team.component";

export const MatchItem: FC<MatchItemProps> = ({ match }) => {
  const [arrowActive, setArrowActive] = useState(false);
  const status: Record<typeof match.status, string> = {
    Scheduled: "bg-orange px-2",
    Finished: "bg-red w-[92px] text-center px-0.5 ",
    Ongoing: "bg-green w-[92px] text-center px-0.5 ",
  };

  const statusText: Record<typeof match.status, string> = {
    Scheduled: "Match preparing",
    Finished: "Finished ",
    Ongoing: "Live",
  };

  const arrowClick = () => {
    setArrowActive(!arrowActive);
  };

  return (
    <li className=" list-none rounded-sm bg-black-light">
      <div className="flex justify-between p-4 ">
        <div className="flex gap-2.5 items-center">
          <img src={Logo} alt="logo command 1" />
          <h2>{match?.awayTeam?.name}</h2>
        </div>
        <div className="flex flex-col items-center">
          <p>
            {match?.awayScore} : {match?.homeScore}
          </p>
          <MatchStatus
            text={statusText[match.status]}
            className={`${status[match.status]} py-1.5 rounded-sm `}
          />
        </div>
        <div className="flex gap-2.5 items-center">
          <h2>{match?.homeTeam?.name}</h2>
          <img src={Logo} alt="logo command 2" />
          <button onClick={() => arrowClick()} className="cursor-pointer">
            <img
              src={Arrow}
              alt="arrow"
              className={`${arrowActive && "active:transform rotate-180"} fill-current text`}
            />
          </button>
        </div>
      </div>
      <div
        className={`flex gap-8 text-sm transition-all duration-300 ease-in-out ${
          arrowActive
            ? "max-h-[150px] opacity-100 p-1.5 "
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <MatchTeam team={match?.awayTeam} key={match?.awayTeam?.name} />
        <MatchTeam team={match?.homeTeam} key={match?.homeTeam?.name} />
      </div>
    </li>
  );
};
