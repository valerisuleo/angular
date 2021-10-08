import { Observable, Subject } from "rxjs";

export class DataSourceService {
  constructor() {}

  private subject = new Subject();
  allTodos;

  sendData() {
    this.subject.next(this.allTodos);
  }

  get getData() {
    return this.subject.asObservable();
  }
}
