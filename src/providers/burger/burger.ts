import { Injectable } from '@angular/core'
import { AngularFirestore } from 'angularfire2/firestore'
import { Observable, Subject, Subscription } from 'rxjs'
import { map } from 'rxjs/operators'

/*
  Generated class for the BurgerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BurgerProvider {
  burgers = []

  burgerSubject = new Subject<any[]>()
  burgerSubscription: Subscription

  constructor(public db: AngularFirestore) {
    this.getAllBurgers()
  }

  emitBurgerSubject() {
    this.burgerSubject.next(this.burgers.slice())
  }

  getBurgerById(id: string) {
    for (const burger of this.burgers) {
      if (burger.id == id) {
        return burger
      }
    }
  }

  saveNewBurger(burger: any) {
    return new Observable((obs) => {
      this.db
        .collection('burgers')
        .add(burger)
        .then(() => {
          alert('Le burger a bien été ajoutée !')
          obs.next()
        })
    })
  }

  getAllBurgers() {
    return this.db
      .collection('burgers')
      .snapshotChanges()
      .pipe(
        map((changes: any) => {
          return changes.map((doc) => {
            return {
              id: doc.payload.doc.id,
              data: doc.payload.doc.data(),
            }
          })
        }),
      )
      .subscribe((res) => {
        this.burgers = res
        this.emitBurgerSubject()
      })
  }

  update(burger: any, id: any) {
    return new Observable((obs) => {
      this.db.doc(`burgers/${id}`).update(burger)
      obs.next()
    })
  }

  delete(id: any) {
    this.db.doc(`burgers/${id}`).delete()
  }
}
