import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControlOptions, AsyncValidatorFn } from '@angular/forms';
import { ApiService } from '../../core/services/api.service';
import { noWhitespaceValidator } from '../../core/services/no-whitespace.validator';
import { Router } from '@angular/router';
import { ToasterService } from '../../core/services/toaster.service';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  myForm: FormGroup;
  isSubmitted = false;
  constructor(private fb: FormBuilder,
  private apiService: ApiService,
  private toster: ToasterService,
  private confirmationService: ConfirmationService,
  private router: Router) { }

  phoneRegex =/^[0-9]{10}$/;
  emailRegex = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
  passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


  
  ngOnInit() {
    this.createForm();
  }
  createForm(){
    this.myForm = this.fb.group({
      companyname: ['', [Validators.required, noWhitespaceValidator, Validators.minLength(5)]],
      // fullname: ['', Validators.required],
      contactname: ['', [Validators.required, noWhitespaceValidator, Validators.minLength(5)]],
      phone: ['', [Validators.required, Validators.pattern(this.phoneRegex), noWhitespaceValidator]],
      email: ['', [Validators.required, Validators.pattern(this.emailRegex), noWhitespaceValidator]],
      url: ['', [Validators.required, noWhitespaceValidator]],
      password: ['', [Validators.required, Validators.pattern(this.passRegex), noWhitespaceValidator]],
      address: ['', [Validators.required, noWhitespaceValidator]],
      description: ['', [Validators.required, noWhitespaceValidator]],
    })
  }
  public get f() {
    return this.myForm.controls;
  }


  onSubmit(){
    this.isSubmitted = true;
    console.log(this.myForm);

    console.log("formvalid", this.myForm.controls['companyname'].value.trim());
    if(this.myForm.invalid){
      console.log("invalid")
      this.isSubmitted = false;
      return;
    }
    if (this.myForm.valid && this.isSubmitted) {
      console.log("valid")
      this.apiService.post('addEmployer', this.myForm.value).subscribe(data =>{
        console.log(data);
        if (data.status === 200) {
          this.toster.successToast('Employer Added', 'Employer Added Successfully');
          this.confirmationService.confirm({
            message: 'Do you Want to add a new User Again?',
            accept: () => {
              this.myForm.reset();
              //Actual logic to perform a confirmation
            },
            reject: () =>{
              this.router.navigateByUrl('/employers');
            }
        });
        }else if (data.status === 201) {
          this.toster.errorToast('Employer Already Exist', 'Employer Already Exists');
          return;
        }
      })
    } 

  }

}
