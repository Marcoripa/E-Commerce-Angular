import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  private startItemsSource = new BehaviorSubject([]);
  currentStartItems = this.startItemsSource.asObservable();

  private renderItemsSource = new BehaviorSubject([]);
  currentRenderItem = this.renderItemsSource.asObservable();

  private categorySource = new BehaviorSubject([]);
  currentCategorySource = this.categorySource.asObservable();

  changeStartItems(startItems: any) {
    this.startItemsSource.next(startItems);
  }

  changeRenderItems(renderedItems: any) {
    this.renderItemsSource.next(renderedItems);
  }

  changeCategorySource(categorySource: any) {
    this.categorySource.next(categorySource)
    console.log(categorySource)
  }
}

