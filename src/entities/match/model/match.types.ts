export type Players = {
  kills: number;
  username: string;
};

export type Team = {
  name: string;
  place: number;
  points: number;
  total_kills: number;
  homeScore: number;
  players: Players[];
};

export type MatchList = {
  awayScore: number;
  homeScore: number;
  status: "Scheduled" | "Ongoing" | "Finished";
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
};

export type MatchItemProps = {
  match: MatchList;
};
