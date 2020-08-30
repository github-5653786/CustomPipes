import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSlashPipe'
})
export class AddSlashPipePipe implements PipeTransform {

  transform(value: any, value2: string) {
    var FinalVal = value.split("-").join("");  //19890602
    if (FinalVal.length === 8) {
      FinalVal = [FinalVal.slice(0, 4), '/', FinalVal.slice(4)].join('');  //1989/0602
    }
    if (FinalVal.length === 9) {
      FinalVal = [FinalVal.slice(0, 7), '/', FinalVal.slice(7)].join('');  //1989/06/02
    }
    return FinalVal;
  }

}
