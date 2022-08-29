import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  startItems!: any;
  renderedItems!: any;
  category = '';
  max = this.findExpensive([1, 2, 4]);
  quantity!: number;

  constructor(private service: HttpService, private data: DataService) {}

  //Fetch data from api using HttpService
  public getItems(category: string) {
    this.service.getItems(`${category}`).subscribe((res) => {
      this.data.changeStartItems(res);
      this.data.changeRenderItems(res);
    });
  }

  ngOnInit(): void {
    this.data.currentStartItems.subscribe(
      (startItems) => (this.startItems = startItems)
    );
    this.data.currentRenderItem.subscribe(
      (renderedItems) => (this.renderedItems = renderedItems)
    );
    this.data.currentQuantitySource.subscribe(
      (quantity) => (this.quantity = quantity)
    );

    //Call the api at the first render of the component
    this.getItems(this.category);
  }

  findExpensive(arr: any) {
    const priceArr: number[] = [];
    arr.forEach((element: any) => {
      priceArr.push(element.price);
    });

    return Math.max(...priceArr);
  }

  addItem(id: number) {
    this.data.changeQuantitySource(this.quantity + 1)
  }
}
