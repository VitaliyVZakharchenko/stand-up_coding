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

User.prototype.setAge = function (value) {
    if (value < 0) return false;
    this.age = age;
    if (value >= 25) this.requestNewPhoto();
    return age;
};

// console.log(User.prototype);

// console.log(new User('Test', 50));
// console.log(User);
// User.sayHi();