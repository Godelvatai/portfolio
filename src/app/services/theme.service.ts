import { DOCUMENT } from '@angular/common';
import { inject, Injectable } from '@angular/core';

export type Theme = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly document = inject(DOCUMENT);


  constructor() { }

  setTheme(theme: string) {
    if (theme === 'dark') {
      this.document.documentElement.classList.add('dark-mode');
      this.document.body.classList.add('dark-mode');
    } else {
      this.document.documentElement.classList.remove('dark-mode');
      this.document.body.classList.remove('dark-mode');
    }
  }
}
