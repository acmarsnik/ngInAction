import {AngularFirestore, AngularFirestoreCollection} from 'angularfire2/firestore';
import {Observable, BehaviorSubject, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

import {HttpClient, HttpHeaders} from '@angular/common/http';

export interface User {
  id?: string;
  name: string;
  firstName?: string;
  lastName?: string;
}

const USER_ENDPOINT = 'https://us-central1-ng-in-action.cloudfunctions.net/user/';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private collection: AngularFirestoreCollection<User>;
  // private user$: Subject<User> = new BehaviorSubject<User>({name: 'No user'});
  private user$: Subject<User> = new BehaviorSubject<User>(null);

  constructor(private db: AngularFirestore, private http: HttpClient) {
    this.collection = db.collection<User>('user', ref => ref.orderBy('name'));
  }

  public set(user: User) {
    this.user$.next(user);
  }

  public update(user: User) {
    const newUser = {...user};
    delete  newUser['id'];

    return this.http
      .patch(`${USER_ENDPOINT}${user.id}`, newUser, httpOptions)
      .pipe(tap((_) => this.set(user)));
  }

  public user(): Observable<User> {
    return this.user$.asObservable();
  }

}
