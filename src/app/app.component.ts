import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, KeyValuePipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component, Pipe } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { DuplicatePipe } from './custom-pipes/duplicate.pipe';
import { OrderItem } from './models/order-item.model';
import { TotalPricePipe } from './custom-pipes/total-price.pipe';
import { PersonInfoImpurePipe } from './custom-pipes/pure-and-impure-pipes/person-info-impure.pipe';
import { PersonInfoPurePipe } from './custom-pipes/pure-and-impure-pipes/person-info-pure.pipe';
import { Person } from './models/person.model';

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
    UpperCasePipe,
    DuplicatePipe,
    TotalPricePipe,
    PersonInfoImpurePipe,
    PersonInfoPurePipe
  ]
})
export class AppComponent {
  title = 'angular-pipes';
  today: Date = new Date();
  message: string = "This is a normal message"
  price: number = 1290.99;
  objPerson: {
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

  orderItem: OrderItem = {
    name: "phone",
    quantity: 3,
    unitPrice: 1300.99
  };

  person: Person = {
    name: "emircan",
    surname: "koç",
    age: 22
  };

  changePersonData(): void {
    this.person.age = 33;
  }

  changePersonReferance(): void {
    this.person = {
      name: "ahmet",
      surname: "yılmaz",
      age: 44
    };
    
  }

}
