import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductModel } from 'src/app/entities/product.model';
import { ProductHttpService } from 'src/app/services/product-http.service';
import { CategoryHttpService } from 'src/app/services/category-http.service';


@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
})
export class FormProductComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private productHttpService: ProductHttpService,
    private categoryHttpService: CategoryHttpService,
    private rourer : Router
  ) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (params.get('id')) {
          this.findById(parseInt(params.get('id')!));
        }
      }
    );
    //this.createProduct()
  }

  currentEntity: ProductModel = {
    id: 0,
    title: '',
    price: 0,
    description: '',
    images: [],
    category: []
  }
  public findById(id: number): void {
    this.productHttpService.findById(id).subscribe(
      (response) => {
        this.currentEntity = response;
        console.log(response)
        // this.currentEntity.category.forEach(
        //   (cat) => {
        //     this.categoryHttpService.findById(cat.id).subscribe(
        //       (item) => cat.name = item.name
        //     )
        //   }
        // )
      }
    )
  }

  // public save(): void {
  //   this.productHttpService.save(this.currentEntity).subscribe(
  //     () => {
  //       this.currentEntity = {
  //         id: 155,
  //         title: '',
  //         price: 0,
  //         description: '',
  //         images: [],
  //         category: []
  //       };
  //       this.rourer.navigate(['../'])
  //     }
  //   )
  // }
  createProduct() {
    const data = {
      title: '',
      price: 0,
      description: '',
      images: [
        '',
      ],
      categoryId: 0,
    };
    this.productHttpService.store(data).subscribe(
      response => {
        console.log(response);
      });
  }

  products : ProductModel[] = [];

  deleteProduct (id : ProductModel['id']) {
    this.productHttpService.destroy(id).subscribe(
      (response) => {
        this.products.filter(product => product.id != id);
        console.log(`El valor es ${response} se ha eliminado Correctamente`);
        this.rourer.navigate(['/dashboard/product'])
      }
    )
  }




}
