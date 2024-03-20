import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private renderer: Renderer2) {}

  title = 'My Portfolio';
  isMenuOpen: boolean = false;
  showDiv: boolean = true;

  // toggleMenu() {
  //   const menu = document.querySelector('.menu-links');
  //   const icon = document.querySelector('.hamburger-icon');

  //   if (menu && icon) {
  //     menu.classList.toggle('open');
  //     icon.classList.toggle('open');
  //   }
  // }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;

    if (this.isMenuOpen == true) {
      this.showDiv = false;
    } else {
      this.showDiv = true;
    }
  }
}
