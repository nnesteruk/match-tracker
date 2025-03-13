import { MatchStatusProps } from "shared/types";

export const MatchStatus = ({ text, className }: MatchStatusProps) => {
  return (
    <div className={className}>
      <span>{text}</span>
    </div>
  );
};
