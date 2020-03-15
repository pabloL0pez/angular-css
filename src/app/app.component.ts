import { Component } from '@angular/core';
import { NavItem } from './app.interfaces';
import { AppService } from './app.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'PracticingCSS';
}