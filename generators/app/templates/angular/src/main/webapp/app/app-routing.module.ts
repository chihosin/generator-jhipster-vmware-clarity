import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { errorRoute, navbarRoute, sidebarRoute } from './layouts';
import { DEBUG_INFO_ENABLED } from 'app/app.constants';

const LAYOUT_ROUTES = [
    navbarRoute,
    sidebarRoute,
    ...errorRoute
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                ...LAYOUT_ROUTES,
                {
                    path: 'admin',
                    loadChildren: './admin/admin.module#<%=angularXAppName%>AdminModule'
                }
            ],
            { useHash: true , enableTracing: DEBUG_INFO_ENABLED }
        )
    ],
    exports: [
        RouterModule
    ]
})
export class <%=angularXAppName%>AppRoutingModule {}
