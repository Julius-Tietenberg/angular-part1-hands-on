import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesModule } from './features/features.module';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { RouterModule, Routes } from '@angular/router';
//Task 4.1 Start


const routes:Routes=[
  { path: '', component: MovieOverviewComponent },
  //Task 3 Start


  //Task 4.1 Continues

  //Task 4.1 Ended
]



@NgModule({
  declarations: [
    AppComponent,
    MovieOverviewComponent,
    UserDashboardComponent,
    MovieHeaderComponent,
    //Task 4.1 Continues
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
