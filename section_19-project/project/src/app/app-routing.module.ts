import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsIndexComponent } from './components/products/products-index/products-index.component';
import { ProductsShowComponent } from './components/products/products-show/products-show.component';


const routes: Routes = [
    { path: 'products/:id', component: ProductsShowComponent },
    { path: 'products', component: ProductsIndexComponent }
    // { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
