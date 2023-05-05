import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSlider, MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebdevComponent } from './webdev/webdev.component';
import { GraphicComponent } from './graphic/graphic.component';
import { ProjectsComponent } from './projects/projects.component';
import { GameComponent } from './game/game.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CarouselComponent } from './carousel/carousel.component';
import { SideGameButtonComponent } from './side-game-button/side-game-button.component';
import { GraphicCarouselComponent } from './graphic-carousel/graphic-carousel.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { LoanComponent } from './loan/loan.component';
import { FormsModule } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WebdevComponent,
    GraphicComponent,
    ProjectsComponent,
    GameComponent,
    CarouselComponent,
    SideGameButtonComponent,
    GraphicCarouselComponent,
    LoanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule,
    MatSliderModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
