const path = require('path');
let fs = require('fs');

const usersFilePath = path.join(__dirname, '../src/data/users.json');
let usersLogin = fs.readFileSync(usersFilePath, 'utf-8');
let userLogin = JSON.parse(usersLogin);

function middlewire(req,res,next){
    let userID = userLogin.find(element =>element.id == 0);
    req.userID = userID;
    next();
}

module.exports = middlewire;