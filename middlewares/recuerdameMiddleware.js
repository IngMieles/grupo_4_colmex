// cookie para recordar al cliente por un determinado tiempo
function recuerdameMiddleware (req, res, next){
    if( req.cookies.recuerdame == undefined &&  req.session.userID != undefined){
        req.session.destroy();
        res.clearCookie('recuerdame');
        req.userID = undefined;
        res.render('login',{errorLog:[{msg:"Sesión terminada"}]});
    }
    next();
}

module.exports = recuerdameMiddleware;