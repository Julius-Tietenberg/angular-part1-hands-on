import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeaturesModule } from './features/features.module';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { MovieHeaderComponent } from './movie-header/movie-header.component';
import { RouterModule, Routes } from '@angular/router';
//Task 4.1 Start | Import the component here


const routes:Routes=[
  { path: '', component: MovieOverviewComponent },
  //Task 3 Start | Add your route

  //Task 4.1 Continues | Add another route

]



@NgModule({
  declarations: [
    AppComponent,
    MovieOverviewComponent,
    UserDashboardComponent,
    MovieHeaderComponent,
    //Task 4.1 Continues | Declare the imported component here

    //Task 4.1 End
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
