module.exports = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullname = function () {
    return this.firstname + '' + this.lastName;
  };
};
