import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-infouser',
  templateUrl: './infouser.component.html',
  inputs: ['empList'],
  styleUrls: ['./infouser.component.css']
})
export class InfouserComponent implements OnInit {
	public roles: string;
	emplist: any = [];
  empList: any = [
    { name: "Abraham", role: "Admin", companyName: "AcadGild" },
    { name: "Adam", role: "Admin", companyName: "IBM" },
    { name: "Jose", role: "Supervisor", companyName: "Infosys" },
    { name: "Bill", role: "Super admin", companyName: "IBM" },
    { name: "Jack", role: "Admin", companyName: "HP" },
    { name: "Burney", role: "Member", companyName: "HP" },
    { name: "Justin", role: "Member", companyName: "HP" },
    { name: "Bob", role: "Supervisor", companyName: "HP" },
  ];
	constructor(private route: ActivatedRoute) { }
  
  ngOnInit() {
  	this.route.params.subscribe(params=>{
			this.roles = params['role'];
			
  	})
  }

}
