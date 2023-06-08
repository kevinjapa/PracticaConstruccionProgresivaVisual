import { Injectable } from '@angular/core';
import { Producto } from '../domain/producto';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Contacto } from '../domain/contacto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private dbPath = '/producto';//firebase
  productoRef:AngularFirestoreCollection<Producto>;//firebase
  productos: Producto[] = []

  constructor(private db:AngularFirestore) { 
    this.productoRef=db.collection(this.dbPath)
  }

  save(producto: Producto){//guarda los contactos en el arraylist
    this.productos.push(producto)
    console.log(this.productos)
    producto.uid = this.db.createId()
    this.create(producto)
  }

  getList(){
    return this.productos
  }

  getAll(){
    return this.productoRef.valueChanges();
  }

  create(producto:Producto):any{
    return this.productoRef.doc(producto.uid).set({...producto})
  }
  update(id: string, data:any): Promise<void>{
    return this.productoRef.doc(id).update(data);
  }

  delete(id: string): Promise<void>{
    return this.productoRef.doc(id).delete();
    
  }
}
