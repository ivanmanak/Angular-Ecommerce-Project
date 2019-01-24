import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';
import { getAllDebugNodes } from '@angular/core/src/debug/debug_node';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  categories: any = [];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit() {
    this.allCategories();
  }

  allCategories() {
    this.categoryService.getCategories().subscribe(res => {
      this.categories = res;
      console.log(this.categories);

    });
  }
}

