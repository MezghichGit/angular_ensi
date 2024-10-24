import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ing'
})
export class IngPipe implements PipeTransform {

  transform(nom:any):string {
    return "Ing "+ nom;
  }

}
