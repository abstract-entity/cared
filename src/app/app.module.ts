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
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    AppComponent,
    AchievementComponent,
    MenuComponent,
    LitigeDetailComponent,
    LitigeListComponent
  ],
  imports: [
    FlexLayoutModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
