import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ProductService } from "../../feature/product.service";

@Component({
  selector: "app-detail-product",
  templateUrl: "./detail-product.component.html",
  styleUrls: ["./detail-product.component.css"]
})
export class DetailProductComponent implements OnInit {
  productDetait: any;
  id: string;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((val: any) => {
      this.id = val["id"];
    });

  
  }

  detailProduct() {
    this.productService
      .readDetail(this.id)
      .then((val: any) => {
        this.productDetait = val;
      })
      .catch((err:any) => {
        console.log(err);
      });
  }
}
