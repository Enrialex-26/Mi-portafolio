import { Component, HostListener, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  protected readonly showBackToTop = signal(false);

  @HostListener('window:scroll')
  protected updateBackToTopVisibility(): void {
    this.showBackToTop.set(window.scrollY > 280);
  }
}
