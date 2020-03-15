import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppService } from './app.service';
import { forkJoin, throwError } from 'rxjs';
import { catchError } from "rxjs/operators";

@Injectable()
export class AppResolver implements Resolve<any> {

    constructor(private appService: AppService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let commentsCall = this.appService.getComments();

        return forkJoin([ commentsCall ]).pipe(catchError(error => {
            return throwError(error);
        }));
    }
}