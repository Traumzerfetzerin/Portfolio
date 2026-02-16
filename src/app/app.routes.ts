import { Routes } from '@angular/router';
import { ImprintComponent } from './shared/imprint/imprint.component';
import { PoliceComponent } from './shared/police/police.component';


export const routes: Routes = [
    { path: 'imprint', component: ImprintComponent },
    { path: 'police', component: PoliceComponent },
    { path: '**', redirectTo: '' }
];
