import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'bs-product-list',
    templateUrl: './product-list.html'
})
export class BsProductList {
    @Input() data;
    selectedProduct: any;
    selectProduct(product) {
        this.selectedProduct = product;
    }
}


@Component({
    moduleId: module.id,
    selector: 'product-list-panel',
    templateUrl: './product-list-panel'
})
export class BsProductListPanel {
    @Input() data;

}
