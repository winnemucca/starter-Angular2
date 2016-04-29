import {Component} from 'angular2/core';

@Component({
    selector: 'dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})

export /**
 * DashboardComponent
 */
class DashboardComponent {

    public dashBoardTitle: string = "Welcome to the dashboard";

}