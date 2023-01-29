import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { PagesRoutingModule } from './pages/pages-routing.module';

import { NoFoundComponent } from './no-found/no-found.component';

const routes:Routes = [

  {path:'', redirectTo:'/dashboard', pathMatch:'full'},
  {path:'**', component:NoFoundComponent}

]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
   ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
