import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

const DECLARATIONS = [
];

const SERVICES = [
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
