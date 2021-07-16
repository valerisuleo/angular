import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { MaterialModule } from '../../shared/material.module';
import { AppAccountsComponent } from './app-accounts.component';
import { FormGroupModule } from '../../shared/reusable-components/form/forms.module';
import { AccountDetailsComponent } from './account-details/account-details.component';
import { MatDialogInputComponent } from '../../shared/reusable-components/mat-dialog-input/mat-dialog-input.component';
import { AlertComponent } from '../../shared/reusable-components/alert/alert.component';
import { BootstrapAlertComponent } from '../../shared/reusable-components/bootstrap-alert/bootstrap-alert.component';
import { BootstrapModule } from '../../shared/bootstrap.module';

export const routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: AppAccountsComponent,
                data: {
                    title: 'accounts',
                    breadcrumb: [
                        {
                            label: 'Accounts',
                            url: ''
                        }
                    ]
                },
            },
            {
                path: ':id',
                component: AccountDetailsComponent,
                data: {
                    title: 'details',
                    breadcrumb: [
                        {
                            label: 'Accounts',
                            url: '/accounts'
                        },
                        {
                            label: '{{dynamicText}}',
                            url: '/accounts/:id'
                        },
                        {
                            label: '',
                            url: ''
                        }
                    ]
                },
            }
        ]
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        FormsModule,
        FormGroupModule,
        NgxChartsModule,
        PerfectScrollbarModule,
        MaterialModule,
        BootstrapModule

    ],
    declarations: [
        AppAccountsComponent,
        AccountDetailsComponent,
    ],
    entryComponents: [MatDialogInputComponent, AlertComponent],
    exports: [
    ]
})
export class AppAccountsModule { }
