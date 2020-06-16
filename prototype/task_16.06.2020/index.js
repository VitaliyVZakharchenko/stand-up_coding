export function User(name, age) {
    this.name = name;
    this.age = age;
};

User.prototype.sayHi = function sayHi() {
    console.log(`Hi, I am ${this.name}`);    
};

User.prototype.requestNewPhoto = function () {
    console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
    if (age < 0) return false;
    this.age = age;
    if (age >= 25) this.requestNewPhoto();
    return age;
};

// console.log(User.prototype);

// console.log(new User('Test', 50));
// console.log(User);
// User.sayHi();