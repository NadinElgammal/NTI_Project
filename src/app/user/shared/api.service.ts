import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { pipe } from 'rxjs';
import {map} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService{

  public loginAPIUrl : string = "https://localhost:44371/api/Login/";
  public userAPIUrl : string = "https://localhost:44371/api/user/";
  constructor(private _http : HttpClient) { }

  Postuser(data : any){
    return this._http.post<any>(`${this.userAPIUrl}add_user`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  Deleteuser(id : number){
    return this._http.delete<any>(`${this.userAPIUrl}delete_user/`+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  Updateuser(data : any){
    return this._http.put<any>(`${this.userAPIUrl}update_user`,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  Getusers(){
    return this._http.get<any>(`${this.userAPIUrl}get_all_users`)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  signUp(userObj : any){
    //return this._http.post<any>(this.loginAPIUrl+"signup",userObj)
    return this._http.post<any>(`${this.loginAPIUrl}signup`,userObj)
  }
  login(userObj:any){
    return this._http.post<any>(`${this.loginAPIUrl}login`,userObj)
  }
}
