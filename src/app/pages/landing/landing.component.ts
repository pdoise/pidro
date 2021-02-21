import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: "pidro-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private router: RouterExtensions) {}

  ngOnInit(): void {
  }

  go(route: string): void {
    this.router.navigate([route], {
      animated: true,
      transition: { name: 'fade' }
    });
  }
}
