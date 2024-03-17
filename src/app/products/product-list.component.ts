import { Component } from "@angular/core";

 
@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {

    pageTitle: string = 'Product List!';
    imageWidth = 50;
    imageMargin = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: any[] = [
        {
            "productId" : 2,
            "productName" : "Garden Cart",
            "productCode" : "GDN-0024",
            "releaseDate" : "March 18, 2023",
            "starRating": 4.4,
            "price": 35.56,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId" : 3,
            "productName" : "Hammer",
            "productCode" : "GDC-0027",
            "releaseDate" : "May 18, 2023",
            "starRating": 4.7,
            "price": 65.57,
            "imageUrl": "assets/images/hammer.png"
        },
        {
            "productId" : 4,
            "productName" : "Flower Pot",
            "productCode" : "XRC-0027",
            "releaseDate" : "January 15, 2023",
            "starRating": 4.1,
            "price": 85.57,
            "imageUrl": "assets/images/leaf_rake.png"
        }
    ];

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}