import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GusApp';

  constructor(
    private auth: AuthService,
    private toastr : ToastrService
  )
  {
      auth.getUser().subscribe(
        {
          complete: () => {this.toastr.success("Success!")},
          error : (err) => {this.toastr.error(JSON.stringify(err),"Some ERROR happened!")},
          next : (user) => {
            console.log(user);
          }
        }
      )
  }
}
