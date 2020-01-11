import { ParentService } from './../Services/parent-service.service';
import { Component, OnInit } from '@angular/core';
import {Response, Location, Branch, Category, SubCategory } from './../Models/models';
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  constructor(private api:ParentService,private route:ActivatedRoute) { }
  locationData=[];
  categoryList = [];
  selectedRoute:string ="";
  ngOnInit() {
    
    this.route.params.subscribe( params => {
      console.log(params) 
      this.selectedRoute = params.branchId;
      this.getCategory();
    });
  }

  getCategory(){
    try{
      this.api.fetchMenuDetails().subscribe((res:Response)=>{
this.locationData= res.data.locations;

let newData = this.locationData.filter((element) => 
    element.branches.some((subElement) => subElement.branch_id === this.selectedRoute))
  .map(element => {
    let newElt = Object.assign({}, element); 
    return newElt.branches.filter(subElement => subElement.branch_id ===  this.selectedRoute);
  });

this.categoryList = newData[0][0].categories;
      });
    }
    catch(ex){

    }
  }

}

