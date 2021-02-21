import { Component, OnInit } from "@angular/core";
import { Dialogs } from "@nativescript/core";
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: "pidro-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private router: RouterExtensions) {}

  ngOnInit(): void {
  }

  submit(): void {
    console.log("submit button tapped");
    Dialogs.alert("Your message has been sent.");
  }

  go(route: string): void {
    this.router.navigate([route], {
      animated: true,
      transition: { name: 'fade' }
    });
  }
}
