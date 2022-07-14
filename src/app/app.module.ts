import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';

import { EventsListComponent,
         EventThumbnailComponent,
         EventService,
         EventDetailsComponent,
         EventRouteActivator,
         CreateEventComponent,
         CreateSessionComponent,
         SessionListComponent,
         DurationPipe
       } from './events/index'

import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './event-app.component';
import { EventListResolver } from './events/events-list-resolver.service';
import { NavBarComponent } from './nav/nav-bar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

declare let toastr:Toastr


@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
  BrowserModule,
  FormsModule,
  ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventService,
    EventRouteActivator,
    EventListResolver,
    AuthService,
    {
      provide: 'canDesactivateCreateEvent', 
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}