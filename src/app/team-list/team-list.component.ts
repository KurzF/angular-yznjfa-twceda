import { Component } from '@angular/core';
import { TeamTrackerService } from '../team-tracker.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css'],
})
export class TeamListComponent {
  constructor(public _teamTracker: TeamTrackerService) {}
}
