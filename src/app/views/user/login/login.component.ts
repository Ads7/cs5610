import {Component, OnInit} from '@angular/core';
// Note: router is singleton instance
import {Router} from '@angular/router';
import {User} from '../../../models/user.model.client';
import {UserService} from '../../../services/user.service.client';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor( private userService: UserService, private router: Router) { }

  login(username: String, password: String) {
    // alert('username:' + username);
    const user: User = this.userService.findUserByCredentials(username, password);
    // array since can give string and value pair
    console.log(user);
    if (user) {
      this.router.navigate(['profile', user._id]);
    }
  }

  ngOnInit() {
  }

}
