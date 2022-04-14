import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/auth/forgot/forgot.module').then( m => m.ForgotPageModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/menu/home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'movie-home',
    loadChildren: () => import('./pages/menu/movie/movie/movie.module').then( m => m.MoviePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'news-home',
    loadChildren: () => import('./pages/menu/news/news/news.module').then( m => m.NewsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'game-home',
    loadChildren: () => import('./pages/menu/game/game/game.module').then( m => m.GamePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'music-home',
    loadChildren: () => import('./pages/menu/music/music/music.module').then( m => m.MusicPageModule),
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
