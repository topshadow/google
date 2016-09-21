import { Component, Input } from '@angular/core';

export const bsButtonTypes: string[] = ['md-button', 'md-raised-button', 'md-fab-button'];

@Component({
    moduleId: module.id,
    selector: 'bs-button',
    templateUrl: './bs-button.html'
})
export class BsButton {
    @Input() bsButton: Button;

    bsButtonTypes = bsButtonTypes;

}
