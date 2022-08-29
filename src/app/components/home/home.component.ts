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
  totalQuantity!: number;
  itemQuantity: number = 0;
  cartItems: { id: number; quantity: number }[] = [];

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
      (totalQuantity) => (this.totalQuantity = totalQuantity)
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
    this.data.changeQuantitySource(this.totalQuantity + 1);
    if (this.cartItems.find((item) => item.id === id) == null) {
      this.cartItems.push({ id, quantity: 1 });
    } else {
      this.cartItems.forEach((item) => {
        if (item.id === id) {
          let index = this.cartItems.indexOf(item);
          this.cartItems[index] = { ...item, quantity: item.quantity + 1 };
        }
      });
    }
    console.log(this.cartItems);
  }
  removeItem(id: number) {
    // this.data.changeQuantitySource(0);
  }
}
