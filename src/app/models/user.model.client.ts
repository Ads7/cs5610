export class User {
  _id: String;
  username: String;
  password: String;
  lastName: String;
  firstName: String;
  constructor(_id, username, password) {
    this._id = _id;
    this.username = username;
    this.password = password;
  }
}
