import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { JobsService } from '../../core/services/jobs.service';
import { ToasterService } from '../../core/services/toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addjob',
  templateUrl: './addjob.component.html',
  styleUrls: ['./addjob.component.css']
})
export class AddjobComponent implements OnInit {
  myForm: FormGroup
  constructor(private fb: FormBuilder,
    private jobService: JobsService,
    private toster: ToasterService,
    private router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.myForm = this.fb.group({
      jobTitle: ['', Validators.required],
      jobLocation: [''],
      jobType: ['',],
      jobDescription: ['',],
      companyName: ['',],
      experience: ['',],
      applicationMethod: ['', Validators.required]

    })
  }
  private get f() {
    return this.myForm.controls;
  }

  postAJob() {
    if (this.myForm.valid) {
      var body = this.myForm.value;
      this.jobService.postAjob('postAjob', body).subscribe(data => {
        if (data.status === 200) {
          this.toster.successToast('Job Added', 'Job Added Successfully');
          this.router.navigateByUrl('/jobsdetail');
        }
      })
    }
  }


}
