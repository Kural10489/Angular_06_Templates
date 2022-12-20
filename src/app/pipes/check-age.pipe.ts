import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkAge'
})
export class CheckAgePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value>18){
      return "You Are eligible to vote";
    }
    else{
      return "Your Are not eligible to vote"
    }
  }
  }


