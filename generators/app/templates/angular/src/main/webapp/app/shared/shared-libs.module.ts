import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgJhipsterModule } from 'ng-jhipster';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CookieModule } from 'ngx-cookie';
import { ClarityModule } from '@clr/angular';

@NgModule({
    imports: [
        NgbModule.forRoot(),
        NgJhipsterModule.forRoot({
            // set below to true to make alerts look like toast
            alertAsToast: false,
            <%_ if (enableTranslation) { _%>
            i18nEnabled: true,
            defaultI18nLang: '<%= nativeLanguage %>'
            <%_ } _%>
        }),
        InfiniteScrollModule,
        ClarityModule,
        CookieModule.forRoot()
    ],
    exports: [
        FormsModule,
        CommonModule,
        NgbModule,
        NgJhipsterModule,
        ClarityModule,
        InfiniteScrollModule
    ]
})
export class <%=angularXAppName%>SharedLibsModule {}
