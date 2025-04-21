import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() activeTab: string = '';
  @Output() activeTabChange = new EventEmitter<string>();
  @Input() tabs: { label: string; value: string }[] = [];

  ngOnInit() {
    console.log('Tabs received:', this.tabs);
  }

  setActiveTab(tabValue: string) {
    this.activeTab = tabValue;
    this.activeTabChange.emit(this.activeTab);
  }
}
