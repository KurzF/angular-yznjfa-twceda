import { Component, Input, OnInit } from '@angular/core';
import { TeamTrackerService } from '../team-tracker.service';
import { TeamService } from '../team.service';
import { NBAService } from '../nba.service';
import { Observable } from 'rxjs';
import { Game, Team } from '../nba';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css'],
  providers: [{ provide: TeamService }],
})
export class TeamCardComponent implements OnInit {
  @Input()
  public team!: Team;

  public recentGames?: Observable<Game[]>;
  public average_conceded: number = 0;
  public average_score: number = 0;
  constructor(
    private teamTracker: TeamTrackerService,
    public nbaService: NBAService,
    public teamService: TeamService
  ) {}

  ngOnInit(): void {
    this.recentGames = this.nbaService.getRecentGames(this.team.id);
    this.recentGames.subscribe((games) => {
      let point = 0;
      let point_conceded = 0;
      for (const game of games) {
        if (game.home_team.id === this.team.id) {
          point += game.home_team_score;
          point_conceded += game.visitor_team_score;
        } else {
          point += game.visitor_team_score;
          point_conceded += game.home_team_score;
        }
        this.average_score = point / games.length;
        this.average_conceded = point_conceded / games.length;
      }
    });
    this.teamService.team = this.team;
  }

  remove() {
    this.teamTracker.trackedTeams.delete(this.team);
  }
}
