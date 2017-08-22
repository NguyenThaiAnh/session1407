const { hash, compare } = require('bcrypt');

hash('abcd', 8)
.then(encrypt => console.log(encrypt))
.catch(err => console.log(err));