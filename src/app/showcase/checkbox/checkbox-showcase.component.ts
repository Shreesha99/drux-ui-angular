import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../../tabs/tabs.component';
import { CopyButtonComponent } from '../../copy-button/copy-button.component';
import { DrCheckboxComponent } from 'drux-ui-angular';

@Component({
  selector: 'app-checkbox-showcase',
  standalone: true,
  imports: [
    CommonModule,
    TabsComponent,
    CopyButtonComponent,
    DrCheckboxComponent,
  ],
  templateUrl: './checkbox-showcase.component.html',
  styleUrls: ['./checkbox-showcase.component.scss'],
})
export class CheckboxShowcaseComponent {
  activeTab = 'preview';
  checkboxModel = true;
  disabledModel = false;
  requiredModel = false;
  errorMessage = 'This field is required';

  tabs = [
    { label: 'Preview', value: 'preview' },
    { label: 'Code', value: 'code' },
    { label: 'Variants', value: 'variants' },
    { label: 'API', value: 'api' },
  ];

  checkboxCode = `<dr-checkbox label="Accept Terms" [(model)]="checkboxModel" [disabled]="false" [required]="true" [error]="errorMessage"></dr-checkbox>`;
}
