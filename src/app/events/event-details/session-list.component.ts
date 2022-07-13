import { Component, Input, OnChanges } from '@angular/core'
import { ISession } from '../shared/index'

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions:ISession[];
  @Input() filterBy: string;
  visibleSessions : ISession[] = [];

  ngOnChanges()
  {
    if(this.sessions)
    {
      this.filterSession(this.filterBy);
    }
  }

  filterSession(filter: string)
  {
    
    if(filter === 'all')
    {
      this.visibleSessions = this.sessions.slice(0);
    }
    else 
    {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      });
    }
  }

}