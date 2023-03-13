import { Injectable } from '@angular/core';
import { Team } from './nba';

@Injectable()
export class TeamService {
  public team?: Team;
  constructor() {}
}
