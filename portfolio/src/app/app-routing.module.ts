import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './pages/toolbar/toolbar.component';
import { ResumeComponent } from './pages/resume/resume.component';

const routes: Routes = [
  { path: '', component: ToolbarComponent },
  { path: 'resume', component: ResumeComponent },
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
