import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';


import { TOASTR_TOKEN,
         CollapsibleWellComponent, 
         Toastr,
         JQ_TOKEN,
         SimpleModalComponent,
         ModalTriggerDirective
        } from './common/index'

import { EventsListComponent,
         EventThumbnailComponent,
         EventService,
         EventDetailsComponent,
         EventRouteActivator,
         CreateEventComponent,
         CreateSessionComponent,
         SessionListComponent,
         DurationPipe,
         VoterService
       } from './events/index'

import { Error404Component } from './errors/404.component';
import { EventsAppComponent } from './event-app.component';
import { EventListResolver } from './events/events-list-resolver.service';
import { NavBarComponent } from './nav/nav-bar.component';
import { appRoutes } from './routes';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpvoteComponent } from './events/event-details/upvote.component';

import { HttpClientModule } from '@angular/common/http';

 let toastr:Toastr = window['toastr'];
 let JQuery = window['$'];


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
    DurationPipe,
    SimpleModalComponent,
    ModalTriggerDirective,
    UpvoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: JQuery
    },
    EventService,
    EventRouteActivator,
    EventListResolver,
    VoterService,
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