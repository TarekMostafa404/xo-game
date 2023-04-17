import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'xo-game';

  storeValue = '';
  boxesValue: any[] = ['', '', '', '', '', '', '', '', ''];

  printValue(index:number) {
    alert(this.boxesValue[index]);
  }
}
