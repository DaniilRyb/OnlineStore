import { Component, OnInit } from '@angular/core'
import { IProduct } from './models/products'
import { ProductService } from './services/product.service'
import { Observable } from 'rxjs'
import { ModalService } from './services/modal.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Welcome to clothing store!'
  //products: IProduct[] = []
  loading = false
  products$: Observable<IProduct[]>
  term = ''

  constructor(public productService: ProductService,
              public modalService: ModalService) {
  }


  ngOnInit(): void {
    this.loading = true
    this.productService.getAll().subscribe(() => {
      this.loading = false
    })
  }
}
