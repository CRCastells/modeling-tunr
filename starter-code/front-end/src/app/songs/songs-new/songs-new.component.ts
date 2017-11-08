import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs-new',
  templateUrl: './songs-new.component.html',
  styleUrls: ['./songs-new.component.css']
})
export class SongsNewComponent implements OnInit {

	newSong: object = {};

  constructor(
  	private songService: SongsService,
  	private router: Router
  ) { }

  ngOnInit() {
  }

  saveSong(newSong){
  	console.log(newSong);
  	this.songService.saveSong(newSong).subscribe(response => {
  		console.log(response.json());
  		let song = response.json();
  		this.router.navigate([`/songs/${song.id}`])
  	})
  }

}
