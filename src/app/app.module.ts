import { SignupFormComponent } from './signup-form/signup-form.component';
import { TitleCase } from './title-case/titleCase.pipe';
import { SummaryPipe } from './summary.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseComponent } from './title-case/title-case.component';
import { PanelComponent } from './panel/panel.component';
import { LikeComponent } from './like/like.component';
import { InputFormatDirective } from './input-format.directive';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { NewCourseComponent } from './new-course/new-course.component';
import { AddCourseComponent } from './add-course/add-course.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCaseComponent,
    PanelComponent,
    TitleCase,
    LikeComponent,
    InputFormatDirective,
    ContactFormComponent,
    NewCourseComponent,
    SignupFormComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
