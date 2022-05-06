import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesModule } from './features/features.module';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MoiveDetailComponent } from './moive-detail/moive-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MovieHeaderComponent } from './movie-header/movie-header.component';

const routes: Routes = [
  { path: '', component: MovieOverviewComponent },
  { path: 'detail/:id', component: MoiveDetailComponent },
  { path: 'profil', component: UserDashboardComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    MovieOverviewComponent,
    UserDashboardComponent,
    MoiveDetailComponent,
    MovieHeaderComponent,
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
