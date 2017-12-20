import {HttpClientModule,HttpClient } from '@angular/common/http';
import {RecipeService} from './recipes.service'
import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';
import { LocationStrategy,HashLocationStrategy} from '@angular/common';
import { HttpModule} from '@angular/http';
import { NotificationService } from './services/notification.service';
import { AuthGuard } from './services/auth.guard';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDescriptionComponent } from './recipe-description/recipe-description.component';
import { NotificationComponent } from './notification/notification.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavigationComponent } from './navigation/navigation.component'; 

//materials
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import{MatCardModule} from '@angular/material'
import { MatButtonModule,MatIconModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule,} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



const routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'RecipeDescription',component:RecipeDescriptionComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    RecipeSearchComponent,
    RecipeListComponent,
    NavigationComponent,
    RecipeDescriptionComponent,
    NotificationComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
     HttpClientModule,
     RouterModule.forRoot(routes),
     ReactiveFormsModule,
     
    //mat
    MatInputModule,
    MatListModule,    
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    HttpModule
    
     
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy},
    RecipeService,
    AuthService,
    AuthGuard,
NotificationService      
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
