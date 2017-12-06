import { Component, OnInit } from '@angular/core';
import {APIservice} from "./recipes.service";
//import {IAPIRecipe} from "./APIrecipes";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [APIservice]
})
export class AppComponent implements OnInit {
  _postArray: IAPIRecipes[];

  constructor(private apiService: APIservice) {

  }

  getPosts():void {
    this.apiService.getPosts()
    .subscribe(
      resultArray => this._postArray = resultArray,
      error => console.log("Error ::" + error)

    )
  }

  ngOnInit():void {
    this.getPosts();
  }
}
