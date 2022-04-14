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
  {
    path: 'movie-details/:id',
    loadChildren: () => import('./pages/menu/movie/movie-details/movie-details.module').then( m => m.MovieDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'news-details/:id',
    loadChildren: () => import('./pages/menu/news/news-details/news-details.module').then( m => m.NewsDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'game-details/:id',
    loadChildren: () => import('./pages/menu/game/game-details/game-details.module').then( m => m.GameDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'music-details/:id',
    loadChildren: () => import('./pages/menu/music/music-details/music-details.module').then( m => m.MusicDetailsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'movie-crud',
    loadChildren: () => import('./pages/menu/movie/movie-crud/movie-crud.module').then( m => m.MovieCrudPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'news-crud',
    loadChildren: () => import('./pages/menu/news/news-crud/news-crud.module').then( m => m.NewsCrudPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'game-crud',
    loadChildren: () => import('./pages/menu/game/game-crud/game-crud.module').then( m => m.GameCrudPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'music-crud',
    loadChildren: () => import('./pages/menu/music/music-crud/music-crud.module').then( m => m.MusicCrudPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'movie-crud/:id',
    loadChildren: () => import('./pages/menu/movie/movie-crud/movie-crud.module').then( m => m.MovieCrudPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'news-crud/:id',
    loadChildren: () => import('./pages/menu/news/news-crud/news-crud.module').then( m => m.NewsCrudPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'game-crud/:id',
    loadChildren: () => import('./pages/menu/game/game-crud/game-crud.module').then( m => m.GameCrudPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'music-crud/:id',
    loadChildren: () => import('./pages/menu/music/music-crud/music-crud.module').then( m => m.MusicCrudPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'movie-crud-home',
    loadChildren: () => import('./pages/menu/movie/movie-crud-home/movie-crud-home.module').then( m => m.MovieCrudHomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'game-crud-home',
    loadChildren: () => import('./pages/menu/game/game-crud-home/game-crud-home.module').then( m => m.GameCrudHomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'news-crud-home',
    loadChildren: () => import('./pages/menu/news/news-crud-home/news-crud-home.module').then( m => m.NewsCrudHomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'music-crud-home',
    loadChildren: () => import('./pages/menu/music/music-crud-home/music-crud-home.module').then( m => m.MusicCrudHomePageModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
