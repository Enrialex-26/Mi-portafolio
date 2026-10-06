import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  protected readonly formSubmitted = signal(false);

  protected onSubmit(event: SubmitEvent): void {
    event.preventDefault();
    this.formSubmitted.set(true);
  }
}
