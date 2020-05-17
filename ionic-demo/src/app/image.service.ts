import { Injectable } from '@angular/core';
import { Subject, Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private data: Subject<string>;

  constructor() {
    this.data = new ReplaySubject<string>();
  }

  public update(str: string): void {
    this.data.next(str);
  }

  public get(): Observable<string> {
    return this.data.asObservable();
  }
}
