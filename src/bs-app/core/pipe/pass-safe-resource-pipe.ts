import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'passSafeReourceUrl' })
export class PassSafeResouceUrlPipe implements PipeTransform {
    constructor(public security: DomSanitizer) {

    }
    transform(value: string, exponent: string): any {
       return  this.security.bypassSecurityTrustHtml(value);
    }
}
