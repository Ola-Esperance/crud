import { Injectable } from "@angular/core";

import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  doc,
  updateDoc,
  deleteDoc,
  DocumentReference,
  DocumentData,
  getDoc
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private firestore: Firestore) {}

  creatProduct(data: any) {
    const collectionInstance = collection(this.firestore, "produits");
    return addDoc(collectionInstance, data);
  }

  readProduct() {
    const collectionInstance = collection(this.firestore, "produits");
    return collectionData(collectionInstance, { idField: "id" });
  }

  updateProduct(id: string, f: any) {
    const docInstance = doc(this.firestore, "produits", id);
    return updateDoc(docInstance, f);
  }

  deleteProduct(id: string) {
    const docInstance = doc(this.firestore, "produits", id);
    return deleteDoc(docInstance);
  }

  readDetail(articleId: string) {
    const documentInstance: DocumentReference<DocumentData> = doc(
      this.firestore,
      `produits/${articleId}`
    );

    return getDoc(documentInstance);
  }
}
