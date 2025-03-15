import PlayerIcon from "shared/assets/icons/avatar_global.svg";
import { Players } from "shared/types";

export const MatchPlayer = ({ player }: { player: Players }) => {
  return (
    <div className="flex justify-between items-center gap-2 px-3 py-2 bg-black-medium-light rounded-sm w-full">
      <div className="flex items-center gap-1.5">
        <img src={PlayerIcon} alt="player icon" className="w-8" />
        <p className="text-[16px] truncate ">{player?.username}</p>
      </div>
      <p className="text-white-dark text-sm flex gap-2 items-center">
        Убийств:
        <span className="text-white text-base ">{player?.kills}</span>
      </p>
    </div>
  );
};
