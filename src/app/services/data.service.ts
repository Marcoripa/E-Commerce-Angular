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

}

