import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `

<section class="section" id="contact_section">
<div class="container has-text-centered pb-6">
  <h1>Contact</h1>
</div>

<div class="container">

    <div class="columns">

      <div class="column is-one-third has-text-centered">
        <p>69 Yorkville Avenue<br>Toronto ON, M5R 1B8<br>416-923-3323</p>
        <p>Mon - Fri<br>11:30 AM - 9:30 PM<br>Sat - Sun<br>11:30 AM - 10 PM</p>
        <p><img src="./assets/photos/line_one.png" style="padding:1%;" width="40" height="40">5 mins. from Bloor-Yonge Station</p>
        <p><img src="./assets/photos/line_two.png" style="padding:1%;" width="40" height="40">1 min. from Bay Station</p>
      </div>

      <div class="column">
        <figure class="image is-5by4">
          <iframe class="has-ratio" width="400" height="300" src="https://maps.google.com/maps?q=69%20Yorkville%20Avenue%2C%20Toronto%2C%20ON%20M5R%201B8&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" allowfullscreen></iframe>
        </figure>
      </div>

   </div>
</div>
</section>
  `,
  styles: [
    `
    p{
      padding: .75rem;
    }
    `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
