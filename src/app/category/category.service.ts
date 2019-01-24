import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class CategoryService {
  endpoint = `http://localhost:3000/`;

  constructor(private http: HttpClient) { }

  getSearch(input) {
    return this.http.get(this.endpoint + `/categories?filter[where][name]=${input.search}`);
  }

  getCategories() {
    return this.http.get(this.endpoint + '/categories');
  }

  saveCategory(data) {
    return this.http.post('http://localhost:3000/' + '/categories', data);
  }

  editCategory(data) {
    return this.http.put('http://localhost:3000/' + '/categories', data);
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


