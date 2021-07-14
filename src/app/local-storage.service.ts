import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public setItem(key: string, value: string) : any {
    localStorage.setItem(key, value);
  }
    
  public getItem(key: string ) : any { 
    return localStorage.getItem(key);
  }  
  
  public clear(){
    localStorage.clear(); 
  }

}
