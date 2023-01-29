import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { NoFoundComponent } from './no-found/no-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { PagesModule } from './pages/pages.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material';

@NgModule({
    declarations: [
        AppComponent,
        PagesComponent,
        NoFoundComponent,
        LoginComponent,
        RegisterComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        PagesModule,
        SharedModule,
        HttpClientModule,
        MatSliderModule
    ]
})
export class AppModule { }
