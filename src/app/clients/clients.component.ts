import { AfterViewInit, Component, ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})


export class ClientsComponent implements OnInit, AfterViewInit {
  
  @ViewChild('myModalClose') modalClose!:ElementRef;

  reactiveForm!:FormGroup

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.reactiveForm = this.formBuilder.group({
      clientName: ['',[Validators.required, Validators.minLength(3)]],
      organisationName: ['',[Validators.required,Validators.minLength(3)]],
      mobileNo: ['',[Validators.required, Validators.pattern('[1-9]{1}[0-9]{9}')]],
      clientEmail:['',[Validators.required,Validators.email]],
      queryBox: ['',Validators.required],
      termsCondition:[true,Validators.requiredTrue],
    })
  }

  onSubmit(){
    if(this.reactiveForm.valid){
      
      console.log(this.reactiveForm.value);
    }
  }

  closeModel(){
    this.modalClose.nativeElement.style.display='none';
    this.reactiveForm.reset();
  }

  ngAfterViewInit(){
    this.closeModel();
  }

}
