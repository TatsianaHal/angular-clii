import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testing'
})
export class TestingPipe implements PipeTransform {

  transform(value: string): string {
    if (typeof value !== 'string') {
      throw new Error('TestingPipe: not a string');
    }
    let newStr = '';
    for (let i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }

}
