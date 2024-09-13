import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashComponent } from "./pages/dash/dash.component";
import { ProductsComponent } from "./pages/products/products.component";
import { DetailProductComponent } from "./pages/detail-product/detail-product.component";

const routes: Routes = [
  {
    path: "",
    component: DashComponent
  },
  {
    path: "products",
    component: ProductsComponent
  },
  {
    path: "product_detail/:id",
    component: DetailProductComponent
  },
  {
    path: "**",
    component: DashComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
