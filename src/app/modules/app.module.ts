import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from '../components/app-component/app.component';
import { HeaderComponent } from '../components/page1/header/header.component';
import { HomeContentComponent } from '../components/page1/home-content/home-content.component';
import { SongDetailComponent } from '../components/page2/song-detail/song-detail.component';
import { SongPlayerComponent } from '../components/page2/song-player/song-player.component';
import {SongsDataService} from '../core/services/songsdata.service';
import {SongsCrudService} from '../core/services/songscrud.service';
import {PageTwoComponent} from '../components/page2/page-two/page-two.component'; 
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeContentComponent,
    SongDetailComponent,
    SongPlayerComponent,
    PageTwoComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [SongsDataService,SongsCrudService],
  bootstrap: [AppComponent]
})
export class AppModule { }
