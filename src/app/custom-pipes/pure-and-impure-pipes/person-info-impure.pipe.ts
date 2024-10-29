import { Pipe, PipeTransform } from '@angular/core';
import { Person } from '../../models/person.model';

@Pipe({
  name: 'personInfoImpure',
  standalone: true,
  pure: false
})
export class PersonInfoImpurePipe implements PipeTransform {

  transform(value: Person): string {
    const personInfo = `${value.name} ${value.surname} ${value.age}`;
    return personInfo;

  }

}
