import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { FormProductComponent } from './product/form-product/form-product.component';

const routes:Routes = [
  //rutas protegidas
  {path:'dashboard', component:PagesComponent,
children:[
  {path:'', component:DashboardComponent},
  {path:'category', component: CategoryComponent},
  {path: 'product', component:ProductComponent},
  {path: 'form', component: FormProductComponent},
  {path: 'form/:id', component: FormProductComponent},
  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
]
},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule,
  ]
})
export class PagesRoutingModule { }
