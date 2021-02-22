import { Component } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: "pidro-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent {

  constructor(private router: RouterExtensions) {}

  go(route: string): void {
    this.router.navigate([route], {
      animated: true,
      transition: { name: 'fade' }
    });
  }
}
