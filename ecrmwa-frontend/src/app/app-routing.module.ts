import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'elections', loadChildren: () => import('./elecper/elecper.module').then(m => m.ElecperModule) }
]

@NgModule({
  imports: [RouterModule.forRoot(
    routes, 
    { preloadingStrategy: PreloadAllModules }
    )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
