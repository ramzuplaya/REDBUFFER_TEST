import { Component, OnInit } from '@angular/core';
import { SongsDataService} from '../../../core/services/songsdata.service'
import { Song} from '../../../models/song.model';

declare var $:any;
@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.component.html',
  styleUrls: ['./song-player.component.css']
})
export class SongPlayerComponent implements OnInit {
  
  //*****Variables******/
  song: Song;
  ispausesong: boolean = false;
  songFilesDir: string = '../../../../assets/songfiles/';
  songFiles:any =[];
  //**********************/

  constructor(private songsService: SongsDataService) 
  { this.song = new Song();
  this.song.currentSong = new Audio();

  }

  ngOnInit() {
   
    debugger;
    this.songFiles = this.songsService.getplaylistSongs();
    this.song.index = this.songsService.getIndex();
      this.song.currentSong.src =this.songFilesDir+(this.songFiles[this.song.index ].name);
      this.song.currentSong.load();
      this.playSong();
      this.ispausesong =true;
      this.setAudioListeners(this.song.currentSong);
    

  }
  getDuration(src, cb) {
    var audio = new Audio();
    $(audio).on("loadedmetadata", function(){
        cb(audio.duration);
    });
    audio.src = this.song.currentSong.src;
  }


  setAudioListeners(nowPlaying){
    //TIME UPDATE LISTENER 
    this.song.currentSong.addEventListener("timeupdate", ()=>{
     
      //TIMEUPDATE event gives metadata of Audio , it is called when audio starts playing
      this.song.length = Math.round(nowPlaying.duration);
      this.song.currentTimeSong= Math.round(nowPlaying.currentTime);
      
      
      $("#nowPlayingTime").text(this.getSongDurationFormat(this.song.currentTimeSong,"currentTime"));
      $("#TotalDuration").text(this.getSongDurationFormat(this.song.length,"duration"));

      //When Song Ends
      if (this.song.length == this.song.currentTimeSong){
        this.ispausesong = false;
      }
      });
    
  }

 
  getSongDurationFormat(time,typeOfTime)
  {
    var Seconds,Minutes;
    //converting current song time and final duration time
    if (typeOfTime == "currentTime"){
      Seconds =Math.round(Number(this.song.currentTimeSong % 60));
      Minutes= Math.round(Number((this.song.currentTimeSong / 60) % 60));
    }
    else{
      Seconds =Math.round(Number(this.song.length % 60));
      Minutes= Math.round(Number((this.song.length / 60) % 60));
    }
    
    return Minutes+":"+Seconds;
  }


  toggleplaypause(){
    this.ispausesong = this.ispausesong == true ? false: true;
    if (!this.ispausesong)  // !this.ispausesong means that song is currently running
    {
      this.pauseSong();
    }
    else{
      this.playSong();
    }

  }

  setSongDetails(){
    this.songsService.setTitle(this.songFiles[this.song.index].name.split('.')[0]);
    this.songsService.setArtist(this.songFiles[this.song.index].artist);
    this.songsService.setGenre(this.songFiles[this.song.index].genre);
  }

  playSong(){
    debugger;
    this.song.currentSong.play();
    this.setSongDetails();

  }

  pauseSong(){
    debugger;
    this.song.currentSong.pause();
    this.setSongDetails();
  }

   playPreviousSong(){
    this.pauseSong();
    //When First song is playing then Last song will load
    if ( this.song.index-1 < 0)
    {
      this.song.index =this.songFiles.length-1;
    }
    else{
      this.song.index--;
    }
    this.song.currentSong.src =this.songFilesDir+this.songFiles[ this.song.index].name;
    this.setSongDetails();
    this.song.currentSong.load();
    this.song.currentSong.play();
  }

  playNextSong(){
    debugger;
    this.pauseSong(); 
    //When Last song is playing then first song will load
    if ( this.song.index+1 >this.songFiles.length-1)
    {
      this.song.index =0;
    }
    else{
      this.song.index++;
    }
    this.song.currentSong.src =this.songFilesDir+this.songFiles[ this.song.index].name;
    this.setSongDetails();
    this.song.currentSong.load();
    this.song.currentSong.play();

  }
  
}

