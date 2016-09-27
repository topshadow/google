import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'product-list',
    templateUrl: './product-list.html'
})
export class ProductList {
    selectedProduct: any;
    selectProduct(product) {
        this.selectedProduct = product;
    }
}
