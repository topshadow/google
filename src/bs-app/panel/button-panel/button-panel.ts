import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

import { BsButton, bsButtonTypes } from './bs-button';

@Component({
    moduleId: module.id,
    selector: 'button-panel',
    templateUrl: './button-panel.html'
})
export class ButtonPanel implements OnInit {
    @Input() button: Button;
    @Output() closeButtonPanel = new EventEmitter();

    defaultButton: Button = {
        type: 'md-raised-button',
        color: 'primary'
    };

    constructor() {
        this.button = this.button ? this.button : this.defaultButton;
    }

    ngOnInit() {
    }

    closePanel() {
        this.closeButtonPanel.emit();
    }

    changeButtonType(type: any) {
        this.button.type = type;
    }
}

