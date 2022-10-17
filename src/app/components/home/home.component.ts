import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public data:DataService) { }
  state = false;
  comics:any;
  comic:any;
  characters:any;

  ngOnInit(): void {
    this.data.getComics().subscribe(res=>{
      this.comics = res;
      this.comics = this.comics.data.results;
    })
  }

  cambio(event:any, comic: any){
    this.state = !this.state;
    if(this.state === true){
      this.comic = comic;
      this.data.getComicCharacters(comic.id).subscribe(res=>{
        this.characters = res;
        this.characters = this.characters.data.results;
      })
    }
  }

  volver(event:any){
    this.state = !this.state;
    this.comic = null;
    this.characters = null;
  }

}
