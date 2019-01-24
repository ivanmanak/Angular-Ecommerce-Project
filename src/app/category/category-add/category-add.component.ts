import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent implements OnInit {
  category = {
    'name': '',
    'id': '',
    'parentCategoryId': ''
  };

  name: string;

  constructor(
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    // private toastr: ToastrService,
  ) { }

  categoryForm: FormGroup;

  createFormGroup() {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      id: ['', [Validators.required]]
    });
  }

  onSubmit() {
    // this.categoryService.saveCategory(this.categoryForm.value).subscribe(res => {
    //   this.categoryService.categoryCreated(res);
    //   this.categoryForm.reset();
    // });

    this.category.name = this.name;
  }

  ngOnInit() {
    this.createFormGroup();

  }

}
