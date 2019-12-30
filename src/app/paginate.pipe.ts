import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(banks: any, limit: any): any {
    let pages = [];
    let length = banks.length / limit;
    
    for(let page=1; page <= Math.ceil(length); page++) {
      pages.push(page);
    }

    return pages;
  }

}