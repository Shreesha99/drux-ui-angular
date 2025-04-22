import { Component } from '@angular/core';
import { CopyButtonComponent } from '../../copy-button/copy-button.component';
import { TabsComponent } from '../../tabs/tabs.component';
import { DrAccordionComponent } from 'drux-ui-angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-accordion-showcase',
  standalone: true,
  imports: [
    CopyButtonComponent,
    TabsComponent,
    DrAccordionComponent,
    CommonModule,
  ],
  templateUrl: './accordion-showcase.component.html',
  styleUrl: './accordion-showcase.component.scss',
})
export class AccordionShowcaseComponent {
  activeTab = 'preview';

  tabs = [
    { label: 'Preview', value: 'preview' },
    { label: 'Code', value: 'code' },
    // { label: 'Variants', value: 'variants' },
  ];

  accordionCode = `<dr-accordion title="Accordion Title">
  <p>This is the content of the accordion.</p>
</dr-accordion>`;
}
