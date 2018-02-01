import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

/*
  Generated class for the StatesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StatesProvider {

  public logged: boolean = false;
  public onLoggedStatusChanged: Subject<boolean> = new Subject<boolean>();

  constructor() {
  }

  public login(): void {
    this.logged = true;
    this.onLoggedStatusChanged.next(this.logged);
  }

  public logout(): void {
    this.logged = false;
    this.onLoggedStatusChanged.next(this.logged);
  }


}
