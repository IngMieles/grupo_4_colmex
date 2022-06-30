// cookie para recordar al cliente por un determinado tiempo
function recuerdameMiddleware (req, res, next){
    if( req.cookies.recuerdame == undefined &&  req.session.userID != undefined){
        req.session.destroy();
        res.clearCookie('recuerdame');
        let userID = req.userID;
        res.render('login',{userID,errorLog:[{msg:"Sesión terminada"}]});
    }
    next();
}

module.exports = recuerdameMiddleware;