export interface Page<T> {
  data: T[];
  meta: {
    total_page: number;
    current_page: number;
    per_page: number;
    total_count: number;
  };
}
export interface Team {
  id: number;
  abbreviation: string;
  city: string;
  conference: string;
  division: string;
  full_name: string;
  name: string;
}

export interface Game {
  id: number;
  data: Date;
  home_team_score: number;
  visitor_team_score: number;
  season: number;
  home_team: Team;
  visitor_team: Team;
}
