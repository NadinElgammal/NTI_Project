import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormBuilder, FormGroup } from '@angular/forms'
import { userModel } from './user-dashboard.model';
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class userDashboardComponent implements OnInit {

  formValue !: FormGroup;
  userData !: any;
  userObj : userModel = new userModel();
  showAdd !: boolean;
  showUpdate !: boolean;
  @Input() receive !: string;
  @Input() mobileSpecification !: any;
  role:string =""
  constructor(private api: ApiService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      mobile: [''],
      salary: ['']
    })
    this.getuserDetails();
    this.role = localStorage.getItem('userType')!
  }
  clickAdduser(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }
  postuserDetails() {
    this.userObj.FirstName = this.formValue.value.firstName;
     this.userObj.LastName = this.formValue.value.lastName;
     this.userObj.Email = this.formValue.value.email;
     this.userObj.Mobile = this.formValue.value.mobile;
     this.userObj.Salary = this.formValue.value.salary;
    this.api.Postuser(this.userObj)
      .subscribe(res => {
        console.log(res);
        let ref = document.getElementById('close');
      ref?.click();
      this.getuserDetails();
      })
  }
  getuserDetails() {
    this.api.Getusers()
    .subscribe(res=>{
      this.userData = res.userDetails;
      
    })
  }
  edituserDetail(){
     this.userObj.FirstName = this.formValue.value.firstName;
     this.userObj.LastName = this.formValue.value.lastName;
     this.userObj.Email = this.formValue.value.email;
     this.userObj.Mobile = this.formValue.value.mobile;
     this.userObj.Salary = this.formValue.value.salary;
    this.api.Updateuser(this.userObj)
    .subscribe(res=>{
      alert("Updated Successfully")
      let ref = document.getElementById('close');
      ref?.click();
      this.getuserDetails();
    })
  }
  onEdit(row : any){
    this.userObj.Id = row.id;
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobile'].setValue(row.mobile);
    this.formValue.controls['salary'].setValue(row.salary);
    this.showUpdate = true;
    this.showAdd = false;
  }

  deleteuserDetail(row : any){
   let clickedYes = confirm("Are you sure want to delete");
   if(clickedYes){
    this.api.Deleteuser(row.id)
    .subscribe(res=>{
      alert("Deleted Successfully");
      this.getuserDetails();
    })
   }
    
  }
}
