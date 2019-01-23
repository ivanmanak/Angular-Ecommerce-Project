import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timingSafeEqual } from 'crypto';
// import { environment } from 'src/environments/environment';

@Injectable()

export class CategoryService {
  endpoint = `http://127.0.0.1:3000/explorer/`;

  constructor(private http: HttpClient) { }

  getSearch(input) {
    return this.http.get(this.endpoint + `/categories?filter[where][name]=${input.search}`);
  }

  getCategory() {
    return this.http.get(this.endpoint + '/categories')
      .subscribe(data => {
        console.log(data);
      });
  }



  // editCategory(data) {
  //   return this.http.put(this.endpoint, data);
  // }


  // deleteCategory(id) {
  //   return this.http.delete(this.endpoint + `/category/${id}`);
  // }

  // getSearch(input) {
  //   return this.http.get(this.endpoint + `/categories?filter[where][name]=${input.search}`)
  // }

  // getCategory(id) {
  //   return this.http.get(this.endpoint + `/categories/${id}`);
  // }

  // getNewCategory(data) {
  //   return this.http.post(this.endpoint + '/categories', data);
  // }

  // updateCurrent(id, data) {
  //   return this.http.put(this.endpoint + `/categories/${id}`, data);
  // }

  // deleteCategory(id) {
  //   return this.http.delete(this.endpoint + `/categories/${id}`);
  // }

}
