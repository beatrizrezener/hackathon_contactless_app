import { Place, categories } from './../../models/place';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface Favorites {
  catIndex: number;
  placeIndex: number;
  place: Place;
}

@Injectable()
export class StatesProvider {

  public logged: boolean = false;
  public favorites: Favorites[] = [];
  public onLoggedStatusChanged: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.loadFavorites();
  }

  private loadFavorites(): void {
    let c = 0;
    for(let cat of categories) {
      let p = 0;
      if (!cat.places) { continue }
      for (let place of cat.places) {
        if (place.isFavorite) {
          this.favorites.push({
            place,
            placeIndex: p,
            catIndex: c,
          });
        }
        p++;
      }
      c++;
    }
  }

  public login(): void {
    this.logged = true;
    this.onLoggedStatusChanged.next(this.logged);
  }

  public logout(): void {
    this.logged = false;
    this.onLoggedStatusChanged.next(this.logged);
  }

  public favorite(place: Place, catIndex: number, placeIndex: number): void {
    if (place.isFavorite) {
      this.favorites.push({
        catIndex,
        placeIndex,
        place,
      });
    } else {
      for (let fav of this.favorites) {
        if (fav.catIndex == catIndex && fav.placeIndex == placeIndex) {
          this.favorites.splice(this.favorites.indexOf(fav), 1);
          return;
        }
      }
    }

  }

}
