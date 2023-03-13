import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'conference',
})
export class ConferencePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    switch (value) {
      case 'East':
        return 'Eastern conference';
      case 'West':
        return 'Western conference';
      default:
        return 'Unkown conference';
    }
  }
}
