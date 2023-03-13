import { formatDate } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, ReplaySubject } from 'rxjs';
import { Game, Page, Team } from './nba';

@Injectable({
  providedIn: 'root',
})
export class NBAService {
  static url = 'https://free-nba.p.rapidapi.com';
  static options = {
    headers: {
      'X-RapidAPI-Key': '2QMXSehDLSmshDmRQcKUIAiQjIZAp1UvKUrjsnewgqSP6F5oBX',
      'X-RapidAPI-Host': 'free-nba.p.rapidapi.com',
    },
  };
  allTeams = new ReplaySubject<Team[]>(1);

  constructor(private http: HttpClient) {
    this.http
      .get<Page<Team>>(`${NBAService.url}/teams`, NBAService.options)
      .pipe(map((page) => page.data))
      .subscribe((teams) => this.allTeams.next(teams));
  }

  getAllTeams(): Observable<Team[]> {
    return this.allTeams.asObservable();
  }

  getRecentGames(team_id: number): Observable<Game[]> {
    let dates = Array.from({ length: 12 }, (v, i) => {
      let date = new Date();
      date.setDate(date.getDate() - i);
      return formatDate(date, 'yyyy-MM-dd', 'en-us');
    });

    return this.http
      .get<Page<Game>>(`${NBAService.url}/games`, {
        params: {
          'team_ids[]': [team_id],
          'dates[]': dates,
          per_page: 12,
          page: 0,
        },
        ...NBAService.options,
      })
      .pipe(map((page) => page.data));
  }
}
