import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor() { }

  private subject = new Subject<Object>();

  categoryCreated(data: Object) {
    this.subject.next(data);
  }

  getCategories(): Observable<Object> {
    return this.subject.asObservable();
  }
}
