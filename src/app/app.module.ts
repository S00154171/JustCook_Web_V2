import {HttpClientModule,HttpClient } from '@angular/common/http';
<<<<<<< HEAD
import {RecipeService} from './recipes.service'
import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
<<<<<<< HEAD
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
=======
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule } from '@angular/router';
import{LocationStrategy,HashLocationStrategy} from '@angular/common';
import {HttpModule} from '@angular/http';
=======
import {RecipeService} from './recipes.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

>>>>>>> 0f1a9a542e2dab6b3b04b3a936a7a85eb24a814e
>>>>>>> 507f56f8387fd36cd952e37e6eee1f227dd62b00

import { AppComponent } from './app.component';
import { RecipeSearchComponent } from './recipe-search/recipe-search.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDescriptionComponent } from './recipe-description/recipe-description.component';
<<<<<<< HEAD
import { NotificationComponent } from './notification/notification.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { NavigationComponent } from './navigation/navigation.component'; 
=======
>>>>>>> 507f56f8387fd36cd952e37e6eee1f227dd62b00

//materials
//import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
//import{MatCardModule} from '@angular/material'
import { MatButtonModule,MatIconModule, MatCardModule, MatFormFieldModule, MatToolbarModule, MatInputModule, MatListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import {MatMenuModule,} from '@angular/material/menu';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



const routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'RecipeDescription',component:RecipeDescriptionComponent}
=======
import { NavigationComponent } from './navigation/navigation.component'; 
import {MatMenuModule,} from '@angular/material/menu';
import { ProfileComponent } from './profile/profile.component';

const routes:Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'RecipeDescription',component:RecipeDescriptionComponent},
  {path:'Profile',component:ProfileComponent},
>>>>>>> 507f56f8387fd36cd952e37e6eee1f227dd62b00
]


@NgModule({
  declarations: [
    AppComponent,
    RecipeSearchComponent,
    RecipeListComponent,
    NavigationComponent,
    RecipeDescriptionComponent,
<<<<<<< HEAD
    NotificationComponent,
    LoginComponent,
    SignupComponent
=======
    ProfileComponent
>>>>>>> 507f56f8387fd36cd952e37e6eee1f227dd62b00
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
     HttpClientModule,
     RouterModule.forRoot(routes),
     ReactiveFormsModule,
=======
<<<<<<< HEAD
     HttpClientModule,
     RouterModule.forRoot(routes),
>>>>>>> 507f56f8387fd36cd952e37e6eee1f227dd62b00
     
    //mat
    MatInputModule,
    MatListModule,    
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
<<<<<<< HEAD
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
=======
    BrowserAnimationsModule,
    HttpModule
     
=======
   // MatCardModule,
    //BrowserAnimationsModule,
   HttpClientModule,
   HttpModule
   
   
>>>>>>> 0f1a9a542e2dab6b3b04b3a936a7a85eb24a814e
  ],
  providers: [RecipeService],
   // { provide: LocationStrategy, useClass: HashLocationStrategy},
   // ,
  //],
>>>>>>> 507f56f8387fd36cd952e37e6eee1f227dd62b00
  bootstrap: [AppComponent]
})
export class AppModule { }
