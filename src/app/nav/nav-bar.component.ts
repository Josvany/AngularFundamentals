import { Component } from '@angular/core'
import { ISession } from '../events';
import { AuthService } from '../user/auth.service'
import { EventService } from './../events/shared/event.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: [`
    .nav.navbar-nav {font-size: 15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width: 1200px) {#searchForm {display:none}}
    li > a.active { color: #F97924; }
  `]
})
export class NavBarComponent {
  searchTerm: string = "";
  foundSession: ISession[];
  constructor(public auth: AuthService, private eventservice: EventService) {
    
  }


  searchSession(searchTerm: string)
  {
    this.eventservice.searchSession(searchTerm).subscribe(sessions => {
      this.foundSession = sessions;
    });
  }
}