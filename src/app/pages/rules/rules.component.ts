import { Component } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: "pidro-rules",
  templateUrl: "./rules.component.html",
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent {

  constructor(private router: RouterExtensions) {}

  go(route: string): void {
    this.router.navigate([route], {
      animated: true,
      transition: { name: 'fade' }
    });
  }
}
