import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any[], searchTerm: string): any[] {
    if (!items) {
      return [];
    }

    if (!searchTerm) {
      return items;
    }

    const myPattern = new RegExp(searchTerm, 'i');
    return items.filter(it => it.name.match(myPattern));
  }
}
