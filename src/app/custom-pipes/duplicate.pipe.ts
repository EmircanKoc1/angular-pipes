import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicate',
  standalone: true
})
export class DuplicatePipe implements PipeTransform {

  transform(value: string, duplicateCount: number): string {
    const processedValue: string = value.concat(" ");
    return processedValue.repeat(duplicateCount);
  }

}
