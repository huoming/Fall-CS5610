module.exports=function(){
    //connect to mongo db
    var websites = require("./websites.mock.json");

    var api ={"findWebsiteById": findWebsiteById};
    return api;

    function findWebsiteById (webId){
        for(var i=0; i<websites.length; i++){
            if(websites[i]._id == webId){
                return websites[i];
            }
        }
        return null;
    }
}