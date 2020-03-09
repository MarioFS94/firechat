import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private itemsCollection: AngularFirestoreCollection<any>;
  chats: any[] = [];

  constructor(private afs: AngularFirestore) { }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<any>('chats');
    //esto retorna un observable, ya que tiene el metodo subscribe()
    return this.itemsCollection.valueChanges();//con esto estoy pendiente de todos los cambios que haya en ese nodo de chats
  }
}
