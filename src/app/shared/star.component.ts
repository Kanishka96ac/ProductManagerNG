import { Component, EventEmitter, Input, OnChanges, Output } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{

    cropWidth = 75;
    @Input() rating : number = 0;
    @Output() ratingClicked: EventEmitter<string> = 
        new EventEmitter<string>();


    onClick(): void {
        this.ratingClicked.emit(`The Rating ${this.rating} was clicked!`);
    }

    ngOnChanges(): void {
        this.cropWidth = this.rating * 75/5;
    }
}