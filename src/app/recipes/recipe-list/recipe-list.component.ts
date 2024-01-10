import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
 recipes: Recipe[] = [
 new Recipe('Chipotle Pinto Bean Tacos','Chipotle pinto bean tacos is a Plant-Based, easy to make and a high protein dish','https://veganheaven.org/wp-content/uploads/2019/02/Veg-Recipes-10.jpg'),
 new Recipe('Mexican Quinoa','This one pan Mexican quinoa with black beans and corn','https://veganheaven.org/wp-content/uploads/2019/02/Veg-Recipes-16.jpg')
 ];
}
