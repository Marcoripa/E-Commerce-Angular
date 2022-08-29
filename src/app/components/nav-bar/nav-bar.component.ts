import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  totalQuantity!: number;
  displayStoreToggle: boolean = true;
  displaySearchToggle: boolean = true;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentQuantitySource.subscribe(
      (totalQuantity) => (this.totalQuantity = totalQuantity)
    );
  }

  displayStore() {
    if (this.displayStoreToggle) {
      this.displayStoreToggle = false;
      //@ts-ignore
      document.getElementById('store-sidebar').style.width = '500px';
    } else {
      this.displayStoreToggle = true;
      //@ts-ignore
      document.getElementById('store-sidebar').style.width = '0px';
    }
  }

  displaySearch() {
    if (this.displaySearchToggle) {
      this.displaySearchToggle = false;
      //@ts-ignore
      document.getElementById('sidebar').style.width = '250px';
    } else {
      this.displaySearchToggle = true;
      //@ts-ignore
      document.getElementById('sidebar').style.width = '0px';
    }
  }
}
