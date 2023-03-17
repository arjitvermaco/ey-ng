import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-details',
  templateUrl: './service-details.component.html',
  styleUrls: ['./service-details.component.css']
})
export class ServiceDetailsComponent implements OnInit {
id;

constructor(private route:ActivatedRoute){

}

ngOnInit(): void {
  this.route.paramMap.subscribe((params)=>{
    console.log(params.get('id'))
  })
}
}
