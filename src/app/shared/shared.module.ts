import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavLeftComponent } from './nav-left/nav-left.component';
import { SharedComponent } from './shared.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    NavLeftComponent,
    SharedComponent,
    BreadcrumbsComponent
  ],
  imports: [
    CommonModule,    
    ],
  exports:[
    HeaderComponent,
    FooterComponent,
    NavLeftComponent,
    SharedComponent,
    BreadcrumbsComponent
  ]
})
export class SharedModule { }
