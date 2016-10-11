import { Component, HostListener, ElementRef,Input } from '@angular/core';
@Component({
    moduleId: module.id,
    selector: 'bottom',
    templateUrl: './bottom.html'
})
export class Bottom {
  @Input()  data;
    constructor(private el: ElementRef) { }

    @HostListener('mousedown', ['$event'])
    showPanel(event: MouseEvent) {
        if (event.button == 2) {
            window['$'](this.el.nativeElement).find('.modal').modal('toggle');
        }
    }
}
