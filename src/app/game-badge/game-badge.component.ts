import { AfterViewInit, Component, HostBinding, Input } from '@angular/core';
import { TeamService } from '../team.service';
import { Game } from '../nba';

@Component({
  selector: 'app-game-badge',
  templateUrl: './game-badge.component.html',
  styleUrls: ['./game-badge.component.css'],
})
export class GameBadgeComponent implements AfterViewInit {
  @Input()
  public game!: Game;

  public content: string = '';
  constructor(private teamService: TeamService) {}
  ngAfterViewInit(): void {
    this.content = this.isWin ? 'W' : 'L';
  }

  @HostBinding('class.win')
  get isWin(): boolean {
    if (
      this.game.home_team_score > this.game.visitor_team_score &&
      this.game.home_team.id === this.teamService.team?.id
    ) {
      return true;
    }
    return false;
  }
}
