import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';
import { ToastsContainer } from './toasts-container/toasts-container.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { RegisterComponent } from './register/register.component';
import { VerifyaccountComponent } from './verifyaccount/verifyaccount.component'
import { AuthGuard } from './guards/auth.guard';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LeadsComponent } from './leads/leads.component';
import { HomeComponent } from './home/home.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddleadComponent } from './addlead/addlead.component';
import { UpdateleadComponent } from './updatelead/updatelead.component';
import { AddcontactComponent } from './addcontact/addcontact.component';
import { AddservicerequetsComponent } from './addservicerequets/addservicerequets.component';
import { AdduserComponent } from './adduser/adduser.component';
import { ConfirmOrderComponent } from './confirm-order/confirm-order.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ManagerClosingLeadComponent } from './manager-closing-lead/manager-closing-lead.component';
import { ProfileComponent } from './profile/profile.component';
import { UpdatecontactComponent } from './updatecontact/updatecontact.component';
import { UsersComponent } from './users/users.component';
import { UsershomeComponent } from './usershome/usershome.component';
import { ServiceRequestsComponent } from './service-requests/service-requests.component';
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ToastsContainer,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    RegisterComponent,
    VerifyaccountComponent,
    LeadsComponent,
    HomeComponent,
    AddleadComponent,
    UpdateleadComponent,
    AddcontactComponent,
    AddservicerequetsComponent,
    AdduserComponent,
    ConfirmOrderComponent,
    ContactsComponent,
    ManagerClosingLeadComponent,
    ProfileComponent,
    UpdatecontactComponent,
    UsersComponent,
    UsershomeComponent,
    ServiceRequestsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [AuthGuard,{provide: LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
