import { FooterComponent } from '@/layouts/footer/footer.component';
import { HeaderComponent } from '@/layouts/header/header.component';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  template: `
    <header-gallery></header-gallery>
    <router-outlet></router-outlet>

    <footer-gallery></footer-gallery>
  `,
  styles: ``,
})
export default class HomeComponent {}
