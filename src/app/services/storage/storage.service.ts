import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  public set(key: string, value: any) {
    return this.storage.set(key, value);
  }

  public async get(key: string) {
    return this.storage.get(key)
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public length() {
    return this.storage.length;
  }

  public removeAll(){
    return this.storage.clear();
  }

  public getKeys(){
    return this.storage.keys();
  }
}
