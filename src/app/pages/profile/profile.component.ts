import { Component } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: "pidro-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {

  constructor(private router: RouterExtensions) {}

  go(route: string): void {
    this.router.navigate([route], {
      animated: true,
      transition: { name: 'fade' }
    });
  }
}
