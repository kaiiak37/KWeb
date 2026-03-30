import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  styleUrl: './homepage.less',
})
export class Homepage {

  protected readonly title = signal('kweb');
}
