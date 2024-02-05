import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private title: string = 'ANGULAR16BASES';
  private counter: number = 10;

  get getTitle(): string {
    return this.title
  }

  set setTitle(value: string) {
    this.title = value
  }

  get getCounter(): number {
    return this.counter
  }

  incrementar(): void {
    this.counter++;
  }

  decrementar(): void {
    this.counter--;
  }

  reiniciar(): void {
    this.counter = 10;
  }
}
