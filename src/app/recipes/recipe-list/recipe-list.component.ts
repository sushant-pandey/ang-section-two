import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'Test Recipe 1',
      'Test Recipe 1 Description',
      'https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/1:1/w_2560%2Cc_limit/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg'
    ),
    new Recipe(
      'Test Recipe 2',
      'Test Recipe 2 Description',
      'https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/1:1/w_2560%2Cc_limit/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg'
    ),
    new Recipe(
      'Test Recipe 3',
      'Test Recipe 3 Description',
      'https://assets.epicurious.com/photos/5a3002b504847a34b821cb4a/1:1/w_2560%2Cc_limit/seared-scallops-with-brown-butter-and-lemon-pan-sauce-recipe-BA-121217.jpg'
    ),
  ];
}
