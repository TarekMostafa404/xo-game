import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  user = '';
  boxesValue: string[] = new Array(9);
  isGameOver = false;
  player_X = '';
  player_O = '';

  printValue(index: number) {
    if (this.boxesValue[index]) return;

    if (this.isGameOver) return;

    let player = this.user === 'X' ? 'O' : 'X';

    this.boxesValue[index] = this.user = player;

    this.winGame();
  }

  winGame() {
    let winCases = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winCases.length; i++) {
      let winner = winCases[i];

      if (
        this.boxesValue[winner[0]] === 'X' &&
        this.boxesValue[winner[1]] === 'X' &&
        this.boxesValue[winner[2]] === 'X'
      ) {
        this.isGameOver = true;

        this.player_X
          ? alert(`Game over! ${this.player_X.toUpperCase()} Won The Game`)
          : alert(`Game over! ${this.user} Won The Game`);
        break;
      } else if (
        this.boxesValue[winner[0]] === 'O' &&
        this.boxesValue[winner[1]] === 'O' &&
        this.boxesValue[winner[2]] === 'O'
      ) {
        this.isGameOver = true;
        this.player_O
          ? alert(`Game over! ${this.player_O.toUpperCase()} Won The Game`)
          : alert(`Game over! ${this.user} Won The Game`);
        break;
      }
    }
  }

  resetGame() {
    this.boxesValue = new Array(9);
    this.isGameOver = false;
    this.user = '';
    this.player_X = '';
    this.player_O = '';
  }
}
