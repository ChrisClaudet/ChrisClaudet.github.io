//Destructuring from arrays
const scores = [929321, 899341, 888336, 772739, 543671, 243567];

const [gold, silver, ...everyoneElse] = scores;

//now if you print gold = 929321
//if you console.log silver = 899341


//Destructuring objects

const user = {
    email: 'harvey@gmail.com',
    password: 'Yoooo123',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American boy'
}

// const firstName = user.firstName;
// const lastName = user.lastName;
//This gets pretty long if we want each property to be a var

// Instead of this: const {email} = user.email;
const { email,firstName,lastName,city,bio } = user;
//This makes 5 different variables because they are the same string
