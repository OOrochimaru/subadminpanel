import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from '../core/model/user';
import { UserService } from '../core/services/user.service';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  
  myForm: FormGroup;
  employers: User[] = [];
  jobsList: any[] = [];
  cols: any[];
  totalJobs: Number;
  paginationData : any = {};
  constructor(private fb: FormBuilder,
  private router: Router,
  private userService: UserService,

) { }
  ngOnInit() {
   this.createForm();
    this.userService.getUsers('getemployers').subscribe(data => {
      console.log(data.data);
      for(var key in data.data){
        console.log("keyed", data.data[key]);
        this.employers.push(data.data[key]);
      }
      console.log(this.employers);
    });
    this.userService.getPaginationUsers('paginationUsers', {page: 1, skip: 0, limit: 3})
    .subscribe(data => {
      // this.employers = data.data;
      this.jobsList = [];
      this.totalJobs = data.totalRecords;
      for(var i = 0; i < data.data.length; i++){
          this.jobsList.push(data.data[i]); 
        }
        console.log(this.jobsList);

    })

    this.cols = [
      { field: 'Logo', header: 'Logo'},
      { field: 'contact_name', header: 'Contact Name' },
      { field: 'company_name', header: 'Company Name' },
      { field: 'email', header: 'Email' },
      // { field: 'Jobs', header: 'Jobs' },
      // { field: 'Applications', header: 'Applications' },
      // { field: 'status', header: 'Status' },
      { field: 'action', header: 'Action' }
  ];

  this.myForm.controls['search'].valueChanges.pipe(filter(searchedWord => 
    this.myForm.controls['search'].valid),
    debounceTime(500),
    distinctUntilChanged(),
  ).subscribe(data => {
    console.log(data);
    this.userService.getSearchedUsers('getSearched', {data}).subscribe(data => {
      var users = data.data;
      console.log(users.length)
      // console.log(data);
      if (data.status === 200) {
          this.employers = [];
        for(var i = 0; i < users.length; i++){
            this.employers.push(users[i]);

        }
      }
    });
  })
 
  }
  addEmployer(){
    this.router.navigateByUrl('employers/addEmployer');
    console.log('User Added');
  }

  createForm(){
    this.myForm = this.fb.group({
      search : ['', Validators.required]
    })
  }

  paginate(event) {
    // console.log("first record: ", event.first);
    // console.log("no of rows : ",event.rows);
    // console.log("index of nex page:", event.page);
    // console.log("total pages: ", event.pageCount);
    this.paginationData.first = event.first;
    this.paginationData.rows = event.rows;
    this.paginationData.page = event.page;
    this.paginationData.pageCount = event.pageCount;

    var paginate = this.paginationData;

    this.userService.getPaginationUsers('paginationUsers', {paginate})
    .subscribe(data => {
      // this.employers = data.data;
      this.jobsList = [];
      this.totalJobs = data.totalRecords;
      for(var i = 0; i < data.data.length; i++){
          this.jobsList.push(data.data[i]); 
        }
        console.log(this.jobsList);

    })
    //event.first = Index of the first record
    //event.rows = Number of rows to display in new page
    //event.page = Index of the new page
    //event.pageCount = Total number of pages
}

}
