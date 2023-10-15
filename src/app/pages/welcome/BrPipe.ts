import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'toBr'})
export class BrPipe implements PipeTransform {
  transform(value: any) {
    return value.replace(/\n/g,'<br/>');
  }
}
