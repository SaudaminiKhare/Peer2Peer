import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { ItemDetailsPage } from '../item-details/item-details';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  items: Array<{title: string, author: string, number : number}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        number : i,
        title: 'Linked List Deletion',
        author: 'sai'

      });
    }
  }

  itemTapped(event, item) {
    this.navCtrl.push(ItemDetailsPage, {
      item: item
    });
  }

}
