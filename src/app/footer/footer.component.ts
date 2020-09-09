import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `


<footer class="footer">
<div class="container content has-text-centered">

  <div class="columns">
    <div class="column is-two-fifths">
        <img src="/assets/photos/dynastyLogo.png">
    </div>

    <div class="column">
        <p>69 Yorkville Avenue<br>Toronto ON, M5R 1B8<br>416-923-3323</p>
        <p>Mon - Fri<br>11:30 AM - 9:30 PM<br>Sat - Sun<br>11:30 AM - 10 PM</p>
    </div>
  </div>

</div>

</footer>
  `,
  styles: [
    `
    footer{
      background-color: #7777af;
      color: #fff;
    }

    `
  ]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
