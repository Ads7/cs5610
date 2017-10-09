
import {User} from '../models/user.model.client';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  users: User[]  = [
    new User('123', 'alice', 'qq'),
    new User('234', 'bob', 'qq'),
    new User('345', 'charlie', 'qq'),
  ];

  findUserByCredentials(username, password) {
return this.users.find(function (user) {
    return user.username === username && user.password === password;
});
  }

  findUserById(userId: String) {
    return this.users.find(function (user) {
      return user._id === userId;
    });
  }
}

