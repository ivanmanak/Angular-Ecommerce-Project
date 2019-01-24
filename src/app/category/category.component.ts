import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any = [];
  name: string;
  id: number;

  constructor(
    private categoryService: CategoryService
  ) { }

  getCategories() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    });
  }

  ngOnInit() {
    this.getCategories();
  }
}

