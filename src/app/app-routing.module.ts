import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/newfeed',
    pathMatch: 'full',
  },
  {
    path: 'newfeed',
    loadChildren: () =>
      import('./newsfeed/newsfeed.module').then((m) => m.NewsfeedPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
