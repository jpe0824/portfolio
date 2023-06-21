import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';

const routes: Routes = [
  { path: '', component: ToolbarComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'projects', component: ProjectsComponent },
  // { path: 'contact', component: ContactComponent },
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // or 'top'
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64], // [x, y] - adjust scroll offset
  onSameUrlNavigation: 'reload',
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
