import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromStore from '../../store';
import { Userdata } from './../../models/userdata.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user$: Observable<Userdata>;
  constructor(
    public router: Router,
    private store: Store<fromStore.State>
    ) { }

  /**
   * @description Get the userdata from store
   * @returns void
   * */
  ngOnInit(): void {      
    this.user$ = this.store.select(fromStore.getUserdata);
    this.store.dispatch(new fromStore.LoadUserdata());
  }
  /**
   * @description Logout the user and remove the userdata from store
   * @returns void
   */
  logout(): void {
    localStorage.clear();
    this.store.dispatch(new fromStore.RemoveUserdata());
    this.router.navigate(['/login']);
  }
}
