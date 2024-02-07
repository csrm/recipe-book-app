import { Component, Output, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
 @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
 @ViewChild('qtyInput', {static: true}) qtyInputRef: ElementRef;
 @Output() ingredientAdded = new EventEmitter<Ingredient>();
 ingredient: Ingredient;

 onAdd() {
   this.ingredient = new Ingredient(this.nameInputRef.nativeElement.value, this.qtyInputRef.nativeElement.value);
   this.ingredientAdded.emit(this.ingredient);
   console.log(this.ingredient);
 }
}
