import { Component, OnInit } from '@angular/core';
import {RecipeService} from 'C:/Users/Fidel Rose/Documents/web/JustCook/JustCook/src/app/recipes.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent{
  errorMessage: string;
  recipes: IRecipes[];
  
    constructor(private _RecipeService:RecipeService){}
  
    ngOnInit(){
      this._RecipeService.getRecipes().subscribe(recipes =>{
        
       recipes = recipes;
        console.log("recipes");
    },
    error => this.errorMessage = <any>error);
}
//   data:any={};
//   private apiurl = 'https://pixabay.com/api/?key=7446425-7870ab1ffa328bc5465e5bf42&q=food'
//   constructor(private http:Http){

//     this.getData();
//     this.getImages();
//   }


// getData(){
// return this.http.get(this.apiurl).map((res:Response) => res.json())
// }
// getImages(){
//   this.getData().subscribe(data => {
//     console.log(data);
//   })
// }


}
