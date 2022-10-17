import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public http:HttpClient) { }
  
  getComics(){
    return this.http.get('http://gateway.marvel.com/v1/public/comics?orderBy=modified&limit=32&apikey=25739d0e5fe15729858f01726a1cf14d&hash=7b39f15ded995395a2a0487703982baa&ts=1');
  }
  getComicCharacters(comicId:any){
    return this.http.get(`http://gateway.marvel.com/v1/public/comics/${comicId}/characters?apikey=25739d0e5fe15729858f01726a1cf14d&hash=7b39f15ded995395a2a0487703982baa&ts=1`);
  }
}
