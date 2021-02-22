import { Component } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: "pidro-table",
  templateUrl: "./table.component.html",
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  constructor(private router: RouterExtensions) {}

  go(route: string): void {
    this.router.navigate([route], {
      animated: true,
      transition: { name: 'fade' }
    });
  }
}
