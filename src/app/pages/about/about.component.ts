import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: "pidro-about",
  templateUrl: "./about.component.html",
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

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
