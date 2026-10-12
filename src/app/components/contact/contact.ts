import { Component, inject, signal } from '@angular/core';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  imports: [],
  selector: 'app-contact',
  styleUrl: './contact.css',
  templateUrl: './contact.html',
})
export class Contact {
  private readonly firestoreService = inject(FirestoreService);
  protected readonly submitState = signal<'idle' | 'sending' | 'success' | 'error'>('idle');

  protected async onSubmit(event: SubmitEvent): Promise<void> {
    event.preventDefault();

    if (this.submitState() === 'sending') {
      return;
    }

    const form = event.currentTarget;
    if (!(form instanceof HTMLFormElement) || !form.reportValidity()) {
      return;
    }

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      this.submitState.set('error');
      return;
    }

    this.submitState.set('sending');

    try {
      await this.firestoreService.addContactMessage({
        name: name.trim(),
        email: email.trim(),
        message: message.trim(),
      });
      form.reset();
      this.submitState.set('success');
    } catch (error) {
      console.error('No se pudo guardar el mensaje de contacto en Firestore.', error);
      this.submitState.set('error');
    }
  }
}
