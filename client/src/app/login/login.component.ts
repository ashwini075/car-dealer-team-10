import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{FormBuilder,Validators} from '@angular/forms';
import { HttpClient} from '@angular/common/http';
import { faCar} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 public facar =faCar;
  public uiInvalidCredential = false;

  fbFormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
   
  });

  constructor(private router: Router,
    private fb: FormBuilder,
     public http: HttpClient) { }

  ngOnInit(): void {
  }

async loginProcessHere() {
  const data = this.fbFormGroup.value;

  // ajax call
  const url = 'http://localhost:3600/auth-user';
  const result: any = await this.http.post(url, data).toPromise();
  if (result.opr) {
    sessionStorage.setItem('sid', 'true');
    this.router.navigate(['home']);
  } else {
    this.uiInvalidCredential = true;
  }
}
}
