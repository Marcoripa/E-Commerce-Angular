import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
})
export class NavBarComponent implements OnInit {
  quantity!: number;
  displayStoreToggle: boolean = true;

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.data.currentQuantitySource.subscribe(
      (quantity) => (this.quantity = quantity)
    );
  }

  openNav() {
    //@ts-ignore
    document.getElementById('sidebar').style.width = '250px';
    //@ts-ignore
    document.getElementById('openNav').style.display = 'none';
    //@ts-ignore
    document.getElementById('closeNav').style.display = 'block';
  }

  closeNav() {
    //@ts-ignore
    document.getElementById('sidebar').style.width = '0px';
    //@ts-ignore
    document.getElementById('openNav').style.display = 'block';
    //@ts-ignore
    document.getElementById('closeNav').style.display = 'none';
  }

  displayStore() {
    if (this.displayStoreToggle) {
      this.displayStoreToggle = false;
      //@ts-ignore
      document.getElementById('store-sidebar').style.width = '250px';
    } else {
      this.displayStoreToggle = true;
      //@ts-ignore
      document.getElementById('store-sidebar').style.width = '0px';
    }
    console.log(this.displayStoreToggle);
  }
}
