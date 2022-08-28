import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { HomeComponent } from '../home/home.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
  providers: [HomeComponent, NavBarComponent],
})
export class SearchBarComponent implements OnInit {
  startItems!: any;
  renderedItems: any;
  selected = '';
  input = '';
  categorySource: any = '';
  max: number = this.home.max;
  min: number = 0;

  constructor(private data: DataService, private home: HomeComponent) {}

  ngOnInit(): void {
    this.data.currentStartItems.subscribe(
      (startItems) => (this.startItems = startItems)
    );
    this.data.currentRenderItem.subscribe(
      (renderedItems) => (this.renderedItems = renderedItems)
    );
  }

  //Call the api with the value taken from the select option
  onChange(event: string) {
    this.home.getItems(event);
  }

  //Grab the value passed in input and pass it to filter the results
  inputChange(event: string) {
    this.input = event;
  }

  submitInput() {
    const filteredByName = this.startItems.filter((element: any) =>
      element.title.includes(this.input)
    );
    if (filteredByName !== []) {
      this.data.changeRenderItems(filteredByName);
    } else {alert('No items found')}
  }

  //Grab the value passed in range and pass it to filter the results
  priceChange(event: any) {
    const filteredByPrice = this.startItems.filter(
      (element: any) => element.price < event
    );
    if (filteredByPrice !== undefined) {
      this.data.changeRenderItems(filteredByPrice);
    }
  }

  findExpensive(arr: any) {
    const priceArr: number[] = [];
    arr.forEach((element: any) => {
      priceArr.push(element.price);
    });

    return Math.max(...priceArr);
  }

  findCheap(arr: any) {
    const priceArr: number[] = [];
    arr.forEach((element: any) => {
      priceArr.push(element.price);
    });

    return Math.max(...priceArr);
  }

  
}

