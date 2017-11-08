import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SongsService {

	baseUrl = 'http://localhost:3000/api/songs'

  constructor(private http: Http) { }

  getAllSongs() {
  	return this.http.get(`${this.baseUrl}`);
  }

  getOneSong(songId){
  	console.log(songId);
  	return this.http.get(`${this.baseUrl}/${songId}`);
  }

  deleteSong(song){
  	console.log(song);
  	return this.http.delete(`${this.baseUrl}/${song.id}`);
  }

  saveSong(newSong){
  	console.log(newSong);
  	return this.http.post(`${this.baseUrl}`, newSong);
  }

  updateSong(updatedSong){
  	console.log(updatedSong);
  	return this.http.put(`${this.baseUrl}/${updatedSong.id}`, updatedSong);
  }
}
