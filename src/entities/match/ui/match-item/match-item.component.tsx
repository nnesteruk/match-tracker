import { MatchItemProps } from "entities/match/model/match.types";
import { FC, useState } from "react";
import Logo from "shared/assets/icons/illustrations_role.svg";
import Arrow from "shared/assets/icons/arrow drop-list down.svg";
import { MatchStatus } from "shared/ui/match-status";
import PlayerIcon from "shared/assets/icons/user-frames.svg";

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
              className={`${arrowActive && "active:transform rotate-180"}`}
            />
          </button>
        </div>
      </div>
      {arrowActive && (
        <div className="flex gap-8 p-3">
          <section className="flex flex-col gap-2">
            <div>
              {match.awayTeam.players.map((item) => (
                <li>
                  <img src={PlayerIcon}></img>
                  <p>{item.username}</p>
                  <p>Убийств: {item.kills}</p>
                </li>
              ))}
            </div>
            <div className="flex justify-between ">
              <p>Points: {match.awayTeam.points}</p>
              <p>Место: {match.awayTeam.place}</p>
              <p>Всего убийств: {match.awayTeam.total_kills}</p>
            </div>
          </section>
          <section>
            <div>
              <img src={PlayerIcon}></img>
              <p>name</p>
              <p>Убийств: {"col"}</p>
            </div>
            <div>
              <p>Points: {match.homeTeam.points}</p>
              <p>Место: {match.homeTeam.place}</p>
              <p>Всего убийств: {match.homeTeam.total_kills}</p>
            </div>
          </section>
        </div>
      )}
    </li>
  );
};
