import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { ProductService } from "./../../feature/product.service";
import { Product } from "./../../feature/shape/product";

@Component({
  selector: "app-dash",
  templateUrl: "./dash.component.html",
  styleUrls: ["./dash.component.css"]
})
export class DashComponent {
  //Creation vARIABLE PRODUIT
  nom: string;
  description: string;
  lienImg: string;
  prix: number;
  id: string;

  //PRODUITS
  produits: Observable<Array<any>>;
  valider: boolean = false;

  //FORM VAR
  editForm: FormGroup;

  constructor(
    private produitService: ProductService,
    private fb: FormBuilder
  ) {}
  ngOnInit() {
    if (this.id) {
      this.initiEdiit();
      this.valider = true;
    } else {
      this.initAddForm();
    }
    this.listProduit();
  }

  initAddForm() {
    this.editForm = this.fb.group({
      name: ["", Validators.required],
      description: ["", Validators.required],
      lienImg: ["", Validators.required],
      prix: ["", Validators.required]
    });
  }
  initiEdiit() {
    this.editForm = this.fb.group({
      name: [this.nom, Validators.required],
      description: [this.description, Validators.required],
      lienImg: [this.lienImg, Validators.required],
      prix: [this.prix, Validators.required]
    });
  }

  onSubmit() {
    let tabs: Product = {
      name: this.editForm.value.name,
      price: parseFloat(this.editForm.value.prix) || 0, // Assurez-vous que le prix est un nombre, sinon utilisez 0
      description: this.editForm.value.description,
      imgUrl: this.editForm.value.lienImg
    };

    if (this.valider) {
      this.produitService
        .updateProduct(this.id, tabs)
        .then(() => {
          console.log("Modifier Ajouter");
          this.initAddForm();
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      this.produitService
        .creatProduct(tabs)
        .then(() => {
          console.log("Ajouter");
          this.initAddForm();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    console.log(tabs);
  }

  editProduit(
    nomProduit: string,
    descriptionProduit: string,
    lienImgProduit: string,
    prixProduit: number,
    idProduit: string
  ) {
    (this.nom = nomProduit),
      (this.description = descriptionProduit),
      (this.lienImg = lienImgProduit),
      (this.prix = prixProduit); // Assignez la valeur de prixProduit directement à this.prix
    this.valider = true;
    this.id = idProduit;
  }

  deleteProduit(id: any) {
    this.produitService.deleteProduct(id);
  }

  listProduit() {
    this.produits = this.produitService.readProduct();
  }
}
