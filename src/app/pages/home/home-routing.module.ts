import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'splash', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
        children: [
            {
                path: 'splash',
                loadChildren: () => import('./../splash-screen/splash-screen.module').then(m => m.SplashScreenModule),
            },
            /*{
                path: 'eszkozok',
                loadChildren: () => import('./../eszkoz/list/eszkoz-list.module').then(m => m.EszkozListModule),
            },
            {
                path: 'fertotlenitok',
                loadChildren: () => import('./../fertotlenito/list/fertotlenito-list.module').then(m => m.FertotlenitoListModule),
            }*/
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
