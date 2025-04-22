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

  setLightTheme(): void {
    this.isDarkTheme = false;
    document.body.classList.add('light-theme');
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }

  private extractRoutes(): void {
    this.searchableComponents = this.flattenRoutes(this.router.config)
      .filter(
        (route) =>
          !!route.path &&
          !route.path.includes('**') &&
          typeof route.component === 'function'
      )
      .map((route) => ({
        name: this.formatName(route.path!),
        route: route.path!.startsWith('/') ? route.path : `/${route.path}`,
      }));
  }

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

  private formatName(path: string): string {
    return path
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  onSearch(event: any): void {
    this.searchQuery = event.target.value;
    this.performSearch(this.searchQuery);
  }

  performSearch(query: string): void {
    const q = query.toLowerCase();
    this.filteredComponents = this.searchableComponents.filter((comp) =>
      comp.name.toLowerCase().includes(q)
    );
  }

  clearSearch(): void {
    this.searchQuery = '';
    this.filteredComponents = [];
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (
      this.searchContainer &&
      !this.searchContainer.nativeElement.contains(event.target)
    ) {
      this.clearSearch();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
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
