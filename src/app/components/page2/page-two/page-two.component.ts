import { Component, OnInit, ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import {SongsDataService} from '../../../core/services/songsdata.service';
import {SongPlayerComponent} from '../song-player/song-player.component';
import { PlayerIndex } from '@angular/core/src/render3/interfaces/player';
@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  //Accessing Child Components to 
  @ViewChild(SongPlayerComponent) PlayerIndex : SongPlayerComponent;

  constructor(private router:Router,private songsdataService:SongsDataService) { }

  ngOnInit() {
  }
  moveToFirstPage(){
    this.resetCurrentSongControls();
    this.songsdataService.setsecondPage(false);
    this.router.navigateByUrl('/firstpage');
  }
  resetCurrentSongControls()
  {
    this.PlayerIndex.song.currentSong.pause();
    this.PlayerIndex.song.length=0;
    this.PlayerIndex.song.currentTimeSong=0;
  }
}
