import { Component, OnInit } from '@angular/core';
import { SongsDataService} from '../../../core/services/songsdata.service'

@Component({
  selector: 'app-song-detail',
  templateUrl: './song-detail.component.html',
  styleUrls: ['./song-detail.component.css']
})
export class SongDetailComponent implements OnInit {
  
  constructor(private songsService: SongsDataService) { }

  ngOnInit() {
 
  }

}
