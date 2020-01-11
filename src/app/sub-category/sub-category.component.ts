import { Response } from './../Models/models';
import { ParentService } from './../Services/parent-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';

@Component({
  selector: 'app-sub-category',
  templateUrl: './sub-category.component.html',
  styleUrls: ['./sub-category.component.scss']
})
export class SubCategoryComponent implements OnInit {
  locationData=[];
  selectedRoute;
  equipmetList=[];
  branchId;
  categoryId;
  subCategoryList = [];
  constructor(private route:ActivatedRoute,private router:Router,private api:ParentService) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.selectedRoute = params.Id; 
      if(params.categoryId){
        this.categoryId = params.categoryId
      } 
      else{
        this.branchId = params.branchId;
      }    
      this.getCategory();
    });    
  }
  getCategory(){
    try{
      this.api.fetchMenuDetails().subscribe((res:Response)=>{
this.locationData= res.data.locations;
this.subCategoryList = [];
this.locationData.forEach(element => {
    element.branches.forEach(el => {
      el.categories.forEach(e => {
        if(e.name===this.selectedRoute){
        e.subcategories.forEach(sub => {
          this.subCategoryList.push(sub);
        });
        }
      });       
    });    
  });
  const uniq = new Set(this.subCategoryList.map(e => JSON.stringify(e)));
  this.subCategoryList= Array.from(uniq).map(e => JSON.parse(e));

      });
    }
    catch(ex){

    }
  }
}
