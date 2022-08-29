import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  item: any;
  quantity: number = 0;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    // this.data.currentRenderItem.subscribe(
    //   (renderedItems) => (this.renderedItems = renderedItems)
    // );
  }

  addItem(id: number) {
    // this.data.changeQuantitySource(this.quantity + 1);
    console.log(id);
  }

  removeItem(id: number) {
    console.log(id);
  }
}
