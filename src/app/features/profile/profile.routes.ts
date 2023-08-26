import {Route} from "@angular/router";
import {ProfilePageComponent} from "./profile-page/profile-page.component";
import {ProfileComponent} from "./profile.component";

export const ProfileRoutes: Route [] = [
{
    path: '', component: ProfileComponent, children: [
      {
        path: ':slug', component: ProfilePageComponent
      },
    ],
  }

]
