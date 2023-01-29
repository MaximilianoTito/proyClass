import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { CategoryModel } from "../entities/category.model";

@Injectable({
    providedIn: 'root'
})

export class CategoryHttpService {

    constructor(
        private httpClient : HttpClient
    ){}
    
    readonly API_URL = 'https://api.escuelajs.co/api/v1/products';

    findById(id : CategoryModel):Observable<CategoryModel>{
        const url = `${this.API_URL}/${id}`;
        return this.httpClient.get<CategoryModel>(url);
    }
}
