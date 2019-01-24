import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  category: any = [];

  name: string;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    public router: Router
  ) { }

  categoryForm: FormGroup;

  createFormGroup() {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      id: ['', [Validators.required]]
    });
  }

  onSubmit() {
    this.category.name = this.name;
    this.categoryService.saveCategory(this.category).subscribe(res => {
    this.category = res;
    this.router.navigate(['/categories']);
      });
  }

  ngOnInit() {
    this.createFormGroup();

  }

}
