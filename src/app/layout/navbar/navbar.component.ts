import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  searchQuery: string = '';

  onSearch(event: any): void {
    this.searchQuery = event.target.value;
    this.performSearch(this.searchQuery);
  }

  performSearch(query: string): void {
    // Simulating a search operation with the query
    console.log(`Searching for: ${query}`);
    // Implement your search logic here (e.g., filtering components based on query)
  }
}
