import { Routes } from '@angular/router';
import { MeComponent } from './content/me/me.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ProjectsComponent } from './content/projects/projects.component';
import { ReviewComponent } from './content/review/review.component';
import { ContactComponent } from './content/contact/contact.component';
import { PoliceComponent } from './shared/police/police.component';
import { ImprintComponent } from './shared/imprint/imprint.component';


export const routes: Routes = [
    { path: 'me', component: MeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'review', component: ReviewComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'police', component: PoliceComponent },
    { path: 'imprint', component: ImprintComponent },
];
