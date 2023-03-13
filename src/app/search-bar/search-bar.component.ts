import { Component, ElementRef, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamTrackerService } from '../team-tracker.service';
import { NBAService } from '../nba.service';
import { Team } from '../nba';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  @ViewChild('teamSelect')
  public select!: ElementRef;

  public teams: Observable<Team[]> = this.teamsService.getAllTeams();

  constructor(
    public teamsService: NBAService,
    private teamTracker: TeamTrackerService
  ) {}

  trackTeam() {
    const id = this.select.nativeElement.value;
    this.teamsService.getAllTeams().subscribe((teams) => {
      const selectedTeam = teams.find((team) => team.id == id);
      if (selectedTeam) {
        this.teamTracker.trackedTeams.add(selectedTeam);
      }
    });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
