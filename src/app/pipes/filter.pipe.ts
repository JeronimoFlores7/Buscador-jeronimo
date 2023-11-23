import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...arg: any): any {
    const resultsData =[]
    for(const element of value){
      if(element.recordData.dc_title.toLowerCase().indexOf(arg) > -1){
        resultsData.push(element);
      };
    };
    return resultsData;
  }

}
