module.exports = function(app){
    var userModel = require("./model/user.model.server.js")(app);

    require("./services/user.service.server.js")(app, userModel);
}