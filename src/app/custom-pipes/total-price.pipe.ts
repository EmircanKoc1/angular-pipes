import { Pipe, PipeTransform } from '@angular/core';
import { OrderItem } from '../models/order-item.model';

@Pipe({
  name: 'totalPrice',
  standalone: true
})
export class TotalPricePipe implements PipeTransform {

  transform(value: OrderItem): number {


    const totalPrice = value.unitPrice * value.quantity;
    return totalPrice;

  }

}
