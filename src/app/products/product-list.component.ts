import { Component, OnDestroy, OnInit } from "@angular/core";
import { IProducts } from "./product";
import { ProductService } from "./product.service";
import { Subscription } from "rxjs";

 
@Component({
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy{

    constructor(private productsService: ProductService){
    }

    pageTitle: string = 'Product List!';
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean = false;
    errorMessage : string = '';
    sub!: Subscription ;


    private _listFilter: string = '';

    get listFilter(): string{
        return this._listFilter;
    }

    set listFilter(val : string){
        this._listFilter = val;
        console.log('In setter : ' + val);   
        this.filteredProducts = this.performFilter(val);
    }

    filteredProducts: IProducts[] = [];
    


    products: IProducts[] = [];

    performFilter(filterBy: string): IProducts[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProducts) =>
            product.productName.toLocaleLowerCase().includes(filterBy));
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.sub = this.productsService.getProducts().subscribe({
            next: products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error: err => this.errorMessage = err
        });
    }

    ngOnDestroy(){
        this.sub.unsubscribe();
    }

    onRatingClicked(message : string): void {
        this.pageTitle = 'Product List : ' + message;
    }
}