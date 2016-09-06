import { Routes, RouterModule } from '@angular/router';
import { About } from './about';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: About },
  { path: 'home',  component: About },
  { path: 'about', component: About },
  {
    path: 'detail', loadChildren: () => System.import('./+detail')
  },
  { path: '**',    component: About },
];
