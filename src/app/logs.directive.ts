import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appLogs]',
  standalone: true,
  host: {
    '(click)': 'onLog()',
  },
})
export class LogsDirective {
  private elementRef = inject(ElementRef);

  onLog() {
    console.log('Logging event');
    console.log(this.elementRef.nativeElement);
  }
}
