//input: array of strings, array of objects
//output: array objects

//algo
//1. map array of objects
//2.
//3.

const markAdmins = (users, adminsIds) => {
    return users.map(user => {
        return { ...user, isAdmin: adminsIds.includes(user.id) };
    });
}

const markAdmins = (users, adminsIds) =>
    users.map(user =>
        ({ ...user, isAdmin: adminsIds.includes(user.id) }));

const adminIds = ['3'];

const users = [
    {id: '1', name: 'Bob'},
    {id: '2', name: 'Tom'},
    {id: '3', name: 'Sam'},
    {id: '4', name: 'Tad'},
];

console.log(markAdmins(users, adminIds));