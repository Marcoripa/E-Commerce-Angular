import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: any;
  renderedItems: any;
  // category = '';
  selected = '';
  input = '';
  price = '';
  startItems!: any;
  categorySource: any = '';

  constructor(private service: HttpService, private data: DataService) {}

  //Fetch data from api using HttpService
  private getItems(category: string | number) {
    this.service.getItems(`${category}`).subscribe((res) => {
      this.startItems = res;
      this.renderedItems = this.startItems;
      this.data.changeStartItems(res);
      console.log(this.startItems);
    });
  }

  ngOnInit(): void {
    //Call the api at the first render of the component
    this.getItems(this.categorySource);

    this.data.currentStartItems.subscribe(
      (startItems) => (this.startItems = startItems)
    );
    this.data.currentRenderItem.subscribe(
      (renderedItems) => (this.renderedItems = renderedItems)
    );
    this.data.currentCategorySource.subscribe(
      (categorySource) => (this.categorySource = categorySource)
    );
  }

}
