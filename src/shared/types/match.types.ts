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

export const enum Status {
  Scheduled = "Scheduled",
  Ongoing = "Ongoing",
  Finished = "Finished",
  All = "All",
}

export type MatchList = {
  awayScore: number;
  homeScore: number;
  status: Status;
  time: string;
  title: string;
  homeTeam: Team;
  awayTeam: Team;
};

export type MatchStatusProps = {
  text: string;
  className: string;
};
