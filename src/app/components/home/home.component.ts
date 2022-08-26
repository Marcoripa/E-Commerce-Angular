import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: any;
  category: string = '';
  selected: string = '';

  constructor(private service: HttpService) {}

  ngOnInit(): void {
    this.getItems(this.category);
  }

  //Call the api with the value taken from the select option
  onChange(event: string) {
    this.getItems(event)
  }

  private getItems(category: string) {
    this.service.getItems(`${category}`).subscribe((res) => {
      this.items = res;
      console.log(res);
    });
  }
}
