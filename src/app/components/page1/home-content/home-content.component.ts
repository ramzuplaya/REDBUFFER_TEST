import { Component, OnInit } from '@angular/core';
import {Song} from '../../../models/song.model';
import {Router} from '@angular/router';
import {SongsCrudService} from '../../../core/services/songscrud.service';
import {SongsDataService} from '../../../core/services/songsdata.service';
import {HttpClient} from '@angular/common/http'



declare var $:any;
@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {
  
  AddSongObject: Song;
  Songs:any=[];
  uploadedFiles :File = null;
  constructor(private router:Router, private SongsCrud:SongsCrudService, private songsService: SongsDataService,private http:HttpClient) {
    this.AddSongObject = new Song();
  }

  ngOnInit() {
      this.getAllSongs();
  }
  moveToSecondPage(index)
  {
    this.songsService.setIndex(index);
    this.songsService.setsecondPage(true) ;
    
    this.router.navigateByUrl('/secondpage');
  }
  openAddSongsModal(){
    $('.modal').show();
  }
  getFileName(event: any){
    debugger;
    this.AddSongObject.name = event.currentTarget.files[0].name;
    this.uploadedFiles = <File> event.currentTarget.files[0];
    this.AddSongObject.length = event.currentTarget.files[0].size/36000;
  }
  
  AddSong(){
    
    
    //Uploading File
    let formData = new FormData();
    formData.append("upload", this.uploadedFiles, this.uploadedFiles.name);
    this.http.post('http://localhost:3000/upload', formData)
    .subscribe((response) => {
      debugger;
         console.log('response received is ', response);
         

    })

    // //Storing in Database
    this.SongsCrud.insertSong(this.AddSongObject);
    $('#SongsInfoModal').modal('toggle');
    this.getAllSongs();
  }
  getAllSongs(){
    debugger;
    this.SongsCrud.getAllSongs().subscribe(res => {
      this.Songs = res;
      this.songsService.setplaylistSongs(this.Songs);
    })
    
  }
}
