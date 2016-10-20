module.exports=function(){
    //connect to mongo db
    var users = require("./user.mock.json");

    function findUserById(userId){
        for(var i=0; i<users.length; i++){
            if(users[i]._id == userId){
                return users[i];//callback
            }
        }
        return null;
    }
}