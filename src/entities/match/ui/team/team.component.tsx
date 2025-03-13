import { MatchPlayer } from "../player/player.component";
import { Team } from "shared/types";

export const MatchTeam = ({ team }: { team: Team }) => {
  return (
    <section className="flex flex-col gap-2 w-full">
      <div className="flex gap-1 ">
        {team?.players.map((item) => <MatchPlayer player={item} />)}
      </div>
      <div className="flex  gap-2 text-white-dark bg-black-medium-light text-sm px-6 py-3.5">
        <p className="flex-1 text-center">
          Points:
          <span className="text-white text-[16px] ml-2">+{team?.points}</span>
        </p>
        <p className="flex-1 text-center">
          Место:{" "}
          <span className="text-white text-[16px] ml-2">{team?.place}</span>
        </p>
        <p className="flex-1 text-center">
          Всего убийств:
          <span className="text-white text-[16px] ml-2">
            +{team?.total_kills}
          </span>
        </p>
      </div>
    </section>
  );
};
