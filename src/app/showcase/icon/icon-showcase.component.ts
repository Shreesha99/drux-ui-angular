import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from '../../tabs/tabs.component';
import { CopyButtonComponent } from '../../copy-button/copy-button.component';
import { DrIconComponent } from 'drux-ui-angular';

@Component({
  selector: 'app-icon-showcase',
  standalone: true,
  imports: [CommonModule, TabsComponent, CopyButtonComponent, DrIconComponent],
  templateUrl: './icon-showcase.component.html',
  styleUrls: ['./icon-showcase.component.scss'],
})
export class IconShowcaseComponent {
  activeTab = 'preview';

  tabs = [
    { label: 'Preview', value: 'preview' },
    { label: 'Code', value: 'code' },
    { label: 'Variants', value: 'variants' },
    { label: 'API', value: 'api' },
  ];

  iconCode = `<dr-icon name="check-circle" size="lg" color="success"></dr-icon>`;
}
