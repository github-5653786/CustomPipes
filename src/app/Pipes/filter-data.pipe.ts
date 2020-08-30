import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterData'
})
export class FilterDataPipe implements PipeTransform {

  PlayersArray: string[] = [];
  transform(value: any[], SearchedVal: string) {
    if (SearchedVal === "") {
      return value;
    }
    this.PlayersArray = [];
    value.forEach(element => {
      if (element.name.toLowerCase().match(SearchedVal)) {
        this.PlayersArray.push(element);
      }
    });
    return this.PlayersArray
  }
}
