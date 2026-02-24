import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { PoliceComponent } from './shared/police/police.component';
import { LayoutComponent } from './layout/layout.component';


export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', component: MainComponent },
            { path: 'imprint', component: ImprintComponent },
            { path: 'police', component: PoliceComponent }
        ]
    },
    { path: '**', redirectTo: '' }
];
