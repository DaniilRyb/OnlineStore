import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { ProductService } from '../../services/product.service'
import { ModalService } from '../../services/modal.service'

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  form = new FormGroup({
    titleInput: new FormControl('',
      [Validators.required,
        Validators.minLength(6)])
  })

  get titleInput() {
    return this.form.controls.titleInput as FormControl
  }

  constructor(private productService: ProductService,
              private modalService: ModalService) {
  }

  ngOnInit(): void {
  }

  submit() {
    this.productService.create({
      title: this.form.value.title as string,
      price: 13.5,
      description: 'lorem ipsum description',
      category: 'electronic',
      image: 'https://i.pravatar.cc',
      rating: {
        rate: 2.2,
        count: 1
      }
    })
      .subscribe(() => this.modalService.close())
  }
}
