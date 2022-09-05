import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../interface/auth';

const baseUrl = "http://192.168.1.121:3000/api"
// http://192.168.1.121:3000/api/auth-services/login

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  httpOptions: any
  getToken = () => {
    let token: any = localStorage.getItem("token")

    let data: any = JSON.parse(token)
    return data
  }


  constructor(private http: HttpClient) { }

  login(data: any): Observable<Auth> {
    return this.http.post<Auth>(`${baseUrl}/auth-services/login`, data)
  }

  logout(): Observable<Auth> {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.getToken()
      })
    }
    console.log(this.getToken())
    return this.http.post<Auth>(`${baseUrl}/auth-services/logout`, this.httpOptions)
  }

}
