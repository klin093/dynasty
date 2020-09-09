import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    
    <app-header></app-header>

    <app-hero></app-hero>

    <app-body></app-body>

    <app-menu></app-menu>

    <router-outlet></router-outlet>

    <app-contact></app-contact>

    <app-gallery></app-gallery>

    <app-footer></app-footer>

  `,
  styles: []
})
export class AppComponent {
  title = 'Dynasty Yorkville';
}
