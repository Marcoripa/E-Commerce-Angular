import { Injectable } from '@angular/core';
import { BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private startItemsSource = new BehaviorSubject([]);
  currentStartItems = this.startItemsSource.asObservable();

  changeStartItems(startItems: any) {
    this.startItemsSource.next(startItems);
  }

  private renderItemsSource = new BehaviorSubject([]);
  currentRenderItem = this.renderItemsSource.asObservable();

  changeRenderItems(renderedItems: any) {
    this.renderItemsSource.next(renderedItems);
  }

  private quantitySource = new BehaviorSubject(0);
  currentQuantitySource = this.quantitySource.asObservable();

  changeQuantitySource(totalQuantity: any) {
    this.quantitySource.next(totalQuantity);
  }
}

