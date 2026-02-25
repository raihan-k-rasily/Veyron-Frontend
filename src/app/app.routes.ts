import { Routes } from '@angular/router';
import { LandingPage } from './pages/landing-page/landing-page';
import { About } from './pages/about/about';
import { MenuPage } from './pages/menu/menu';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    {path:'',component:LandingPage},
    {path:'story',component:About},
    {path:'menu',component:MenuPage},
    {path:'location',component:Contact}
];
