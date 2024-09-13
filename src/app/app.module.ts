import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DashComponent } from "./pages/dash/dash.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { initializeApp, provideFirebaseApp } from "@angular/fire/app";
import { environment } from "../environments/environment";
import { provideAuth, getAuth } from "@angular/fire/auth";
import { provideFirestore, getFirestore } from "@angular/fire/firestore";
import { provideStorage, getStorage } from "@angular/fire/storage";
import { ProductsComponent } from "./pages/products/products.component";
import { ReactiveFormsModule } from "@angular/forms";
import { HeaderComponent } from './shared/header/header.component';
import { DetailProductComponent } from './pages/detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    NavbarComponent,
    ProductsComponent,
    HeaderComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ],
  exports: [AppComponent, DashComponent, NavbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
