module.exports = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastname = lastName;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastname;
  };
};
