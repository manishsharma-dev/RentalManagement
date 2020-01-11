import { SubCategoryComponent } from './sub-category/sub-category.component';
import { BranchCategoryComponent } from './branch-category/branch-category.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:"", redirectTo:"home",pathMatch:"full"
  },
  {
    path:"home",component:HomeComponent
  },
  {
    path:"category/:branchId",component:CategoryComponent
  },
  {
    path:"branchcategory/:branchId",component:BranchCategoryComponent
  },
  {
    path:"branchcategory/:branchId/equipment/:Id",component:SubCategoryComponent
  },
  {
    path:"category/:categoryId/equipment/:Id",component:SubCategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
