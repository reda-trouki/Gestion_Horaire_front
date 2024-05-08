import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], filterFunction: (item: any) => boolean): any[] {
    if (!items || !filterFunction) {
      return items;
    }
    return items.filter(item => filterFunction(item));
  }
}
