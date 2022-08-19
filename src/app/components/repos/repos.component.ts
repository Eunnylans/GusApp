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
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent implements OnInit, OnChanges {
  @Input() repoUrl: string;
  repos : any = [];

  constructor(
    private githubService: GithubService,
    private ref: ChangeDetectorRef,
    private toastr : ToastrService
  ) {}

  ngOnInit(): void {}
  ngOnChanges(): void {
if(this.repoUrl){
  this.githubService.getRepos(this.repoUrl).subscribe({
    complete : () => {this.toastr.success("Changed  SuccessFully!")},
    error : (err : string) => {this.toastr.error(JSON.stringify(err),"Some error occurred")},
    next:(repos : any = []) => {
      this.repos = repos;
      this.ref.detectChanges();
    }
  })
}
  }
}




