import { NextObserver } from 'rxjs/Observer';
import { Response, ResponseContentType } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse } from '@angular/common/http';
import {Http} from "@angular/http";
//import {IAPIRecipes} from "./APIrecipes";

@Injectable()

//Fidels Service
export class RecipeService {
  
<<<<<<< HEAD
 private _RecipesUrl = 'https://pixabay.com/api/?key=7446425-7870ab1ffa328bc5465e5bf42&q=food';
  
 constructor(private _http: HttpClient) { }

 getRecipes():Observable<IRecipes[]>{
=======
 private _RecipesUrl =   'https://www.googleapis.com/customsearch/v1?key=AIzaSyApsE_UdsJD9wYiDnqNejoHKufuMmFp_c8&cx=005639442794109511634:m14ey8csloy&q=food';
  
 constructor(private _http: HttpClient) { }

 getRecipes():Observable<IRecipes>{
>>>>>>> 507f56f8387fd36cd952e37e6eee1f227dd62b00
   console.log("In RecSer: ");
   return this._http.get<IRecipes>(this._RecipesUrl)
   .do(data => console.log('All:' + JSON.stringify(data)))
   .catch(this.handleError);
 }

 private handleError(err:HttpErrorResponse)
 {
   console.log("Recipe Search" + err.message);
   return Observable.throw(err.message);
    
 } 

}

//Emilys service for API
export class APIservice {
  private _postURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/extract";

  constructor(private http: Http){

  }

  getPosts(): Observable<IAPIRecipes[]> {
    return this.http
        .get(this._postURL)
        .map((response: Response) => {
            return <IAPIRecipes[]>response.json();
        })
        .catch(this.handleError);
}

private handleError(error: Response) {
    return Observable.throw(error.statusText);
}
}
