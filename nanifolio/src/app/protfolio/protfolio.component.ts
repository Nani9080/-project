import { Component } from '@angular/core';
import {faLinkedin, faYoutube, faGithub, faHackerrank, faAngular} from '@fortawesome/free-brands-svg-icons'
import {faDownload }from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-protfolio',
  standalone: true,
  imports: [],
  templateUrl: './protfolio.component.html',
  styleUrl: './protfolio.component.scss'
})
export class ProtfolioComponent {

mylinkeindinIcon= faLinkedin;









  falinkedin = faLinkedin
faYoutube = faYoutube
faGithub = faGithub
faHackerrank = faHackerrank
faAngular = faAngular
faDownload = faDownload
constructor () { }
ngOnInit(): void {
}
sites : string[] = [
'Leetcode', 'Linkedin', 'Youtube', 'Github'
]
//   function themeControl(params:type) {
//     //dark light mode------------------
// const themeButton = 
// const darkTheme = "dark-theme";
// const iconTheme = "fa-sun";

// // Previously selected topic (if user selected)
// const selectedTheme = localStorage.getItem("selected-theme");
// const selectedIcon = localStorage.getItem("selected-icon");

// // We obtain the current theme that the interface has by validating the dark-theme class
// const getCurrentTheme = () =>
//   document.body.classList.contains(darkTheme) ? "dark" : "light";
// const getCurrentIcon = () =>
//   themeButton.classList.contains(iconTheme) ? "fa-moon" : "fa-sun";

// // We validate if the user previously chose a topic
// if (selectedTheme) {
//   // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
//   document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
//     darkTheme
//   );
//   themeButton.classList[selectedIcon === "fa-moon" ? "add" : "remove"](
//     iconTheme
//   );
// }
//   }

}
