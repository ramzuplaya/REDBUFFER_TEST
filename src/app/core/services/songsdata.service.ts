import { Injectable } from '@angular/core';
import {Song} from '../../models/song.model';

@Injectable({
  providedIn: 'root'
})
export class SongsDataService {
  private songData : Song;
  private playlistSongs:any[]=[];
  private secondPage:boolean = false;
  
  constructor() { 
    this.songData = new Song();
  }
  setTitle(title)
  {
    this.songData.name = title;

  }
  getTitle(){
  return this.songData.name;
  }
  setArtist(artist)
  {
    this.songData.artist = artist;

  }
  getArtist(){
  return this.songData.artist;
  }
  getGenre(){
  return this.songData.genre;
  }
  setGenre(genre){
    this.songData.genre = genre;
  }
  getIndex(){
    return this.songData.index;
    }
    setIndex(index){
      this.songData.index = index;
    }
  getplaylistSongs(){
    return this.playlistSongs ;
    }
    setplaylistSongs(songs){
      this.playlistSongs = songs;
    }
    setsecondPage(page){
this.secondPage = page;
    }
    getsecondPage(){
return this.secondPage;
    }
}
