import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, limit: number, completeWords: boolean = false, ellipsis: string = '...'): string {
    if(!value) {
      return '';
    }
    else if(value.length < limit) {
      return value;
    }

    let output = value.substring(0, limit);

    if(completeWords) {
      const hasSpace = output.indexOf(' ') > -1;
      if(hasSpace) {
        const newLLimit = output.lastIndexOf(' ');
        output = output.substring(0, newLLimit);;
      }
    }

    return output + ellipsis;
  }

}
