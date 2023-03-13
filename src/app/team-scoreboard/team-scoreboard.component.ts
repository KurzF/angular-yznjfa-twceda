import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, Observable, throwError } from 'rxjs';
import { Game, Team } from '../nba';
import { NBAService } from '../nba.service';

@Component({
  selector: 'app-team-scoreboard',
  templateUrl: './team-scoreboard.component.html',
  styleUrls: ['./team-scoreboard.component.css'],
})
export class TeamScoreboardComponent implements OnInit {
  recentGames$?: Observable<Game[]>;
  team$?: Observable<Team | undefined>;

  constructor(private route: ActivatedRoute, private nbaService: NBAService) {}

  ngOnInit(): void {
    this.team$ = this.route.paramMap.pipe(
      mergeMap((params) => {
        let teamCode = parseInt(params.get('teamCode') ?? '', 10);
        if (Number.isNaN(teamCode)) {
          return throwError(() => 'invalid team code');
        }

        return this.nbaService
          .getAllTeams()
          .pipe(map((teams) => teams.find((team) => team.id === teamCode)));
      })
    );
    this.team$.subscribe((team) => {
      if (team === undefined) {
        return;
      }
      this.recentGames$ = this.nbaService.getRecentGames(team.id);
    });
  }
}
