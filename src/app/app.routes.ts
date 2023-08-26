import { Routes } from '@angular/router';
import {ProfileRoutes} from "./features/profile/profile.routes";

export const routes: Routes = [
  {path: 'profile', children: [
      ...ProfileRoutes
    ]}
];
