
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MarksheetComponent } from './marksheet/marksheet.component';
import { StudentComponent } from './student/student.component';
import { CollegeComponent } from './college/college.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotPasswordComponent } from './login/forgotpassword.component';
import { SignUpComponent } from './login/signup.component';
import { MessageComponent } from './message/message.component';
import { MessageListComponent } from './message/message-list.component';
import { MarksheetListComponent } from './marksheet/marksheet-list.component';
import { CollegeListComponent } from './college/college-list.component';
import { StudentListComponent } from './student/student-list.component';
import { UserListComponent } from './user/user-list.component';
import { UserComponent } from './user/user.component';
import { RoleComponent } from './role/role.component';
import { CourseComponent } from "./course/course.component";
import { SubjectComponent } from "./subject/subject.component"
import { Subject, from } from 'rxjs';
import { RoleListComponent } from './role/role-list.component';
import { CourseListComponent } from "./course/course-list.component";
import { FacultyComponent } from "./faculty/faculty.component";
import { FacultyListComponent } from "./faculty/faculty-list.component";
import { TimetableComponent } from "./timetable/timetable.component";
import { FileComponent } from './file/file.component';
import { TimetableListComponent } from './timetable/timetable-list.component';
import { SubjectListComponent } from './subject/subject-list.component';
import { MarksheetmeritListComponent } from "./marksheet/marksheetmerit-list.component";
import { GetmarksheetComponent } from "./marksheet/getmarksheet.component";
import { ChangepasswordComponent } from "./user/changepassword.component";
import { LoaderComponent } from './loader/loader.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { MyprofileComponent } from './user/myprofile.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product/product-list.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerlistComponent } from './customer/customer-list.component';
import { PositionComponent } from './position/position.component';
import { PositionListComponent } from './position/position-list.component';
import { OrderComponent } from './order/order.component';
import { OrderlistComponent } from './order/orderlist.component';
import { OfferComponent } from './offer/offer.component';
import { OfferlistComponent } from './offer/offerlist.component';
import { SettingsComponent } from './settings/settings.component';
import { SettingslistComponent } from './settings/settingslist.component';
import { ClientComponent } from './client/client.component';
import { ClientlistComponent } from './client/clientlist.component';
import { ActivityComponent } from './activity/activity.component';
import { ActivitylistComponent } from './activity/activitylist.component';
import { ContractComponent } from './contract/contract.component';
import { ContractlistComponent } from './contract/contractlist.component';
import { InquiryComponent } from './inquiry/inquiry.component';
import { InquirylistComponent } from './inquiry/inquirylist.component';
import { AuditComponent } from './audit/audit.component';
import { AuditlistComponent } from './audit/auditlist.component';
import { AtmComponent } from './atm/atm.component';
import { AtmlistComponent } from './atm/atm-list.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShoppingListComponent } from './shopping/shoppinglist.component';


const routes: Routes = [

    // ***********DASHBOARD*************

    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },

    // ***********ATM*************

    {
        path: 'atm',
        component: AtmComponent
    },
    {
        path: 'atmlist',
        component: AtmlistComponent

    },
    {
        path: 'atm/:id',
        component: AtmComponent
    },

    // ***********AUDIT*************

    {
        path: 'audit',
        component: AuditComponent
    },
    {
        path: 'auditlist',
        component: AuditlistComponent
    },
    {
        path: 'audit/:id',
        component: AuditComponent
    },




    // ***********INQUIRY*************

    {
        path: 'inquiry',
        component: InquiryComponent
    },
    {
        path: 'inquirylist',
        component: InquirylistComponent
    },
    {
        path: 'inquiry/:id',
        component: InquiryComponent
    },


    // ***********CONTRACT*************
    {
        path: 'contract',
        component: ContractComponent
    },
    {
        path: 'contractlist',
        component: ContractlistComponent
    },
    {
        path: 'contract/:id',
        component: ContractComponent
    },


    // ***********ACTIVITY*************

    {
        path: 'activity',
        component: ActivityComponent
    },
    {
        path: 'activitylist',
        component: ActivitylistComponent
    },
    {
        path: 'activity/:id',
        component: ActivityComponent
    },
    // ***********CLIENT*************

    {
        path: 'client',
        component: ClientComponent
    },
    {
        path: 'clientlist',
        component: ClientlistComponent
    },
    {
        path: 'client/:id',
        component: ClientComponent
    },



    // ***********SETTINGS*************


    {
        path: 'settings',
        component: SettingsComponent
    },
    {
        path: 'settings/:id',
        component: SettingsComponent
    },
    {
        path: 'settingslist',
        component: SettingslistComponent
    },


    // ***********OFFER*************

    {
        path: 'offer',
        component: OfferComponent
    },
    {
        path: 'offerlist',
        component: OfferlistComponent
    },
    {
        path: 'offer/:id',
        component: OfferComponent
    },


    // ***********ORDER*************

    {
        path: 'order',
        component: OrderComponent

    },
    {
        path: 'orderlist',
        component: OrderlistComponent

    },
    {
        path: 'order/:id',
        component: OrderComponent

    },


    // ***********CUSTOMER*************

    {
        path: 'customer',
        component: CustomerComponent

    },
    {
        path: 'customerlist',
        component: CustomerlistComponent

    },
    {
        path: 'customer/:id',
        component: CustomerComponent

    },




    // ***********PRODUCT*************

    {
        path: 'product',
        component: ProductComponent

    },
    {
        path: 'productlist',
        component: ProductListComponent

    },
    {
        path: 'product/:id',
        component: ProductComponent

    },

    // ======================================
    {
        path: 'loader',
        component: LoaderComponent

    },
    {
        path: 'login',
        component: LoginComponent
    }
    ,
    {
        path: 'login/:userparams',
        component: LoginComponent
    },

    {
        path: 'spinner',
        component: SpinnerComponent
    },
    {
        path: 'forgotpassword',
        component: ForgotPasswordComponent
    },
    {
        path: 'signup',
        component: SignUpComponent
    },
    {
        path: 'message',
        component: MessageComponent,

    },
    {
        path: 'message/:id',
        component: MessageComponent
    },
    {
        path: 'messagelist',
        component: MessageListComponent

    },
    {
        path: 'marksheet',
        component: MarksheetComponent

    },
    {
        path: 'marksheet/:id',
        component: MarksheetComponent

    },
    {
        path: 'marksheetlist',
        component: MarksheetListComponent

    },
    {
        path: 'marksheetmeritlist',
        component: MarksheetmeritListComponent

    },
    {
        path: 'getmarksheet',
        component: GetmarksheetComponent

    },
    {
        path: 'college',
        component: CollegeComponent

    },
    {
        path: 'college/:id',
        component: CollegeComponent

    },
    {
        path: 'collegelist',
        component: CollegeListComponent

    },
    {
        path: 'student',
        component: StudentComponent

    },
    {
        path: 'student/:id',
        component: StudentComponent

    },
    {
        path: 'studentlist',
        component: StudentListComponent

    },
    {
        path: 'user',
        component: UserComponent

    },
    {
        path: 'user/:id',
        component: UserComponent

    },
    {
        path: 'userlist',
        component: UserListComponent

    },
    {
        path: 'role',
        component: RoleComponent

    },
    {
        path: 'rolelist',
        component: RoleListComponent

    },
    {
        path: 'role/:id',
        component: RoleComponent

    },
    {
        path: 'course',
        component: CourseComponent

    },
    {
        path: 'courselist',
        component: CourseListComponent

    },
    {
        path: 'course/:id',
        component: CourseComponent

    },
    {

        path: 'faculty',
        component: FacultyComponent

    },
    {
        path: 'facultylist',
        component: FacultyListComponent

    },
    {
        path: 'faculty/:id',
        component: FacultyComponent

    },
    {
        path: 'timetable',
        component: TimetableComponent


    },
    {
        path: 'timetablelist',
        component: TimetableListComponent

    },
    {
        path: 'timetable/:id',
        component: TimetableComponent

    },
    {
        path: 'subject',
        component: SubjectComponent

    },
    {
        path: 'subjectlist',
        component: SubjectListComponent

    },
    {
        path: 'subject/:id',
        component: SubjectComponent

    },
    {
        path: 'myprofile',
        component: MyprofileComponent
    },
    {
        path: 'file',
        component: FileComponent
    },
    {
        path: 'changepassword',
        component: ChangepasswordComponent


    },
    {
        path: 'position',
        component: PositionComponent
    },
    {
        path: 'positionlist',
        component: PositionListComponent
    },
    {
        path: 'position/:id',
        component: PositionComponent

    },

    {
        path: 'shopping',
        component: ShoppingComponent
    },
    {
        path: 'shoppinglist',
        component: ShoppingListComponent
    },
    {
        path: 'shopping/:id',
        component: ShoppingComponent
    }



];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})


export class AppRoutingModule { }