# PortFolio

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.4.
Voici une documentation complète pour installer et configurer les bibliothèques que vous utilisez couramment dans vos projets Angular, en tenant compte de votre version actuelle (Angular 15.2.10). Cette documentation inclut la vérification des versions disponibles et les commandes d'installation adaptées.

### Bibliothèques à Installer

1. **ngx-toastr**
2. **Angular Editor**
3. **Firebase**

### 1. Installation de `ngx-toastr`

#### Vérification des Versions

Avant d'installer, vérifiez que vous avez déjà `ngx-toastr@18.0.0`, qui est compatible avec Angular 15.

#### Commande d'Installation

```bash
npm install ngx-toastr@18 --save
```

#### Configuration

1. **Installer les animations Angular** (si ce n'est pas déjà fait) :
   ```bash
   npm install @angular/animations@15.2.10 --save
   ```

2. **Ajouter le CSS de Toastr** :
   Dans votre fichier `angular.json`, ajoutez le chemin vers le fichier CSS de Toastr :
   ```json
   "styles": [
     "src/styles.css",
     "node_modules/ngx-toastr/toastr.css"
   ]
   ```

3. **Importer les modules dans `app.module.ts`** :
   ```typescript
   import { NgModule } from '@angular/core';
   import { BrowserModule } from '@angular/platform-browser';
   import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
   import { ToastrModule } from 'ngx-toastr';

   import { AppComponent } from './app.component';

   @NgModule({
     declarations: [
       AppComponent
     ],
     imports: [
       BrowserModule,
       BrowserAnimationsModule,
       ToastrModule.forRoot() // Configuration de ngx-toastr
     ],
     providers: [],
     bootstrap: [AppComponent]
   })
   export class AppModule { }
   ```

### 2. Installation d'Angular Editor

#### Vérification des Versions

Assurez-vous que vous utilisez une version compatible avec Angular 15.

#### Commande d'Installation

```bash
npm install @kolkov/angular-editor --save
```

#### Configuration

1. **Importer le module dans `app.module.ts`** :
   ```typescript
   import { AngularEditorModule } from '@kolkov/angular-editor';

   @NgModule({
     imports: [
       BrowserModule,
       AngularEditorModule // Ajoutez ici
     ],
     // autres configurations...
   })
   export class AppModule { }
   ```

2. **Utiliser l'éditeur dans un composant** :
   ```html
   <angular-editor [(ngModel)]="htmlContent" [placeholder]="'Enter text here...'"></angular-editor>
   ```

### 3. Installation de Firebase

#### Vérification des Versions

Vous utilisez déjà `@angular/fire@7.6.1`, qui est compatible avec Angular 15.

#### Commande d'Installation

Si vous devez réinstaller ou mettre à jour Firebase, utilisez :

```bash
npm install firebase @angular/fire --save
```

#### Configuration

1. **Configurer Firebase dans `app.module.ts`** :
   
```typescript
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
// Importez d'autres services Firebase selon vos besoins

@NgModule({
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(yourFirebaseConfig)),
    provideAuth(() => getAuth()),
    // autres imports...
  ],
  // autres configurations...
})
export class AppModule { }
```

### Vérification des Versions Existantes

Avant d'installer ou de mettre à jour des dépendances, vérifiez toujours les versions existantes avec :

```bash
npm list --depth=0
```

### Conclusion

Cette documentation vous fournit un guide complet pour installer et configurer `ngx-toastr`, `Angular Editor`, et `Firebase` dans vos projets Angular tout en tenant compte des versions compatibles. Conservez ce guide pour référence future lors de l'installation de ces bibliothèques ! Si vous avez besoin d'aide supplémentaire, n'hésitez pas à demander.

Citations:
[1] https://www.telerik.com/kendo-angular-ui/components/editor/installation/getting-started
[2] https://ckeditor.com/docs/ckeditor5/latest/getting-started/installation/angular.html
[3] https://www.npmjs.com/package/@kolkov/angular-editor/v/0.15.6
[4] https://www.npmjs.com/package/@kolkov/angular-editor
[5] https://betterprogramming.pub/ngx-toastr-in-angular-7-185ac435011e?gi=f13d6f06e2f5
[6] https://github.com/rodrigokamada/angular-toastr
[7] https://angular.dev/installation/
[8] https://dev.to/sibiraj/setting-up-a-rich-text-editor-for-angular-3phh



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
