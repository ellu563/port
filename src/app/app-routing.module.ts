import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WebdevComponent } from './webdev/webdev.component';
import { GraphicComponent } from './graphic/graphic.component';
import { GameComponent } from './game/game.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GraphicCarouselComponent } from './graphic-carousel/graphic-carousel.component';

const routes: Routes = [
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'web-development', component: WebdevComponent },
  { path: 'graphic-design', component: GraphicComponent },
  { path: 'game', component: GameComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'graphic-carousel', component: GraphicCarouselComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
