import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SongsCrudService {

  constructor(private http:HttpClient) { 

  }
  createDatabase()
  {
    this.http.get('http://localhost:3000/createdb').subscribe(
      res => {
        console.log("Database Successfully Created ...");
      }
    )
  }
  createTable()
  {
    this.http.get('http://localhost:3000/createsongstable').subscribe(
      res => {
        console.log("Tble Successfully Created ...");
      }
    )
  }
  insertSong(songsData)
  {
    debugger;
    this.http.post('http://localhost:3000/insertsongstable',songsData).subscribe(
      res => {
        console.log("Song Successfully Inserted in DB ...");
      }
    )
  }
   getAllSongs()
  {
    debugger;
    return this.http.get('http://localhost:3000/getallsongs');
    
  }
}
