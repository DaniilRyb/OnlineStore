import { Injectable, OnInit } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ModalService implements OnInit {

  isVisible$ = new BehaviorSubject<boolean>(false)

  open() {
    this.isVisible$.next(true)
  }

  close() {
    this.isVisible$.next(false)
    alert('Одежда успешно добавлена!')
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.')
  }
}
