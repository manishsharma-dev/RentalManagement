import {Response, Location, Branch, Category, SubCategory } from './../Models/models';
import { ParentService } from './../Services/parent-service.service';
import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
headerTitle:string = "RENTAL MANAGEMENT SYSTEM";
menuItems: Location;
@ViewChild("childMenu",{static:true}) public childMenu;
  constructor(private api: ParentService) { }

  ngOnInit() {
    this.fetchMenu();
  }

  fetchMenu(){

    this.api.fetchMenuDetails().subscribe((res:Response )=>{
        this.menuItems = res.data.locations;
        console.log(this.menuItems);
    },(err)=>{
      console.log(err);
    })
  }

}
