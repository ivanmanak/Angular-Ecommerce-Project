import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategoryService {
  endpoint = `http://localhost:3000/`;
  id: number;
  editIt: number;

  constructor(private http: HttpClient) { }

  getSearch(input) {
    return this.http.get(this.endpoint + `/categories?filter[where][name]=${input.search}`);
  }

  getCategories() {
    return this.http.get(this.endpoint + 'categories');
  }

  saveCategory(data) {
    return this.http.post(this.endpoint + '/categories', data);
  }

  editCategory(data) {
    return this.http.put(this.endpoint + '/categories', data);
  }

  deleteCategory(id) {
    return this.http.delete(this.endpoint + id);
  }

  updateCategories(id, category) {
    return this.http.put(this.endpoint + '/' + id, category);
  }

}




