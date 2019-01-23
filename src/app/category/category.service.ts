import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CategoryService {
  endpoint = `http://127.0.0.1:3000/explorer/`;

  constructor(private http: HttpClient) { }

  getSearch(input) {
    return this.http.get(this.endpoint + `/categories?filter[where][name]=${input.search}`);
  }

  getCategory(params) {
    return this.http.get(this.endpoint + '/categories', {params});
      }
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


