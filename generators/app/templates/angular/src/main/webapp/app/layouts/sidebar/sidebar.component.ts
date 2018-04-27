import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
<%_ if (authenticationType !== 'oauth2') { _%>
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
<%_ } _%>
import { JhiLanguageService } from 'ng-jhipster';

import { VERSION } from 'app/app.constants';
import { <% if (enableTranslation) { %>JhiLanguageHelper, <% } %>Principal, <% if (authenticationType !== 'oauth2') { %>LoginModalService, <% } %>LoginService } from 'app/core';
import { ProfileService } from '../profiles/profile.service';

@Component({
    selector: '<%= jhiPrefixDashed %>-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: [
        <%_ if (useSass) { _%>
        'sidebar.scss'
        <%_ } else { _%>
        'sidebar.css'
        <%_ } _%>
    ]
})
export class SidebarComponent implements OnInit {
    inProduction: boolean;
    isNavbarCollapsed: boolean;
    languages: any[];
    swaggerEnabled: boolean;
<%_ if (authenticationType !== 'oauth2') { _%>
    modalRef: NgbModalRef;
<%_ } _%>
version: string;

constructor(
    private loginService: LoginService,
<%_ if (enableTranslation) { _%>
private languageService: JhiLanguageService,
    private languageHelper: JhiLanguageHelper,
<%_ } _%>
private principal: Principal,
<%_ if (authenticationType !== 'oauth2') { _%>
private loginModalService: LoginModalService,
<%_ } _%>
private profileService: ProfileService,
    private router: Router
) {
    this.version = VERSION ? 'v' + VERSION : '';
    this.isNavbarCollapsed = true;
}

ngOnInit() {
    <%_ if (enableTranslation) { _%>
    this.languageHelper.getAll().then((languages) => {
        this.languages = languages;
    });
        <%_ } _%>
    this.profileService.getProfileInfo().then((profileInfo) => {
        this.inProduction = profileInfo.inProduction;
        this.swaggerEnabled = profileInfo.swaggerEnabled;
    });
}

<%_ if (enableTranslation) { _%>
changeLanguage(languageKey: string) {
    this.languageService.changeLanguage(languageKey);
}
    <%_ } _%>
collapseNavbar() {
    this.isNavbarCollapsed = true;
}

isAuthenticated() {
    return this.principal.isAuthenticated();
}

login() {
    <%_ if (authenticationType !== 'oauth2') { _%>
    this.modalRef = this.loginModalService.open();
        <%_ } else { _%>
    this.loginService.login();
        <%_ } _%>
}

logout() {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
}

toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
}

getImageUrl() {
    return this.isAuthenticated() ? this.principal.getImageUrl() : null;
}
}
