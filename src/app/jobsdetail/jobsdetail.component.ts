import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jobsdetail',
  templateUrl: './jobsdetail.component.html',
  styleUrls: ['./jobsdetail.component.css']
})
export class JobsdetailComponent implements OnInit {
  myForm: FormGroup;
  
  constructor(private fb: FormBuilder,
  private router: Router) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.myForm = this.fb.group({
      search : ['', Validators.required]
    })
  };

  addJob(){
  this.router.navigateByUrl('/addjob');
  }
}
