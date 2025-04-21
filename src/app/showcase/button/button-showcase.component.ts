import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DrButtonComponent } from 'drux-ui-angular';

@Component({
  selector: 'app-button-showcase',
  standalone: true,
  imports: [DrButtonComponent, CommonModule],
  templateUrl: './button-showcase.component.html',
  styleUrls: ['./button-showcase.component.scss'],
})
export class ButtonShowcaseComponent {
  activeTab: string = 'preview';
  copied: boolean = false;

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  copyCode(): void {
    const code = `<dr-button label="Primary" variant="primary"></dr-button>
<dr-button label="Loading..." [loading]="true" variant="primary"></dr-button>
<dr-button label="Disabled" [disabled]="true" variant="secondary"></dr-button>
<dr-button label="Success" variant="success">
  <i class="bi bi-check"></i>
</dr-button>`;

    const textarea = document.createElement('textarea');
    textarea.value = code;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);

    this.copied = true;
    setTimeout(() => (this.copied = false), 2000);
  }
}
