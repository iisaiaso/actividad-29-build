import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Producto } from 'src/iterfaces/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private fireStore: Firestore) { }
  getPoduct(): Observable<Producto[]> {
    const productoRef = collection(this.fireStore, 'productos')
    return collectionData(productoRef, { idField: 'id' }) as Observable<Producto[]>
  }
}
