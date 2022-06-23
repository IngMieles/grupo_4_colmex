
function loginMiddleware (req, res, next){
    if(!req.userID){
        res.redirect('/login');
    }
    next();
}

module.exports = loginMiddleware;