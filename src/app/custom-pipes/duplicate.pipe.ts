import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicate',
  standalone: true
})
export class DuplicatePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
