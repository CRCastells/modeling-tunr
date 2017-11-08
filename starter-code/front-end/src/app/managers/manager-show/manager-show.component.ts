import { Component, OnInit } from '@angular/core';
import { ManagersService } from '../managers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manager-show',
  templateUrl: './manager-show.component.html',
  styleUrls: ['./manager-show.component.css']
})
export class ManagerShowComponent implements OnInit {

	oneManager: object = {};

  constructor(private managersService: ManagersService, private route: ActivatedRoute) { }

  ngOnInit() {
  	this.route.paramMap.subscribe(params => {
  		let id = Number(params.get('id'));
  		this.managersService.getOneManager(id).subscribe(response => {
  			console.log(response.json());
  			this.oneManager = response.json();
  		});
  	});
  }
}
