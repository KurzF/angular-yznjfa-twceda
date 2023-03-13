import { Injectable } from '@angular/core';
import { Team } from './nba';

@Injectable({
  providedIn: 'root',
})
export class TeamTrackerService {
  public trackedTeams = new Set<Team>();
  constructor() {}
}
