import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'xo-game';

  userValue = '';
  boxesValue: string[] = new Array(9);
  // boxesValue: any[] = ['', '', '', '', '', '', '', '', ''];

  printValue(index: number) {
    if (this.boxesValue[index]) return;

    if (this.isGameOver) return;

    let player = this.userValue === 'X' ? 'O' : 'X';

    this.boxesValue[index] = this.userValue = player;

    this.winGame();
  }

  isGameOver = false;

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

        alert('Player X won The Game');
        break;
      } else if (
        this.boxesValue[winner[0]] === 'O' &&
        this.boxesValue[winner[1]] === 'O' &&
        this.boxesValue[winner[2]] === 'O'
      ) {
        this.isGameOver = true;

        alert('Player O won The Game');
        break;
      }
    }
  }

  resetGame() {
    this.boxesValue = ['', '', '', '', '', '', '', '', ''];
    this.isGameOver = false;
    // this.matchWinCase = [];
  }
}
