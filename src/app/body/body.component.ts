import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-body',
  template: `

<section class="section" id="about_section">

<div id="popup" class="modal is-active">
  <div class="modal-background"></div>
  <div class="modal-content">

    <p class="image is-4by3">
      <img src="/assets/photos/surface.jpg">
    </p>
    <div class="centered has-text-centered">
      <p>Our doors are now open!<br>Dine-In or Dine on the Patio.</p>
      <br>
      <p>Take-Out service is avaliable, with up to a 20% discount.<br>Please call for more details.</p>
      <br>
      <p>Dynasty Yorkville</p>
      <p>69 Yorkville Avenue</p>
      <p>416-923-3323</p>
    </div>

  </div>
  <button class="modal-close is-large" aria-label="close"></button>
</div>

  <!-- About Container -->
  <div class="container">
    <div class="columns has-text-centered">
      <div class="column is-one-third">
        <img src="/assets/photos/bbqbuns2.jpg">
        <h1>Dim Sum</h1>
        <p>Experience the famous Hong Kong style brunch of Dim Sum in Yorkville.</p>
      </div>

      <div class="column">
          <img src="/assets/photos/lobster.jpg">
          <h1>Dinner</h1>
          <p>Prepare to feast on dishes fit for leaders of Chinese dynasties.</p>
      </div>
        
      <div class="column">
        <img src="/assets/photos/womantable.jpg">
        <h1>Events</h1>
        <p>Let us take care of your Birthdays, Weddings, Corporate Lunches, and other life events.</p>
      </div>
    </div>

  </div>
</section>
  `,
  styles: [

    `
  #popup p{
  font-size:85%;
  font-weight: bold;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
    @media (min-width: 800px) {
      #popup p{
        font-size:large;
        font-weight: bold;
      }
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
export class BodyComponent implements OnInit {

  @HostListener('document:click', ['$event'])
  public documentClick(event: Event): void {
    document.getElementById("popup").classList.remove('is-active');
  }

  constructor() { }

  ngOnInit(): void {

    
  }

}
