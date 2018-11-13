import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../../core/model/user';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../core/services/user.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private fb: FormBuilder,
    private userService: UserService, 
  private router: Router) { }
  user: User;
  createdAt: any;
  updatedAt: any;
  myForm: FormGroup;
  ngOnInit() {
    this.createForm();
    this.getUserDetail();
  }

  //create a reactive forms
  createForm(){
    this.myForm = this.fb.group({
      companyname : [''],
      contactname : [''],
      phone : [''],
      address : [''],
      email : [''],
      url : ['' ],
      password : ['' ],
      description : [''],
    })
  };

  
//get user detail informations from resolver and patch it the form
  getUserDetail(){
    this.route.data.subscribe((data)=>{
      data = data.userData; //resolver parameter is named as userData 
      if (data.status === 201) {
        this.user = data.user;
        this.myForm.patchValue({
          companyname : this.user.company_name ? this.user.company_name : '',
          contactname : this.user.contact_name ? this.user.contact_name : '',
          email : this.user.email ? this.user.email : '',
          phone : this.user.phone ? this.user.phone : '' ,
          address : this.user.address ? this.user.address : '',
          password : this.user.password ? this.user.password : '',
          description : this.user.description ? this.user.description : '',
        });
        this.createdAt = this.user.createdAt; 
        this.updatedAt = this.user.updatedAt; 
      }else{
        this.router.navigate(['/'])
      }
    });
  };

  onSubmit(userid){
    if (this.myForm.valid) {
      var body = this.myForm.value;
      this.userService.updateUser(`${userid}`+"/update", body).subscribe(data => {
        console.log(data);
      })
    }
    console.log(this.myForm.value, this.myForm.valid);
  }

}
