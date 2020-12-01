import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GamesService } from '../../services/games.service';


@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  game: any = {
    id: 0,
    title: '',
    description: '',
    image: '',
    created_at: new Date()
  };

  edit = false;

  constructor(
    private gamesService: GamesService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const params = this.activatedRoute.snapshot.params;
    if (params.id) {
      this.gamesService.getGame(params.id).subscribe(
        res => {
          this.game = res;
          this.edit = true;
        },
        err => console.log(err)
      );
    }
  }

  saveNewGame() {
    delete this.game.id;
    delete this.game.created_at;
    this.gamesService.saveGame(this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.log(err)
    );
  }

  updateGame() {
    const id = this.game.id;
    delete this.game.id;
    delete this.game.created_at;

    this.gamesService.updateGame(id, this.game).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['/games']);
      },
      err => console.log(err)
    );
  }

}