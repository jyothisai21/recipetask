import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { RecipeComponent } from './recipe/recipe.component';

const routes: Routes = [
  {
     path : '' , 
     component : MaincontentComponent
    },
    {
      path:"card/:id",
      component:CardComponent
    },
  
  { 
    path : 'recipe/:id' , 
    component : RecipeComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
