import { Component } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';

import { Image } from "@nativescript/core";
import * as camera from '@nativescript/camera';

@Component({
  selector: "pidro-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  name: string = 'Fila Fill';
  image: string = '';

  constructor(private router: RouterExtensions) {}

  go(route: string): void {
    this.router.navigate([route], {
      animated: true,
      transition: { name: 'fade' }
    });
  }

  takePicture() {
    camera.requestPermissions().then(() => {
      camera.takePicture()
        .then((imageAsset) => {
          console.log("Result is an image asset instance");
          var image = new Image();
          image.src = imageAsset;
          console.log(image.src)
        }).catch((err) => {
          console.log("Error -> " + err.message);
        });
      },
    )
  }

}
