import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { PollContainerComponent } from './poll-container/poll-container.component';
import { PollItemComponent } from './poll-item/poll-item.component';
import { HomeComponent } from './home/home.component';
import { TformComponent } from './tform/tform.component';
import { RformComponent } from './rform/rform.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ROUTES } from './_routes/routes';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PollContainerComponent,
    PollItemComponent,
    HomeComponent,
    TformComponent,
    RformComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
