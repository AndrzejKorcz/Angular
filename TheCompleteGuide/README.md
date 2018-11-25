# The Complete Guide

Getting Started
1. Install node.js
2. npm install -g @angular/cli@latest
3. ng new my-dream-app
4. cd my-dream-app
5. ng serve

Editing the First App
1. Install Visual Studio Code
2. Edit the First App
- app.component.html
<input type="text" [(ngModel)]="name">
<p>{{name}}</p>
- app.modules.ts
a. add import
import {FormsModule} from '@angular/forms';
b. add in imports
imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
- app.components.ts
export class AppComponent {
  name = 'AKO';
}

A Basic Project Setup using Bootstrap for Styling
1. Install bootstrap 
npm install --save bootstrap@3
2. Add to angular.json to styles
"styles": [
"node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css" 
