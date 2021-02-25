import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Theme } from '../models/Theme';

@Injectable({
  providedIn: 'root'
})
export class ThemeHttpService {

  constructor(private httpClient: HttpClient) { }

  findAll(){
    return this.httpClient.get<Theme[]>('http://localhost:3000/themes') 
  }

  findById(id:number){
    return this.httpClient.get<Theme>(`http://localhost:3000/themes/${id}`) 
  }

  save(theme:Theme){
    return this.httpClient.post<Theme>(`http://localhost:3000/themes`, theme);
  }

  update(theme:Theme){
    return this.httpClient.put<Theme>(`http://localhost:3000/themes`, theme);
  }

  delete(id:number){
    return this.httpClient.delete(`http://localhost:3000/themes/${id}`);
  }


}
