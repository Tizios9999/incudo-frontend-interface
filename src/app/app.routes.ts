import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { AssignCourseComponent } from './assign-course/assign-course.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { AddUserComponent } from './add-user/add-user.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'view-courses', component: ViewCoursesComponent },
  { path: 'assign-course', component: AssignCourseComponent },
  { path: 'cancel-booking', component: CancelBookingComponent },
  { path: 'add-user', component: AddUserComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
