// const user = {
//     _firtsName: 'John',
//     lastName: ' Doe',

//     getFullName() {
//         return `${this.firtsName} ${this.lastName}`;
//     },

//     setFullName(fullName) {
//         [this.firtsName, this.lastName] = fullName.split(' ');
//     },

//     get fullName() {
//         return `${this.firtsName} ${this.lastName}`;
//     },

//     set fullName(fullName) {
//         [this.firtsName, this.lastName] = fullName.split(' ');
//     },

//     set firtsName(name) {
//         if (typeof name === 'string') {
//             this._firtsName = name;
//         } else {
//             console.error('Not a string');
//         }
//     },

//     get firtsName() {
//         return this._firtsName = name;
//     },
// };

// user.firtsName = 1;
// console.log(user._firtsName);

const user = {
    firstName: 'John',
    lastName: 'Doe',

    get fullName() {
        return `${this.firstName} ${this.lastName}` },

    set fullName(value) {
        const [firstName, lastName] = value.split(' ');
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

export default user;