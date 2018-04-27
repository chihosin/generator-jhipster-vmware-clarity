import {Route} from '@angular/router';
import {SidebarComponent} from 'app/layouts';

export const sidebarRoute: Route = {
    path: '',
    component: SidebarComponent,
    outlet: 'sidebar'
};
