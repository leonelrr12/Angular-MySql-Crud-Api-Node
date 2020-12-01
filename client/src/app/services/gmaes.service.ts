import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/Game';

@Injectable({
  providedIn: 'root'
})
export class GmaesService {

  API_URI = 'http://localhost:3001/api';

  constructor( private http: HttpClient ) { }

  getGames() {
    return this.http.get(`${this.API_URI}/games`);
  }

  getGame(id: string) {
    return this.http.get(`${this.API_URI}/games/${id}`);
  }

  saveGame(game: Game) {
    return this.http.post(`${this.API_URI}/games`, game);
  }

  updateGame(id: string, udtGame: Game) {
    return this.http.put(`${this.API_URI}/games/${id}`, udtGame);
  }

  deleteGame(id: string) {
    return this.http.delete(`${this.API_URI}/games/${id}`);
  }
}
