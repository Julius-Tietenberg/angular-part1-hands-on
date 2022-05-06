import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesModule } from './features/features.module';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { CourseAddFormComponent } from './course-add-form/course-add-form.component';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseHeaderComponent } from './course-header/course-header.component';

const routes: Routes = [
  { path: '', component: CourseOverviewComponent },
  { path: 'detail/:id', component: CourseDetailComponent },
  { path: 'dashboard', component: CourseDashboardComponent },
  { path: 'profil', component: UserDashboardComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    CourseOverviewComponent,
    UserDashboardComponent,
    CourseDetailComponent,
    CourseDashboardComponent,
    CourseAddFormComponent,
    CourseCardComponent,
    CourseHeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FeaturesModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
