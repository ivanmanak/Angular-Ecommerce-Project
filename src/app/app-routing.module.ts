import { ProductsComponent } from './products/products.component';
import { AppComponent } from './app.component';
import { CategoryAddComponent } from './category/category-add/category-add.component';
import { CategoryComponent } from './category/category.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: AppComponent},
  {
    path: 'categories',
    children: [
      { path: '', component: CategoryComponent },
      { path: ':mode', component: CategoryAddComponent },
      { path: ':mode/:id', component: CategoryAddComponent }
    ]
  },
  {
    path: 'products',
    children: [
      { path: '', component: ProductsComponent },
    ]
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
