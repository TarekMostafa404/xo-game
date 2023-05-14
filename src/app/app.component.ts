import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  board: string[] = new Array(9);
  matchWinCase: number[] = [];
  isGameOver: boolean = false;
  defaultPlayer: string = '';
  selectedPlayer: string = 'X';
  player_X: string = '';
  player_O: string = '';

  printValue(index: number) {
    if (this.board[index]) return;

    if (this.isGameOver) return;

    let rival = this.defaultPlayer === 'X' ? 'O' : 'X';

    if (!this.defaultPlayer) {
      rival = this.selectedPlayer;
    } else {
      rival = this.defaultPlayer === 'X' ? 'O' : 'X';
    }

    this.board[index] = this.defaultPlayer = rival;

    this.winGame();
  }

  getPlayerTurn() {
    let playerTurn;

    if (!this.defaultPlayer) {
      playerTurn = this.selectedPlayer;
    } else {
      playerTurn = this.defaultPlayer === 'X' ? 'O' : 'X';
    }

    playerTurn =
      playerTurn === 'X' ? `${this.player_X} (X)` : `${this.player_O} (O)`;

    return playerTurn;
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
        this.board[winner[0]] === 'X' &&
        this.board[winner[1]] === 'X' &&
        this.board[winner[2]] === 'X'
      ) {
        this.isGameOver = true;
        this.matchWinCase = winner;

        setTimeout(() => {
          this.player_X
            ? alert(`Game over! ${this.player_X} Won The Game`)
            : alert(`Game over! ${this.defaultPlayer} Won The Game`);
        }, 0);
        break;
      } else if (
        this.board[winner[0]] === 'O' &&
        this.board[winner[1]] === 'O' &&
        this.board[winner[2]] === 'O'
      ) {
        this.isGameOver = true;
        this.matchWinCase = winner;

        setTimeout(() => {
          this.player_O
            ? alert(`Game over! ${this.player_O} Won The Game`)
            : alert(`Game over! ${this.defaultPlayer} Won The Game`);
        }, 0);
        break;
      }
    }
  }

  resetGame() {
    this.board = new Array(9);
    this.matchWinCase = [];
    this.isGameOver = false;
    this.defaultPlayer = '';
    this.player_X = '';
    this.player_O = '';
  }
}
