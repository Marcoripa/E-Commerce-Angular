import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: any;
  renderedItems: any;
  category = '';
  selected = '';
  input = '';
  price = '';

  constructor(private service: HttpService) {}

  private getItems(category: string | number) {
    this.service.getItems(`${category}`).subscribe((res) => {
      this.items = res; 
      this.renderedItems = res;   
    });
  }

  //Call the api at the first render of the component
  ngOnInit(): void {
    this.getItems(this.category);
  }

  //Call the api with the value taken from the select option
  onChange(event: string) {
    this.getItems(event);
  }

  inputChange(event: string) {
    this.input = event;
  }

  submitInput() {
    const filteredByName = this.items.filter((element: any) =>
      element.title.includes(this.input)
    );
    if (filteredByName !== undefined) {
      this.renderedItems = filteredByName;
    }
  }

  priceChange(event: any) {
    const filteredByPrice = this.items.filter(
      (element: any) => element.price < event
    );
    if (filteredByPrice !== undefined) {
       this.renderedItems = filteredByPrice;
    }
  }
}
