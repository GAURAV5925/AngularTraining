import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  titles=["Technology Consultancy","Robotic Process Automation","Digital Transfromation"]



  constructor() { }

  ngOnInit(): void {
  }

}
