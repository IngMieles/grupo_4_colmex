const path = require('path');
let fs = require('fs');

const usersFilePath = path.join(__dirname, '../src/data/usersData.json');
let usersLogin = fs.readFileSync(usersFilePath, 'utf-8');
let userLogin = JSON.parse(usersLogin);

function middlewire(req,res,next){
    let userID = req.session.userID;
    req.userID = userID;
    next();
}

module.exports = middlewire;