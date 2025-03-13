type MatchStatusProps = {
  text: string;
  className: string;
};

export const MatchStatus = ({ text, className }: MatchStatusProps) => {
  return (
    <div className={className}>
      <span>{text}</span>
    </div>
  );
};
