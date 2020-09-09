import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  template: `

<section class="section" id="gallery_section">
<div class="container has-text-centered pb-6">
  <h1>Gallery</h1>
</div>

<div class="container">
  <div class="columns" *ngFor="let i of [0,1,2,3,4]">

      <div class="column is-one-fourth">
        <img [src]=image_list[i*4].path>
        <p>{{image_list[i*4].desc}}</p>
      </div>
      <div class="column">
        <img [src]=image_list[i*4+1].path>
        <p>{{image_list[i*4+1].desc}}</p>
      </div>
      <div class="column">
        <img [src]=image_list[i*4+2].path>
        <p>{{image_list[i*4+2].desc}}</p>
      </div>
      <div class="column">
        <img [src]=image_list[i*4+3].path>
        <p>{{image_list[i*4+3].desc}}</p>
      </div>
  </div>
</div>
</section>
  `,
  styles: [
    `
    @media (min-width: 800px) {
        .columns img{
      transition: transform .2s;
      filter: brightness(75%);
    }
    .columns img:hover{
      -ms-transform: scale(1.01); /* IE 9 */
      -webkit-transform: scale(1.01); /* Safari 3-8 */
      transform: scale(1.01); 
      filter: brightness(100%);
      overflow: hidden;
    }
  }


    `
  ]
})
export class GalleryComponent implements OnInit {

  image_list:Array<{ desc: string, path: string }>

  constructor() {
    this.image_list = [
      {desc:"Steamed B.B.Q. Pork Buns",path:"/assets/photos/bbqbuns2.jpg"},
      {desc:"Baby-Bok Choy with Garlic Sauce",path:"/assets/photos/bokchoy.jpg"},
      {desc:"Grilled Pork Dumplings",path:"/assets/photos/dumplings.jpg"},
      {desc:"Pan Fried Vegetable in Tofu Crepe",path:"/assets/photos/tofu_crepe.jpg"},
      {desc:"Yang Chow Fried Rice",path:"/assets/photos/friedrice.jpg"},
      {desc:"Sweet & Sour Pork",path:"/assets/photos/generaltao.jpg"},
      {desc:"Steamed Supreme Har Gow (Shrimp Dumplings)",path:"/assets/photos/hargow.jpg"},
      {desc:"Lemon Chicken",path:"/assets/photos/lemonchicken.jpg"},
      {desc:"Crystal Rainbow Fold with Shrimp",path:"/assets/photos/lettuce.jpg"},
      {desc:"Lobster with Ginger & Green Onions",path:"/assets/photos/lobster.jpg"},
      {desc:"Flat Rice Noodle with Beef Tenderloin",path:"/assets/photos/noodles.jpg"},
      {desc:"Szechuan Styled Chicken",path:"/assets/photos/red.jpg"},
      {desc:"Chef’s Special BBQ Back Ribs",path:"/assets/photos/ribs.jpg"},
      {desc:"Walnut Scallops",path:"/assets/photos/scallops.jpg"},
      {desc:"Sesame Beef",path:"/assets/photos/sesamebeef.jpg"},
      {desc:"Deep Fried Sesame Shrimp Rolls",path:"/assets/photos/shrimprolls.jpg"},
      {desc:"Steamed Supreme Har Gow (Shrimp Dumplings)",path:"/assets/photos/siumai.jpg"},
      {desc:"Crispy Vegetarian Spring Roll",path:"/assets/photos/springrolls.jpg"},
      {desc:"Hot & Sour Seafood Soup",path:"/assets/photos/sweetsoursoup.jpg"},
      {desc:"Braised Tofu",path:"/assets/photos/tofu.jpg"}
    ]
   }

  ngOnInit(): void {
  }
}
