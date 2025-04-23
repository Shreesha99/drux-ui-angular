// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { WelcomeComponent } from './showcase/welcome/welcome.component';
import { ButtonShowcaseComponent } from './showcase/button/button-showcase.component';
import { InputShowcaseComponent } from './showcase/input/input-showcase.component';
import { AccordionShowcaseComponent } from './showcase/accordion/accordion-showcase.component';
import { ErrorComponent } from './showcase/error/error.component';
import { IconShowcaseComponent } from './showcase/icon/icon-showcase.component';
import { TextareaShowcaseComponent } from './showcase/textarea/textarea-showcase.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'button', component: ButtonShowcaseComponent },
  { path: 'inputtext', component: InputShowcaseComponent },
  { path: 'icon', component: IconShowcaseComponent },
  { path: 'textarea', component: TextareaShowcaseComponent },
  { path: '**', component: ErrorComponent },
];
