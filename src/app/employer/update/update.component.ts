import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../core/model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';
import { ToasterService } from '../../core/services/toaster.service';
import { noWhitespaceValidator } from '../../core/services/no-whitespace.validator';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
  private toster: ToasterService,
    private userService: UserService, 
  private router: Router) { }
  user: User;
  createdAt: any;
  updatedAt: any;
  myForm: FormGroup;

  phoneRegex =/^[0-9]{10}$/;
  emailRegex = /\S+@\S+\.\S+/;
  passRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  ngOnInit() {
    this.createForm();
    this.getUserDetail();
  }

  //create a reactive forms
  createForm(){
    this.myForm = this.fb.group({
      companyname : ['', [Validators.required, noWhitespaceValidator, Validators.minLength(5)]],
      contactname : ['', [Validators.required, noWhitespaceValidator, Validators.minLength(5)]],
      phone : ['', [Validators.required,Validators.pattern(this.phoneRegex)]],
      address : ['', [Validators.required, noWhitespaceValidator]],
      email : ['', [Validators.required, Validators.pattern(this.emailRegex), noWhitespaceValidator]],
      url : ['', [Validators.required, noWhitespaceValidator] ],
      password : ['', [Validators.required, Validators.pattern(this.passRegex)] ],
      description : ['', [Validators.required, noWhitespaceValidator]],
    })
  };

  
//get user detail informations from resolver and patch it the form
  getUserDetail(){
    this.route.data.subscribe((data)=>{
      data = data.userData; //resolver parameter is named as userData 
      if (data.status === 201) {
        console.log(data.userData);
        this.user = data.user;
        this.myForm.patchValue({
          companyname : this.user.company_name ? this.user.company_name : '',
          contactname : this.user.contact_name ? this.user.contact_name : '',
          email : this.user.email ? this.user.email : '',
          phone : this.user.phone ? this.user.phone : '' ,
          address : this.user.address ? this.user.address : '',
          password : this.user.password ? this.user.password : '',
          url: this.user.url ? this.user.url : '',
          description : this.user.description ? this.user.description : '',
        });
        this.createdAt = this.user.createdAt; 
        this.updatedAt = this.user.lastUpdated; 

      }else{
        this.router.navigate(['/'])
      }
    });
  };
  public get f() {
    return this.myForm.controls;
  }

  onSubmit(userid){
    console.log(this.myForm)
    if (this.myForm.valid) {
      var body = this.myForm.value;
      console.log(this.myForm.value)
      this.userService.updateUser(`${userid}`+"/update", body).subscribe(data => {
        this.router.navigateByUrl('/employers');
        this.toster.successToast('Employer Updated', 'Employer Updated Successfully');
      })
    }
  }

}
