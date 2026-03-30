import { Routes } from '@angular/router';
import { Dxf } from './components/dxf/dxf';
import { Homepage } from './components/homepage/homepage';


export const routes: Routes = [
    { path: '', component: Homepage },

    { path: 'dxf', component: Dxf }
];
