# The Complete Guide

## Getting Started
1. Install node.js
2. Run commands
```sh
npm install -g @angular/cli@latest
ng new my-dream-app
cd my-dream-app
ng serve
```

## Editing the First App
1. Install Visual Studio Code
2. Edit the First App

- app.component.html
```sh
 <input type="text" [(ngModel)]="name">
 <p>{{name}}</p>
```

- app.modules.ts
  
a. add import
```sh
import {FormsModule} from '@angular/forms';
```

b. add in imports
```sh
 imports: [
            BrowserModule,
            AppRoutingModule,
            FormsModule
```
- app.components.ts
```sh
 export class AppComponent {
   name = 'AKO';
 }
```

## A Basic Project Setup using Bootstrap for Styling
1. Install bootstrap 
```sh
 npm install --save bootstrap
```
2. Add to angular.json to styles
```sh
 "styles": [
 "node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css" 
```
## The Basics
1. Load proper componet 
```sh
main.ts -> bootstrapModule(AppModule) -> import { AppModule } from './app/app.module'; -> /app/app.module -> bootstrap: [AppComponent] -> import { AppComponent } from './app.component'; -> templateUrl: './app.component.html',
```
2. Components

- Creating a New Component
must be registred in app.module.ts

ng generate component servers or just ng g c servers