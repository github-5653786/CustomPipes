import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(value: string, ...args: string[]) {
    let curdate = new Date().getFullYear();
    let birthdate = new Date(value).getFullYear();
    return curdate - birthdate;
  }

}
