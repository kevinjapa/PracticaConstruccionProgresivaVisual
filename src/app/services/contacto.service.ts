import { Injectable } from '@angular/core';
import { Contacto } from '../domain/contacto';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreCollection  , AngularFirestore} from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  private dbPath = '/contacto';//firebase


  contactos: Contacto[] = []// este es el lugar donde se guardara la informacion de los contactos, este es de tipo arraylist

  contactoRef:AngularFirestoreCollection<Contacto>;//firebase
  constructor(private db:AngularFirestore) {//firebase
    this.contactoRef=db.collection(this.dbPath)
   }

  save(contacto: Contacto){//guarda los contactos en el arraylist
    this.contactos.push(contacto)
    console.log(this.contactos)
    contacto.uid = this.db.createId()
    this.create(contacto)
  }
  getList()
  {
    return this.contactos;// para obtener a los contactos 
  }

  getAll(){
    return this.contactoRef.valueChanges();
  }
  create(contacto:Contacto):any{
    return this.contactoRef.doc(contacto.uid).set({...contacto})
  }
  update(id: string, data:any): Promise<void>{
    return this.contactoRef.doc(id).update(data);
  }

  delete(id: string): Promise<void>{
    return this.contactoRef.doc(id).delete();
    
  }
}
