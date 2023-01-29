import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FormProductComponent } from './product/form-product/form-product.component';
@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    FormProductComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
  ]
})
export class PagesModule { }
