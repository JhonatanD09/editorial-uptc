import { Injectable } from '@angular/core';
import {Firestore, collection, collectionData} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import network from '../interfaces/network';
@Injectable({
  providedIn: 'root'
})
export class NetworsService {

  constructor(private firestore: Firestore) { }

  getNetworsLinks():Observable<network[]>{
    const placeRef = collection(this.firestore,'social')
    return collectionData(placeRef,{idField: 'id'}) as Observable<network[]>
  }
}
