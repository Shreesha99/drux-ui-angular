import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  OnInit,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  @ViewChild('searchContainer') searchContainer!: ElementRef;
  @ViewChild('searchInput') searchInput!: ElementRef<HTMLInputElement>;
  isDarkTheme: boolean = false;

  searchQuery: string = '';

  searchableComponents: { name: string; route: string }[] = [];
  filteredComponents: { name: string; route: string }[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.extractRoutes();
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  toggleTheme(): void {
    if (this.isDarkTheme) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  setDarkTheme(): void {
    this.isDarkTheme = true;
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    localStorage.setItem('theme', 'dark');
  }

  // Set light theme
  setLightTheme(): void {
    this.isDarkTheme = false;
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }

  // Dynamically extract routes and their components from Router configuration
  private extractRoutes(): void {
    this.searchableComponents = this.flattenRoutes(this.router.config)
      .filter((route) => route.path && route.component)
      .map((route) => ({
        name: this.formatName(route.path!),
        route: `/${route.path}`,
      }));
  }

  // Utility to flatten nested routes if using nested routing
  private flattenRoutes(routes: any[], parentPath = ''): any[] {
    return routes.flatMap((route) => {
      const fullPath = parentPath + (route.path ? `/${route.path}` : '');
      const flat = { ...route, path: fullPath.replace('//', '/') };

      if (route.children) {
        return [flat, ...this.flattenRoutes(route.children, fullPath)];
      }

      return [flat];
    });
  }

  // Format the component name to a more human-readable form
  private formatName(path: string): string {
    return path
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Method to perform search based on query
  onSearch(event: any): void {
    this.searchQuery = event.target.value;
    this.performSearch(this.searchQuery);
  }

  // Filter components based on the search query
  performSearch(query: string): void {
    const q = query.toLowerCase();
    this.filteredComponents = this.searchableComponents.filter((comp) =>
      comp.name.toLowerCase().includes(q)
    );
  }

  // Clear search results and input field
  clearSearch(): void {
    this.searchQuery = '';
    this.filteredComponents = [];
  }

  // Close search dropdown when clicking outside of it
  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (
      this.searchContainer &&
      !this.searchContainer.nativeElement.contains(event.target)
    ) {
      this.clearSearch();
    }
  }

  // Listen for keyboard shortcuts (Ctrl + K or Cmd + K)
  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    // Check if the pressed keys are Ctrl/Cmd + K
    if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
      event.preventDefault();
      this.focusSearch();
    }
  }

  focusSearch(): void {
    if (this.searchInput) {
      this.searchInput.nativeElement.focus();
    }
  }
}
