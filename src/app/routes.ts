import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
// import { CreateEventComponent } from './events/create-event.component'
// import { Error404Component } from './errors/404.component'
// import { EventRouteActivator } from './events/event-details/event-route-activator.service'
// import { EventListResolver } from './events/events-list-resolver.service'
import { Routes } from '@angular/router';

export const appRoutes : Routes = [
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full'},

]