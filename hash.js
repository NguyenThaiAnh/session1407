const { hash, compare } = require('bcrypt');

hash('abcd', 8)
.then(encrypt => console.log(encrypt))
.catch(err => console.log(err));

compare('abcd', '$2a$08$iKno9yXC1yXK58foOjl3Tec78FZROqkASvcTvea2IcC11p0gc.0gO')
.then(same => console.log(same))// same === true thi dang nhap thanh cong
.catch(err => console.log(err+""))
