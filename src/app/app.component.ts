import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  boxesValue: string[] = new Array(9);
  matchWinCase: number[] = [];
  isGameOver: boolean = false;
  defaultPlayer: string = '';
  selectedPlayer: string = 'X';
  player_X: string = '';
  player_O: string = '';

  printValue(index: number) {
    if (this.boxesValue[index]) return;

    if (this.isGameOver) return;

    let player;

    if (!this.defaultPlayer) {
      player = this.selectedPlayer;
    } else {
      player = this.defaultPlayer === 'X' ? 'O' : 'X';
    }

    this.boxesValue[index] = this.defaultPlayer = player;

    this.winGame();
  }

  getPlayerTurn() {
    let player;

    if (!this.defaultPlayer) {
      player = this.selectedPlayer;
    } else {
      player = this.defaultPlayer === 'X' ? 'O' : 'X';
    }

    player = 'X' ? `${this.player_X} (X)` : `${this.player_O} (O)`;

    return player;
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
        this.matchWinCase = winner;

        setTimeout(() => {
          this.player_X
            ? alert(`Game over! ${this.player_X.toUpperCase()} Won The Game`)
            : alert(`Game over! ${this.defaultPlayer} Won The Game`);
        }, 0);
        break;
      } else if (
        this.boxesValue[winner[0]] === 'O' &&
        this.boxesValue[winner[1]] === 'O' &&
        this.boxesValue[winner[2]] === 'O'
      ) {
        this.isGameOver = true;
        this.matchWinCase = winner;

        setTimeout(() => {
          this.player_O
            ? alert(`Game over! ${this.player_O.toUpperCase()} Won The Game`)
            : alert(`Game over! ${this.defaultPlayer} Won The Game`);
        }, 0);
        break;
      }
    }
  }

  resetGame() {
    this.boxesValue = new Array(9);
    this.matchWinCase = [];
    this.isGameOver = false;
    this.defaultPlayer = '';
    this.player_X = '';
    this.player_O = '';
  }
}
