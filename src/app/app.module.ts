import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import {HttpClientModule } from '@angular/common/http';
import {HttpModule } from '@angular/http';

//materials
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import{MatCardModule} from '@angular/material'

@NgModule({
  declarations: [
    AppComponent,
    RecipeSearchComponent,
    RecipeListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  //  MatCardModule,
   // BrowserAnimationsModule
   HttpClientModule,
   HttpModule
   
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
