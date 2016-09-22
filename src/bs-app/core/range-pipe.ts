import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Pipe({ name: 'rangeasdas' })
export class RangePipe implements PipeTransform {
    transform(value: number): number[] {
        return Array(value).fill(1).map((el, i, arr) => { return el = i; });
    }
}
