import { Injectable } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import { conf } from '../../helper';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  headers: any;

  base_url: string = "";
  constructor(private http: HttpClient) {
    this.headers = {
      headers: new HttpHeaders().set('NG-AUTH', '12NQ1A0542')
    }
  }
  getData(uri: string) {
    return this.http.get(conf.api + uri, this.headers);
  }
}
