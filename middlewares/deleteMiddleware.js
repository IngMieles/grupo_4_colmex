const path = require('path');

const usersFilePath = path.join(__dirname, '../src/data/users.json');

function deleteMiddlewire(req,res,next){
    res.redirect('/');
}

module.exports = deleteMiddlewire;