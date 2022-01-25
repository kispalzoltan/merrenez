import { collectExternalReferences } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Score } from '../shared/models/scores.model';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService {

  constructor(private afs: AngularFirestore) { }

  //Score hozzáadás
  async add(collectionName: string, data:Score , id?: string):Promise<String>{
    const uid = id? id: this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

   weakadd(collectionName:string, data: Score){
    return this.afs.collection(collectionName).add(data);
  }

  //lekérés
  get(collectionName: string): Observable<Score[]>{
    return this.afs.collection(collectionName).valueChanges() as Observable<Score[]> ;
  }

  getById(colletionName: string, id: string): Observable<any>{
    return this.afs.collection(colletionName).doc(id).valueChanges();
  }

  update(colletionName: string, id: string, data: any){
    return this.afs.collection(colletionName).doc(id).update(data);
  }
  delete(colletionName: string, id: string){
    return this.afs.collection(colletionName).doc(id).delete();
  }
  
}
