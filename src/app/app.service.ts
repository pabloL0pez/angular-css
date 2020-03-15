import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class AppService {

    constructor(private http: HttpClient) {}

    getComments(id?: number) {
        if (id) {
            return this.http.get(`${environment.server}/comments/${id}`);
        }
        return this.http.get(`${environment.server}/comments`);
    }
}