import { Routes } from '@angular/router';

import {
    activateRoute,
    passwordRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute,
    loginRoute,
    <%_ if (authenticationType === 'session') { _%>
    sessionsRoute,
    <%_ } _%>
    settingsRoute
} from './';

const ACCOUNT_ROUTES = [
    activateRoute,
    passwordRoute,
    passwordResetFinishRoute,
    passwordResetInitRoute,
    registerRoute,
    loginRoute,
    <%_ if (authenticationType === 'session') { _%>
    sessionsRoute,
    <%_ } _%>
    settingsRoute
];

export const accountState: Routes = [{
    path: '',
    children: ACCOUNT_ROUTES
}];
