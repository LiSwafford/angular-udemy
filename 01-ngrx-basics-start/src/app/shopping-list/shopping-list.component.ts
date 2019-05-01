import { Component, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import { Ingredient } from "../shared/ingredient.model";
import * as fromShoppingList from "./store/shopping-list.reducer";
import * as ShoppingListActions from "./store/shopping-list.action";

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  shoppingListState: Observable<{ ingredients: Ingredient[] }>;
  private subscription: Subscription;

  constructor(private store: Store<fromShoppingList.AppState>) {}

  ngOnInit() {
    this.shoppingListState = this.store.select("shoppingList");
  }

  onEditItem(index: number) {
    this.store.dispatch(new ShoppingListActions.StartEdit(index));
  }
}
