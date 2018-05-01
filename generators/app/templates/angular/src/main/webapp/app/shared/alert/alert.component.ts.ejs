import { Component, OnDestroy, OnInit } from '@angular/core';
import { JhiAlertService } from 'ng-jhipster';
import {ProfileInfo, ProfileService} from 'app/layouts';

@Component({
    selector: '<%= jhiPrefixDashed %>-alert',
    template: `
        <clr-alerts>
            <clr-alert *ngFor="let alert of alerts" [clrAlertType]="alert.type" [clrAlertAppLevel]="true">
                <div class="alert-item">
                    <span class="alert-text" [innerHTML]="alert.msg" *ngIf="alert && alert.type && alert.msg"></span>
                </div>
            </clr-alert>
        </clr-alerts>`
})
export class <%=jhiPrefixCapitalized%>AlertComponent implements OnInit, OnDestroy {
    alerts: any[];
    profileInfo: ProfileInfo;
    ribbonEnv: string;

    constructor(private alertService: JhiAlertService, private profileService: ProfileService) {
        this.profileService.getProfileInfo().then(profileInfo => {
            this.profileInfo = profileInfo;
            this.ribbonEnv = profileInfo.ribbonEnv;
            if (this.ribbonEnv === 'dev') {
                this.alertService.addAlert({
                    type: 'warning',
                    msg: 'global.ribbon.dev',
                    scoped: false,
                }, this.alerts);
            }
        });
    }

    ngOnInit() {
        this.alerts = this.alertService.get();
    }

    ngOnDestroy() {
        this.alerts = [];
    }

}
