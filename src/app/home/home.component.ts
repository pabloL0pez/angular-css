import { Component, OnInit } from '@angular/core';
import { NavItem } from '../app.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    comments: Comment[] = [];
    filteredComments: Comment[] = [];

    navItems: NavItem[] = [
    {
        text: 'Balance',
        icon: 'account_balance'
    },
    {
        text: 'Dashboard',
        icon: 'dashboard'
    },
    {
        text: 'Favoritos',
        icon: 'favorite'
    },
    {
        text: 'Desarrollador',
        icon: 'developer_board'
    },
    {
        text: 'Configuración',
        icon: 'build'
    }
    ];

    constructor(private activatedRoute: ActivatedRoute) {
        this.comments = this.activatedRoute.snapshot.data.pageData[0];
    }

    ngOnInit() {}
}
