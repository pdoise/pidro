import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from "./pages/contact/contact.component";
import { FriendsComponent } from "./pages/friends/friends.component";
import { LandingComponent } from "./pages/landing/landing.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProfileComponent } from "./pages/profile/profile.component";
import { RulesComponent } from "./pages/rules/rules.component";
import { TableComponent } from "./pages/table/table.component";
import { SettingsComponent } from "./pages/settings/settings.component";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "friends", component: FriendsComponent },
  { path: "landing", component: LandingComponent },
  { path: "profile", component: ProfileComponent },
  { path: "rules", component: RulesComponent },
  { path: "login", component: LoginComponent },
  { path: "table", component: TableComponent },
  { path: "settings", component: SettingsComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
