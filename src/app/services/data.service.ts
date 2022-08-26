import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public messageSource = new BehaviorSubject<string>('electronics');
  currentMessage = this.messageSource.asObservable()

  constructor() {}

  changeMessage(message: string) {
    this.messageSource.next(message)
  }
}