import { CategoryComponent } from './category.component';
import { HttpClientModule } from '@angular/common/http';
import { CategoryAddComponent } from './category-add/category-add.component';
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CategoryService } from './category.service';

const DECLARATIONS = [
  CategoryAddComponent,
  CategoryComponent
];

const SERVICES = [
  CategoryService
];

const MODULES = [
  HttpClientModule,
  SharedModule
];


@NgModule({
  declarations: [
    ...DECLARATIONS
  ],
  imports: [
    ...MODULES
  ],
  exports: [
    ...DECLARATIONS,
    ...MODULES
  ],
  providers: [
    ...SERVICES
  ]
})
export class CategoryModule { }
