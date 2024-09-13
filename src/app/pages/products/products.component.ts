import { Component, OnInit } from "@angular/core";
import { ProductService } from "../../feature/product.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"]
})
export class ProductsComponent implements OnInit {
  products: Observable<Array<any>>;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.readProduct();
  }

  buyProduct(price: number, name: string) {}
}
