import {
  Component,
  OnInit,
  Input,
  OnChanges,
  ChangeDetectorRef,
} from '@angular/core';


import { GithubService } from './../../services/github.service';
import {ToastrService} from "ngx-toastr";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {

   user : any = null;
   userName : string; 
   error : any = null;

  constructor(
    private githubService: GithubService,
    private ref: ChangeDetectorRef,
    private toastr : ToastrService
  ) { }

  ngOnInit(): void {
  }
  
  handleFind(){
    this.githubService.getUserDetails(this.userName).subscribe({
      complete : () => {this.toastr.success("Details Addeed SuccessFully")},
      error : (err) => {this.toastr.error(JSON.stringify(err),"Some Error Occured")},
      next : (user) => {
        this.user = user;
        this.error = null;
        this.ref.detectChanges();
      }
    }
       
    )
  }

}
 