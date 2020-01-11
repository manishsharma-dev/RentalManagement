export class SubCategory{
 name: string;
 image:string;
}

export class Category extends SubCategory {
    SubCategory:SubCategory
}

export class Branch{
    branch_id:string;
    name:string;
    categories:Category;
}

export class Location{
    dealers_id:string;
    opco:string;
    name:string;
    branches:Branch
}

export class Response{
    success:boolean;
    data:any;
    error:Object;

}

