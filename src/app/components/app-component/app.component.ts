import { Component, OnInit } from '@angular/core';
import { SongsCrudService } from '../../core/services/songscrud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AudioApp';
  constructor(private songscrud: SongsCrudService)
  {

  }
  ngOnInit()
  {
    
    
  }
}
