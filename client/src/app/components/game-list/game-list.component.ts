import { Component, OnInit } from '@angular/core';

import { GmaesService } from '../../services/gmaes.service';
import { Game } from '../../models/Game';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  games: any = [];

  constructor(private gamesService: GmaesService) { }

  ngOnInit(): void {
    this.gamesService.getGames().subscribe(
      res => {
         this.games = res;
      },
      err => console.log(err)
    );
  }
}
