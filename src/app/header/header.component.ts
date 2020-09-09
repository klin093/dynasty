import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
<nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar brand">
      <div class="navbar-item">
        <a (click)="navigate('home')"><img src="/assets/photos/favicon.png"></a>
        <a (click)="navigate('menu_section')" class="navbar-item">Menu</a>
        <a (click)="navigate('contact_section')" class="navbar-item">Contact</a>
        <a (click)="navigate('gallery_section')" class="navbar-item">Gallery</a>
      </div>
    </div>
</nav>
  `,
  styles: [

    `

    #test{
      text-align:right;
    }
    .navbar-item{
      display:flex;
    }
    .navbar-item img{
      filter: invert(58%) sepia(6%) saturate(3137%) hue-rotate(251deg) brightness(87%) contrast(81%);
    }
    `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  navigate(location:string){

    if(location == 'home'){
      window.scrollTo({top: 0, behavior: 'smooth'});
    } else{
      document.getElementById(location).scrollIntoView({behavior:"smooth"});
    }
  }
  
  hamburgerHelper(){
    let ham_element = document.getElementById("navbarMenu");
    
    if(ham_element.className == 'navbar-menu'){
      ham_element.classList.add("is-active")
    }else{
      ham_element.classList.remove("is-active")
    }
  }


  ngOnInit(): void {
  }

}
