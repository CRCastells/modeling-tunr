import { Component, OnInit } from '@angular/core';
import { SongsService } from '../songs.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-songs-show',
  templateUrl: './songs-show.component.html',
  styleUrls: ['./songs-show.component.css']
})
export class SongsShowComponent implements OnInit {

	oneSong: object = {}

  constructor(
  	private songsService: SongsService,
  	private route: ActivatedRoute
  ) { }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
  		let id = Number(params.get('id'));
  		this.songsService.getOneSong(id).subscribe(response => {
  			this.oneSong = response.json();
  		});
  	});
  }
}
