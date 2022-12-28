import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

export interface User {
  name: string;
  age: number;
  score: number;
}

export interface Winners {
  name: string;
  age: number;
  score: number;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private dbPath1 = '/users';
  private dbPath2 = '/winners';

  usersRef: AngularFireList<User>;
  winnersRef: AngularFireList<Winners>;

  constructor(private db: AngularFireDatabase) {
    this.usersRef = db.list(this.dbPath1);
    this.winnersRef = db.list(this.dbPath2);
  }

  getAll(): AngularFireList<User> {
    return this.usersRef;
  }

  getWinner(): AngularFireList<Winners> {
    return this.winnersRef;
  }

  create(winner: Winners): any {
    return this.winnersRef.push(winner);
  }

  // update(key: string, value: any): Promise<void> {
  //   return this.usersRef.update(key, value);
  // }

  // delete(key: string): Promise<void> {
  //   return this.usersRef.remove(key);
  // }

  // deleteAll(): Promise<void> {
  //   return this.usersRef.remove();
  // }
}
