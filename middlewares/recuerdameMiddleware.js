// cookie para recordar al cliente por un determinado tiempo
function recuerdameMiddleware (req, res, next){
    if( req.cookies.recuerdame == undefined &&  req.session.userID != undefined){
        req.session.userID = undefined;
        req.userID = req.session.userID;
    }
    next();
}

module.exports = recuerdameMiddleware;