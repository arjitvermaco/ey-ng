import { Component, OnInit } from '@angular/core';
import { MathService } from './math.service';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  pi:number;
  num1 :number = 10;
  num2 :number = 20;
  sum :number;
  users;
  url = 'https://api.github.com/users';

  constructor(private math:MathService, private github:GithubService){

  }

  ngOnInit(): void {
      
      this.pi = this.math.piValue();
      console.log("value of pi is :", this.pi)
      this.sum = this.math.addNumbers(this.num1,this.num2)

      this.github.getGithubUsers(this.url).subscribe((data)=>{
        console.log(data);
        this.users = data;
      })
  }


  // async getGithubUsers(){
  //   let res = await fetch('https://api.github.com/users');
  //   let data = await res.json();
  //   this.users = data;
  // }
}
