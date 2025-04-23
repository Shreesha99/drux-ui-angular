import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../../tabs/tabs.component';
import { CopyButtonComponent } from '../../copy-button/copy-button.component';
import { DrTextareaComponent } from 'drux-ui-angular';

@Component({
  selector: 'app-textarea-showcase',
  standalone: true,
  imports: [
    CommonModule,
    TabsComponent,
    CopyButtonComponent,
    DrTextareaComponent,
  ],
  templateUrl: './textarea-showcase.component.html',
  styleUrls: ['./textarea-showcase.component.scss'],
})
export class TextareaShowcaseComponent {
  activeTab = 'preview';
  textareaModel = '';

  tabs = [
    { label: 'Preview', value: 'preview' },
    { label: 'Code', value: 'code' },
    { label: 'Variants', value: 'variants' },
    { label: 'API', value: 'api' },
  ];

  textareaCode = `<dr-textarea label="Message" placeholder="Enter your message" [(model)]="textareaModel" [maxLength]="200"  showCharCount ></dr-textarea>`;
}
