import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { JobsMsgwComponent } from './jobs-msgw/jobs-msgw.component';
import { WelcomeComponent } from './home/welcome.component';
import { JoblogComponent } from './joblog/joblog.component';

import { ConvertToCharacterPipe } from './shared/convert-to-character.pipe';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    JobsMsgwComponent,
    JoblogComponent,
    ConvertToCharacterPipe,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
