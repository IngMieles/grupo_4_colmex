function middlewire(req,res,next){
    let userID = req.session.userID;
    req.userID = userID;
    next();
}

module.exports = middlewire;