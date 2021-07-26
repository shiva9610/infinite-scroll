import { Component } from '@angular/core';

@Component({
  selector: 'app-infinite-table',
  templateUrl: './infinite-table.component.html',
  styleUrls: ['./infinite-table.component.scss'],
})
export class InfiniteTableComponent {
  array = []; // push data into array to list
  sum = 100; //initial Data load
  throttle = 300; // throttle time for event trigger
  scrollDistance = 1;
  scrollUpDistance = 2;

  constructor() {
    this.appendItems(0, this.sum);
  }

  addItems(startIndex: number, endIndex: number, _method: string) {
    for (let i = startIndex; i < endIndex; ++i) {
      this.array[_method]({
        id: i,
        word: this.generateWord(),
      });
    }
  }

  appendItems(startIndex: number, endIndex: number) {
    this.addItems(startIndex, endIndex, 'push');
  }

  onScrollDown(ev: Event) {
    console.log('scrolled down!!', ev);
    // add another 20 items
    const start = this.sum;
    this.sum += 20;
    this.appendItems(start, this.sum);
  }

  generateWord() {
    let possible =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let text = '';
    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
