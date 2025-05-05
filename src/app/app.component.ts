import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ThemeService } from './services/theme.service';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterOutlet, MatSlideToggleModule],
  template: `
    <div class="wrapper">
      <header class="banner">
        <div class="lightdark-toggle-container"><mat-slide-toggle (change)="changeTheme($event)">Dark Mode</mat-slide-toggle></div>
        <div class="portfolio-name">Dustin Craven</div>
        <div class="portfolio-jobtitle">Full Stack<br>Web Developer</div>
      </header>

      <main class="main-content">
        <section class="content">
          <router-outlet />
        </section>
      </main>
    </div>
  `,
  styles: [
    `
      .lightdark-toggle-container {
        position: absolute;
        right: 0;
        top: 0;
        margin-top: 1%;
        margin-right: 5%;
      }

      .banner {
        width: 100%;
        height: 300px;
        background: linear-gradient(to bottom, #9B668A, #3C0D5E);
        clip-path: polygon(0% 0%, 100% 0%, 100% 90%, 85% 85%, 70% 90%, 50% 80%, 30% 90%, 15% 85%, 0% 90%);
      }

      .portfolio-name {
        margin-left: 15%;
        margin-top: 5%;
        position: absolute;
        font-family: 'Roboto';
        font-size: 4.25rem !important;
        color: #3C0D5E !important;
        letter-spacing: 5px !important;
        text-shadow: 2px 2px 10px rgba(255, 255, 255, 0.5), 0 0 25px rgba(255, 255, 255, 0.7), 0 0 5px rgba(255, 255, 255, 0.7) !important;
        font-weight: bold !important;
      }

      .portfolio-jobtitle {
        right: 0;
        top: 0;
        margin-right: 10%;
        margin-top: 8%;
        position: absolute;
        font-family: 'Roboto';
        font-size: 2.25rem !important;
        line-height: 1.25;
        color: #3C0D5E !important;
        letter-spacing: 2px !important;
        text-shadow: 1px 1px 5px rgba(255, 255, 255, 0.5), 0 0 12px rgba(255, 255, 255, 0.7), 0 0 2px rgba(255, 255, 255, 0.7) !important;
        font-weight: bold !important;
      }
    `
  ]
})
export class AppComponent {
  private readonly themeService = inject(ThemeService);

  changeTheme(e: { checked: any; }) {
    if(e.checked) {
      this.themeService.setTheme('dark');
    } else {
      this.themeService.setTheme('light');
    }
  }
}
