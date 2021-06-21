import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  id1:any;
  data: Array<any>=[];
   constructor(private route:ActivatedRoute, private router:Router,private recipe:RecipeService) {
     this.id1=this.route.params.subscribe((res:any)=>{
        console.log(res);
       this.recipe.getRecipe(res.id).subscribe((res:any)=>{
     
         console.log(res.hits);
           this.data=res.hits;
         })
       
 
     });

    }
    ngOnInit(): void { 

    }
  
    searchrecipe(id:string){
    
      this.router.navigate(["/recipe",id.split("#")[1]]);
    }
  }
