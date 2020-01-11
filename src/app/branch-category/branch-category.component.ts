import { Response } from './../Models/models';
import { ParentService } from './../Services/parent-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-branch-category',
  templateUrl: './branch-category.component.html',
  styleUrls: ['./branch-category.component.scss']
})
export class BranchCategoryComponent implements OnInit {
  selectedRoute;
  locationData=[];
  categoryList=[];
  categoryFolder = "../../assets/Images/";
  constructor(private api:ParentService,private router:Router,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe( params => {
      console.log(params) 
      this.selectedRoute = params.branchId;
      this.getCategory();
    });
  }

  getCategory(){
    this.api.fetchMenuDetails().subscribe((res:Response)=>{
      this.locationData= res.data.locations;
     let dealerData = this.locationData.filter((dealer) => dealer.dealers_id === this.selectedRoute);
     this.categoryList =[];
     dealerData[0].branches.forEach(element => {
      element.categories.forEach(ele => {
        this.categoryList.push(ele);
      });
     });
     const uniq = new Set(this.categoryList.map(e => JSON.stringify(e)));
     this.categoryList= Array.from(uniq).map(e => JSON.parse(e));
        },(err)=>{

    })

  }

}
