import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { QuizComponent } from './pages/quiz/quiz.component';
import { CompleteComponent } from './pages/complete/complete.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { WebsiteComponent } from './pages/website/website.component';
import { SurpriseDirective } from './directives/surprise.directive';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {JokeService} from "./services/joke.service";
import {ApiService} from "./services/api.service";
import { UserComponent } from './forms/user/user.component';
import { ShowErrorsComponent } from './forms/show-errors/show-errors.component';
import {AuthenticatedGuard} from "./guards/authenticated.guard";
import {FlashService} from "./services/flash.service";
import { ShowErrorSecondComponent } from './forms/show-error-second/show-error-second.component';
import { StyleStackComponent } from './forms/style-stack/style-stack.component';


const appRoutes:Routes = [
    {
        path: '',
        component: HomeComponent
    },{
        path:'login',
        component: LoginComponent
    },{
        path: 'quiz/:name',
        component: QuizComponent
    },{
        path:'complete',
        component: CompleteComponent,
        canActivate: [AuthenticatedGuard],
    },{
        path:'website',
    component: WebsiteComponent,
  }




    ,{
        path:'**',
        component: NotFoundComponent,
    }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    QuizComponent,
    CompleteComponent,
    NotFoundComponent,
    WebsiteComponent,
    SurpriseDirective,
    UserComponent,
    ShowErrorsComponent,
    ShowErrorSecondComponent,
    StyleStackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,

  ],
  providers: [JokeService, ApiService, FlashService, AuthenticatedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
