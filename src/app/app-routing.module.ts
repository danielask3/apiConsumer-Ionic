import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'curso',
    loadChildren: () => import('./add/curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'addcurso',
    loadChildren: () => import('./add/curso/curso.module').then( m => m.CursoPageModule)
  },
  {
    path: 'editcurso/:id',
    loadChildren: () => import('./add/curso/curso.module').then( m => m.CursoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
