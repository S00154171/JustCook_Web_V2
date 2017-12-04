import { Injectable } from '@angular/core';
import {IRecipes} from 'C:/Users/s00154171/Desktop/WebAssignments/JustCook/src/app/recipes';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {HttpClientModule,HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '../../../WebAssignments/JustCook/node_modules/@angular/common/http';


@Injectable()
export class RecipeService {
 private _RecipesUrl = 'http://localhost:3000/Recipes';
  
 constructor(private _http: HttpClient) { }

 getRecipes():Observable<IRecipes[]>{
   return this._http.get<IRecipes[]>(this._RecipesUrl)
   .do(data => console.log('All:' + JSON.stringify(data)))
   .catch(this.handleError);
 }

 private handleError(err:HttpErrorResponse)
 {
   console.log(err.message);
   return Observable.throw(err.message);
    
 } 

}