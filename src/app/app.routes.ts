// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { WelcomeComponent } from './showcase/welcome/welcome.component';
import { ButtonShowcaseComponent } from './showcase/button/button-showcase.component';
import { InputShowcaseComponent } from './showcase/input/input-showcase.component';
import { AccordionShowcaseComponent } from './showcase/accordion/accordion-showcase.component';
import { ErrorComponent } from './showcase/error/error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'accordion', component: AccordionShowcaseComponent },
  { path: 'button', component: ButtonShowcaseComponent },
  { path: 'input', component: InputShowcaseComponent },
  { path: '**', component: ErrorComponent },
];
