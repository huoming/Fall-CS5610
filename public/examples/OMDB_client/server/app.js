/*
/!* 1. pass db and mongoose reference to server side application module
*  2. server.js in public folder ==> load app.js in server folder
*  ==> load user.model.server.js | user.service.server.js *!/
module.exports = function(app) {

    var userService  = require("./services/user.service.server.js") (app);

    /!* manipulate the userModel, telling user what movie they like*!/
    var movieService = require("./services/movie.service.server.js")(appl);
}*/

module.exports = function(app){
    require("./service/user2.service.server.js")(app);
    require("./service/movie.service.server.js")(app);
    require("./service/webistes.service.server.js")(app);
    require("./service/pages.service.server.js")(app);
    require("./ widget.service.server.js")(app);
}


