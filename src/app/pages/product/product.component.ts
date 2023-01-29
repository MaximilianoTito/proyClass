import { Component, OnInit } from '@angular/core';
import { ProductModel, UpdateProductDto } from 'src/app/entities/product.model';
import { ProductHttpService } from 'src/app/services/product-http.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
})
export class ProductComponent implements OnInit {
  products: ProductModel[] = [];
  selectedProduct: UpdateProductDto = {};

  constructor(private productHttpService: ProductHttpService) {
  }

  ngOnInit(): void {
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    //this.updateProduct();
    //this.deleteProduct();
  }

  getProducts() {
    this.productHttpService.getAll().subscribe(
      response => {
        this.products = response;
        console.log(response);
      });
  }
  getProduct() {
    this.productHttpService.getOne(2).subscribe(
      response => {
        console.log(response);
      });
  }

  createProduct() {
    const data = {
      title: 'Pruebas',
      price: 650,
      description: 'pruebas Mx',
      images: [
        'https://placeimg.com/640/480/any',
      ],
      categoryId: 2,
    };
    this.productHttpService.store(data).subscribe(
      response => {
        console.log(response);
      });
  }
  editProduct(product: ProductModel) {
    this.selectedProduct = product;
  }
  updateProduct() {
    const data = {
      title: 'pruebaActualizarMx',
      price: 15,
      description: 'cuadernitos de mx',
    };
    this.productHttpService.update(533, data).subscribe(
      response => {
        console.log(response);
      });
  }
  
}