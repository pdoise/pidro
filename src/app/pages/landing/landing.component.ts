import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from '@nativescript/angular';
import { Subscription } from 'rxjs';

import { User } from '../../models/users/user.model';
import { UserService } from '../../models/users/user.service';

@Component({
  selector: "pidro-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  friends: Array<User>;
  friendsSubscription: Subscription;

  constructor(
    private router: RouterExtensions,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(): void {
    this.friendsSubscription = this.userService
      .getFriends()
      .subscribe((friends) => { this.friends = friends })
  }
  go(route: string): void {
    this.router.navigate([route], {
      animated: true,
      transition: { name: 'fade' }
    });
  }
}
