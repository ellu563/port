import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WebdevComponent } from './webdev/webdev.component';
import { GraphicComponent } from './graphic/graphic.component';
import { GameComponent } from './game/game.component';
import { CarouselComponent } from './carousel/carousel.component';
import { GraphicCarouselComponent } from './graphic-carousel/graphic-carousel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { QuestionComponent } from './question/question.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'web-development', component: WebdevComponent },
  { path: 'graphic-design', component: GraphicComponent },
  { path: 'game', component: GameComponent },
  { path: 'carousel', component: CarouselComponent },
  { path: 'graphic-carousel', component: GraphicCarouselComponent },
  { path: 'questions', component: QuestionComponent },
  // 404-virhereitti
  { path: '**', component: PageNotFoundComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
