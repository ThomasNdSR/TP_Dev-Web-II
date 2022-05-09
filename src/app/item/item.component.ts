import { SelectorContext } from '@angular/compiler';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Item } from "../item";

@Component({
  //onde inserir app-item significa que estou chamando ele
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class ItemComponent {

  editable = false;

  @Input() item: Item;
  @Input() newItem: string;
  @Input() filter: string;
  @Output() remove = new EventEmitter<Item>();
  @Output() updateItem = new EventEmitter<Item>();
  @Output() moveUp = new EventEmitter<Item>();
  @Output() moveDown = new EventEmitter<Item>();

  // saveItem(description) {
  //   if (!description) return;
  //   this.editable = false;
  //   this.item.description = description;
  // }
}
