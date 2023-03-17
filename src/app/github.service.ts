import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private http: HttpClient) { }

  // public getGithubUsers(){
  //   return this.http.get('https://api.github.com/users');
  // }

  public getGithubUsers(url){
    return this.http.get(url);
  }
}
