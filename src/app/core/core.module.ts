import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonCardComponent } from './components/person-card/person-card.component';
import { CommonModule } from '@angular/common';
import { PersonsPage } from './pages/persons/persons.page';
import { RouterModule, Routes } from '@angular/router';
import { States } from '../constants';
import { NotFoundPage } from './pages/404/404.page';
import { RadioButtonsComponent } from './components/radio-buttons/radio-buttons.component';
import { GenericMultiselectComponent } from './components/generic-multiselect/generic-multiselect.component';
import { DoublePipe } from './pipes/double.pipe';
import { PersonService } from './services/person.service';
import { RxjsPage } from './pages/rxjs/rxjs.page';
import { LoginPage } from './pages/login/login.page';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { path: States.persons, component: PersonsPage },
  { path: States.rxjs, component: RxjsPage },
  { path: States.login, component: LoginPage},
  { path: '**', component: NotFoundPage },
];

@NgModule({
  declarations: [
    PersonCardComponent,
    PersonsPage,
    NotFoundPage,
    RadioButtonsComponent,
    GenericMultiselectComponent,
    DoublePipe,
    RxjsPage,
    LoginPage,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  exports: [PersonCardComponent],
})
export class CoreModule {
    constructor( personService: PersonService ) {

    personService.initialize();
  }
}
