import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  async getCollection<T extends object>(collectionPath: string): Promise<Array<T & { id: string }>> {
    const [{ collection, getDocs }, { getFirestoreInstance }] = await Promise.all([
      import('firebase/firestore'),
      import('../firebase.config'),
    ]);
    const firestore = await getFirestoreInstance();
    const snapshot = await getDocs(collection(firestore, collectionPath));

    return snapshot.docs.map((document) => {
      const data = document.data() as T;
      return { ...data, id: document.id };
    });
  }

  async addContactMessage(message: {
    name: string;
    email: string;
    message: string;
  }): Promise<void> {
    const [{ addDoc, collection, serverTimestamp }, { getFirestoreInstance }] =
      await Promise.all([
        import('firebase/firestore'),
        import('../firebase.config'),
      ]);
    const firestore = await getFirestoreInstance();

    await addDoc(collection(firestore, 'contactMessages'), {
      ...message,
      createdAt: serverTimestamp(),
    });
  }
}
