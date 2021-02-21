import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';
import { Subscription } from 'rxjs';

import { User } from '../../models/users/user.model';
import { UserService } from '../../models/users/user.service';

@Component({
  selector: 'pidro-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  friends: User[];
  friendsSubscription: Subscription;
  error: any;

  constructor(
      private router: RouterExtensions,
      private userService: UserService
    ) {}

  ngOnInit(): void {
    this.getFriends();
  }

  getFriends(): void {
    this.friendsSubscription = this.userService
      .getUsers()
      .subscribe((friends) => { (this.friends = friends) })
  }

  go(route: string): void {
    this.router.navigate([route], {
      animated: true,
      transition: { name: 'fade' }
    });
  }

  ngOnDestroy() {
    this.friendsSubscription.unsubscribe();
  }
}
