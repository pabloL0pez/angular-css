import { Component, OnInit } from '@angular/core';
import { NavItem, GridItem } from '../app.interfaces';
import { ActivatedRoute } from '@angular/router';
import { NAVBAR_ITEMS } from '../data-sources/navbar-items';
import { COVID19_GRID_ITEMS } from '../data-sources/covid19-grid-items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    navItems: NavItem[] = NAVBAR_ITEMS;

    comments: Comment[] = [];
    filteredComments: Comment[] = [];

    gridItems: GridItem[] = COVID19_GRID_ITEMS;

    constructor(private activatedRoute: ActivatedRoute) {
        this.comments = this.activatedRoute.snapshot.data.pageData[0];
    }

    ngOnInit() {}
}
