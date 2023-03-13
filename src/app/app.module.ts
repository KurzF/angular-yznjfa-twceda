import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { TeamTrackerComponent } from './team-tracker/team-tracker.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { ConferencePipe } from './conference.pipe';
import { GameBadgeComponent } from './game-badge/game-badge.component';
import { TeamScoreboardComponent } from './team-scoreboard/team-scoreboard.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TeamTrackerComponent },
      { path: 'results/:teamCode', component: TeamScoreboardComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    SearchBarComponent,
    TeamTrackerComponent,
    TeamListComponent,
    TeamCardComponent,
    ConferencePipe,
    GameBadgeComponent,
    TeamScoreboardComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
