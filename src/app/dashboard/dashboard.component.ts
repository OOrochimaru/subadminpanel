import { Component, OnInit } from '@angular/core';
import { User } from '../core/model/user';
import { ApiService } from '../core/services/api.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { UserService } from '../core/services/user.service';
import { ConfirmationService } from 'primeng/api';
import { ToasterService } from '../core/services/toaster.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user: User[] = [];
  display: boolean = false;
  cols: any[];
  selectedUser: User;
  constructor(private userService : UserService,
     private router: Router,
     private confirmationService: ConfirmationService,
    private toster: ToasterService) { }

  ngOnInit() {
    this.userService.getUsers('userlist').subscribe(data=>{
      console.log(data);
      data = data.data
      for(var key in data){
        this.user.push(data[key]);
      }
      console.log(this.user)
    });

    this.cols = [
      { field: 'contact_name', header: 'Contact Name' },
      { field: 'Email', header: 'Email' },
      { field: 'Role', header: 'Role' },
      { field: 'Action', header: 'Action' }
  ];
  }
  editUser(userid){
    this.router.navigate(['/employers/updateEmployer', userid]);
    console.log(userid);
  }

  showDialog(user) {
    console.log(user);
      this.display = true;
        this.selectedUser = user;
        console.log(this.selectedUser);
  };

  deleteUser(user){
    this.confirmationService.confirm({
      message: 'Are you sure that you want to Delete this user',
      accept: () => {
        this.userService.deleteUser(`${user._id}/delete`).subscribe(data =>{
          this.user.splice(this.user.indexOf(user), 1);
          this.toster.successToast('User Deleted', 'User Deleted Successfully');
          console.log(data);
        })
          //Actual logic to perform a confirmation
      }
  });
  
  }
}
