import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  template: `
<section class="hero is-link is-fullheight-with-navbar hero-image">
  <div class="hero-body">
    <img src="/assets/photos/dynastyLogo.png">
  </div>

</section>
  `,
  styles: [
`
    .hero-image {
      background-image: url("/assets/photos/tablesDark.jpg");
      background-position: center center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
    }

    .hero img{
      height: 10vh;
      color: white;
    }

    @media (max-width: 800px) {
        .hero img{
        height: 33%;
        color: white;
      }
    }
    

    `
  ]
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
