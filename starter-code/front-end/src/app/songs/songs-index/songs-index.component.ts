import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';

@Component({
  selector: 'app-songs-index',
  templateUrl: './songs-index.component.html',
  styleUrls: ['./songs-index.component.css']
})
export class SongsIndexComponent implements OnInit {

	allSongs : Array<any> = [];

	constructor(
  	private songsService: SongsService
  ) { }

  ngOnInit() {
  	this.songsService.getAllSongs().subscribe(response => {
  		console.log(response.json());
  		this.allSongs = response.json();
  	})
  }

  deleteSong(deletedSong){
  	this.songsService.deleteSong(deletedSong).subscribe(response => {
  		console.log(response);
  		let songIndex = this.allSongs.indexOf(deletedSong);
  		this.allSongs.splice(songIndex,1);
  	})
  }

}
