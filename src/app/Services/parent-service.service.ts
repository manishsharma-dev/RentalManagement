import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ParentService {

  constructor(private http:HttpClient) { }

  fetchMenuDetails(){
    try{
      return this.http.get("http://localhost:4200/assets/catalog.json")
      .pipe(
        map((res) => res))
    }
    catch(ex){

    }
  }
}
