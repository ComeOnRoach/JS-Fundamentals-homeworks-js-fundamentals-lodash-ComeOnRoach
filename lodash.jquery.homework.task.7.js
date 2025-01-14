const _ = require('lodash');

class User{
    id;
    name;
    age;
    active;

    constructor(id, name, age, active){
        this.id = id;
        this.name = name;
        this.age = age;
        this.active = active;
    }
}

let users = [ 
    new User(1, 'Alice', 25, true ),
    new User(2, 'Bob', 30, false ),
    new User(3, 'Charlie', 35, true ),
    new User(4, 'David', 40, false ),
];

let crystal = new User(5, 'Crystal', 15, true );
let updatedUser = new User(1, 'Lily', 29, true )

function getActiveUsers(users){
    return _.filter(users, user => user.active);
}

function getSortedUsersByAge(users){
    return _.sortBy(users, (user) => user.age)
}

function getUserNames(users){
    return _.map(users, 'name');
}

function getUserById(users, id){
    return _.find(users, (user) => user.id === id) ?? null;    
}

function addUser(users, newUser){
    return _.concat(users, newUser);
}

function removeUserById(users, id){
    return _.remove(users, user =>
        user.id === id);
}

function updateUser(users, updatedUser){
    return _.map(users, user => user.id === updatedUser.id ? {...updatedUser} : {...user});
    
}

console.log('Get Active Users: ')
console.log(getActiveUsers(users));
console.log('Sorted by age in ascending order');
console.log(getSortedUsersByAge(users));
console.log("Returns an array of all users' names");
console.log(getUserNames(users));
console.log("Find user object by id");
console.log(getUserById(users, 2));
console.log("Add new user");
console.log(addUser(users, crystal));
console.log("Remove user by id");
console.log(removeUserById(users, 2));
console.log("updated array");
console.log(users);
console.log("update user by id");
console.log(updateUser(users, updatedUser));

