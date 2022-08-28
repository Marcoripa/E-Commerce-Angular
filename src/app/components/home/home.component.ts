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
  renderedItems: any;
  category = '';

  constructor(private service: HttpService, private data: DataService) {}

  //Fetch data from api using HttpService
  public getItems(category: string) {
    this.service.getItems(`${category}`).subscribe((res) => {
      this.data.changeStartItems(res);
      this.data.changeRenderItems(res);
    });
  }

  ngOnInit(): void {
    //Call the api at the first render of the component
    this.getItems(this.category);

    this.data.currentStartItems.subscribe(
      (startItems) => (this.startItems = startItems)
    );
    this.data.currentRenderItem.subscribe(
      (renderedItems) => (this.renderedItems = renderedItems)
    );
  }
}
