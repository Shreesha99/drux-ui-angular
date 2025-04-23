import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrButtonComponent } from 'drux-ui-angular';
import { TabsComponent } from '../../tabs/tabs.component';
import { CopyButtonComponent } from '../../copy-button/copy-button.component';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [
    CommonModule,
    DrButtonComponent,
    TabsComponent,
    CopyButtonComponent,
  ],
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss'],
})
export class ButtonShowcaseComponent {
  activeTab = 'preview';

  tabs = [
    { label: 'Preview', value: 'preview' },
    { label: 'Code', value: 'code' },
    { label: 'Variants', value: 'variants' },
    { label: 'API', value: 'api' },
  ];

  buttonCode = `<dr-button label="Primary" variant="primary"></dr-button>`;
}
