import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../../models/person.model';

@Pipe({
  name: 'personInfoPure',
  standalone: true
})
export class PersonInfoPurePipe implements PipeTransform {

  transform(value: Person): string {

    const personInfo = `${value.name} ${value.surname} ${value.age}`;
    return personInfo;

  }

}
