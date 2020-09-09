import { Component, OnInit } from '@angular/core';
import {
  DAILY_MENU_OPTIONS,
  SET_MENU_OPTIONS,
  DIM_SUM_OPTIONS,
  HORS_DEOUVRES_OPTIONS,
  STARTER_OPTIONS,
  SOUP_OPTIONS,
  ABALONE_OPTIONS,
  SEAFOOD_OPTIONS,
  SHRIMP_OPTIONS,
  SCALLOP_OPTIONS,
  FISH_OPTIONS,
  SHELLFISH_OPTIONS,
  POULTRY_OPTIONS,
  BEEF_OPTIONS,
  PORK_OPTIONS,
  VEGETABLE_OPTIONS,
  VEGETARIAN_OPTIONS,
  TOFU_OPTIONS,
  NOODLE_OPTIONS,
  FRIED_RICE_OPTIONS,
  NOODLE_SOUP_OPTIONS,
  CONGEE_OPTIONS,
  TWO_FOUR_OPTIONS,
  SIX_TEN_OPTIONS,
  WED_AND_BANQUET_OPTIONS
} from '../menu_dict'

@Component({
  selector: 'app-menu',
  template: `

<section class="section" id="menu_section">
<div class="container has-text-centered pb-6">
  <h1>Menu</h1>
</div>
<div class="container pb-6">
    <div class="buttons is-centered">
      <button (click)="downloadPDF('DimSumMenu')" class="button is-link is-outlined"><i class="fa fa-file-pdf-o"></i>&nbsp;Dim Sum</button>
      <button (click)="downloadPDF('DailyMenu')" class="button is-link is-outlined"><i class="fa fa-file-pdf-o"></i>&nbsp;Daily Menu</button>
      <button (click)="downloadPDF('SetMenu')" class="button is-link is-outlined"><i class="fa fa-file-pdf-o"></i>&nbsp;Set Menus</button>
    </div>
</div>

<div class="container is-hidden-touch">
  <div class="columns">
    <!-- Menu Selector -->
    <div class="column is-one-fifth">
      <aside class="menu">
          <p class="menu-label">
            Dim Sum
          </p>
          <ul class="menu-list">
            <li (click)="onSelect($event)"><a [ngClass]="{'is-active': selected == 'Dim Sum'}">Dim Sum</a></li>
          </ul>
          <p class="menu-label">
            Daily Menu
          </p>
          <ul class="menu-list">
            <li *ngFor="let food of daily_menu_options" (click)="onSelect($event)"><a [ngClass]="{'is-active': selected == food.item}">{{food.item}}</a></li>
          </ul>
          <p class="menu-label">
            Set Menus
          </p>
          <ul class="menu-list">
            <li *ngFor="let food of set_menu_options" (click)="onSelect($event)"><a [ngClass]="{'is-active': selected == food.item}">{{food.item}}</a></li>
          </ul>
      </aside>
    </div>
    <!-- Menu Details -->
    <div class="container">
        <table class="table is-fullwidth">
            <thead>
              <th id="item_header">Item</th>
              <th></th>
              <th id="price_header">Price</th>
            </thead>
              <tr *ngFor="let x of table_options" [ngSwitch]="x.category">
                <!-- Item Menus -->
                <ng-container *ngIf="x.category=='item'">
                  <td>{{x.desc}}<br>{{x.sub_desc}}</td>
                  <td>{{x.chi}}</td>
                  <td>{{x.price}}</td>
                </ng-container>
                <!-- Combo Menus -->
                <ng-container *ngIf="x.category=='combo'">
                  <td>{{x.desc}}</td>
                  <td><p *ngFor="let i of x.item_arr">{{i}}</p></td>
                  <td>{{x.price1}}<br>{{x.price2}}</td>
                </ng-container>
              </tr>
        </table>
    </div>
  </div>
</div>

</section>
  `,
  styles: [
    `
    #price_header{
      width:15%
    }
    .menu-list a.is-active {
        background-color: #7777af;
        color: #fff;
    }
    `
  ]
})
export class MenuComponent implements OnInit {

  daily_menu_options = DAILY_MENU_OPTIONS
  set_menu_options = SET_MENU_OPTIONS
  table_options = DIM_SUM_OPTIONS
  selected:string;
  items:object;

  constructor(){

    this.selected = 'Dim Sum',

    this.items = {
      "Dim Sum": DIM_SUM_OPTIONS,
      "Hors d'oeuvres": HORS_DEOUVRES_OPTIONS,
      "Starters": STARTER_OPTIONS,
      "Soup": SOUP_OPTIONS,
      "Abalone and Dried Seafood": ABALONE_OPTIONS,
      "Live Fresh Seafood": SEAFOOD_OPTIONS,
      "Shrimp and Prawns": SHRIMP_OPTIONS,
      "Scallops": SCALLOP_OPTIONS,
      "Fish Fillets": FISH_OPTIONS,
      "Shellfish and Calamari": SHELLFISH_OPTIONS,
      "Poultry": POULTRY_OPTIONS,
      "Beef": BEEF_OPTIONS,
      "Pork": PORK_OPTIONS,
      "Vegetables": VEGETABLE_OPTIONS,
      "Vegetarian": VEGETARIAN_OPTIONS,
      "Tofu": TOFU_OPTIONS,
      "Noodles": NOODLE_OPTIONS,
      "Fried Rice": FRIED_RICE_OPTIONS,
      "Noodles in Soup": NOODLE_SOUP_OPTIONS,
      "Congee": CONGEE_OPTIONS,
      "2 to 4 Persons": TWO_FOUR_OPTIONS,
      "6 to 10 Persons": SIX_TEN_OPTIONS,
      "Wedding and Banquet": WED_AND_BANQUET_OPTIONS
    }
  }

  onSelect($event) {
    let current_food = $event.srcElement.innerHTML;
    this.table_options = this.items[current_food]
    this.selected = current_food

    if (current_food == "Soup" || current_food == "Noodles in Soup") {
      document.getElementById('price_header').innerHTML = 'Price (Per Tureen)';
    } else if (current_food == "Congee") {
      document.getElementById('price_header').innerHTML = 'Per Bowl';
    } else {
      document.getElementById('price_header').innerHTML = 'Price';
    }
  }

  downloadPDF(menuString:string){

    window.open('/assets/menus/'+menuString+'.pdf')
  }
  ngOnInit(): void {

  }

}
