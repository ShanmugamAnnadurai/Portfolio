import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  f1() {
    window.open('../../assets/resume-example.pdf', '_blank');
  }

  contactRoute() {
    //this has to set the navigate to contact component
  }

  linkedIn() {
    window.open('https://www.linkedin.com/in/shanmugam-a-3a789421a', '_blank');
  }

  git() {
    window.open('https://github.com/ShanmugamAnnadurai', '_blank');
  }
}
