import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AchievementComponent } from './achievement/achievement.component';
import { MenuComponent } from './menu/menu.component';
import { LitigeDetailComponent } from './litige/litige-detail/litige-detail.component';
import { LitigeListComponent } from './litige/litige-list/litige-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    AchievementComponent,
    MenuComponent,
    LitigeDetailComponent,
    LitigeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
