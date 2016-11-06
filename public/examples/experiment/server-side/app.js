module.exports=function(app, mongoose, db){

    var UserModel = require("./model/user.model.server.js")(mongoose, db);
    require("./services/user.service.server.js")(app, UserModel);

    var WebModel = require("./model/website.model.server.js")(mongoose, db);
    require("./services/website.service.server.js")(app, WebModel);

    var PageModel =  require("./model/page.model.server.js")(mongoose, db);
    require("./services/page.service.server.js")(app, PageModel);

     require("./services/widget.service.server.js")(app);
}

