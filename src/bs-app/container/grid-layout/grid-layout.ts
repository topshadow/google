import { Component, Input } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'bs-grid-layout',
    templateUrl: './grid-layout.html'
})
export class BsGridLayout {
    @Input()
    gridlayout: GridLayout;


}
