import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-songs-edit',
  templateUrl: './songs-edit.component.html',
  styleUrls: ['./songs-edit.component.css']
})
export class SongsEditComponent implements OnInit {
	updatedSong: object = {};

  constructor(
    private songsService: SongsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      let id :number = Number(param.get('id'));
      this.songsService.getOneSong(id).subscribe(response => {
        console.log(response.json());
        this.updatedSong = response.json();
      });
    })
  }

  updateSong(updatedSong) {
  	console.log('Updating Song...');
  	this.songsService.updateSong(updatedSong).subscribe(response => {
      console.log(response.json());
      let song = response.json();
      this.router.navigate([`/songs/${song.id}`])
    });
  }

}
