import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToDurationString',
})
export class SecondsToDurationStringPipe implements PipeTransform {
  transform(value: number | undefined, ...args: unknown[]): string {
    if (value !== undefined){
      let durationMinutes = Math.floor(value / 60);
      let durationSeconds = value % 60;
      return this.pad(durationMinutes) + ":" + this.pad(durationSeconds);
    }
    return "";
  }

  private pad(num: number): string {
    if (num >= 0 && num < 10)
      return "0" + num;
    return num + "";
  }
}
