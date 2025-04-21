// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { WelcomeComponent } from './showcase/welcome/welcome.component';
import { ButtonShowcaseComponent } from './showcase/button/button-showcase.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'button', component: ButtonShowcaseComponent },
];
