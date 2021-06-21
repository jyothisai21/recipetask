import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RecipeComponent } from './recipe/recipe.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import {FormsModule} from '@angular/forms';
import { CardComponent } from './card/card.component';
import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    RecipeComponent,
    MaincontentComponent,
    CardComponent,

    SidebarComponent,

  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
