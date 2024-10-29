import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [
    RouterOutlet,
    AsyncPipe,
    CurrencyPipe,
    DatePipe,
    UpperCasePipe,
    DecimalPipe,
    JsonPipe,
    KeyValuePipe,
    LowerCasePipe,
    PercentPipe,
    SlicePipe,
    TitleCasePipe,
    UpperCasePipe
  ]
})
export class AppComponent {
  title = 'angular-pipes';
  today: Date = new Date();
  message: string = "This is a normal message"
  price: number = 1290.99;
  person: {
    name: string,
    surname: string
  } = {
      name: "emircan",
      surname: "koç"
    };

  helloWorld$: Observable<string> = new Observable<string>((observer) => {
    observer.next("Hello");
    observer.next("World");
  });
}
