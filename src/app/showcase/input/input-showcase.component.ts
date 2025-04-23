import { Component } from '@angular/core';
import { CopyButtonComponent } from '../../copy-button/copy-button.component';
import { TabsComponent } from '../../tabs/tabs.component';
import { DrInputComponent } from 'drux-ui-angular';

@Component({
  selector: 'app-input-showcase',
  standalone: true,
  imports: [CopyButtonComponent, TabsComponent, DrInputComponent],
  templateUrl: './input-showcase.component.html',
  styleUrl: './input-showcase.component.scss',
})
export class InputShowcaseComponent {
  activeTab = 'preview';
  tabs = [
    { label: 'Preview', value: 'preview' },
    { label: 'Code', value: 'code' },
    { label: 'Variants', value: 'variants' },
    { label: 'API', value: 'api' },
  ];

  inputCode: string = `<dr-input placeholder="Enter text"></dr-input>`;
}
