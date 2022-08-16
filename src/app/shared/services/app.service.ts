import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URLs } from '../constants/url.constant';
import { USADataRes } from '../models/response.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http:HttpClient) { }

  getUSAData(){
    return this.http.get<USADataRes>(URLs.dataUSA);
  }
}
