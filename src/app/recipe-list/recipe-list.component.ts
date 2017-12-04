import { Component, OnInit } from '@angular/core';
import {IRecipes} from 'C:/Users/s00154171/Desktop/JustCook/src/app/recipe-search/Recipe'
import {RecipeService} from 'C:/Users/s00154171/Desktop/WebAssignments/JustCook/src/app/recipes.service'
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
  ,providers:[RecipeService]
})
export class RecipeListComponent implements OnInit {
  errorMessage: "error";

  recipes: IRecipes[];
  
    constructor(private _RecipeService:RecipeService){}
  
    ngOnInit():void {
      this._RecipeService.getRecipes().subscribe(recipes =>{
        
      this.recipes = recipes;
    },
    error => this.errorMessage = <any>error);
}
}
