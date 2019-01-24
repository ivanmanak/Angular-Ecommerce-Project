import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  name: string;
  id: number;
  parent: number;
  categories: any = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  allCategories() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      console.log(this.categories);
    });
  }

  ngOnInit() {
    this.allCategories();
  }
}

