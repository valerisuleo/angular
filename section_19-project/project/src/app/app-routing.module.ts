import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsIndexComponent } from './components/products/products-index/products-index.component';


const routes: Routes = [
    { path: 'products', component: ProductsIndexComponent }
    // { path: '**', component: PathNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
