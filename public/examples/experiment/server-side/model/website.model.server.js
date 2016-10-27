var websites = require("./websites.mock.json");
module.exports=function(){
    //connect to mongo db

    var api ={
        "findWebsiteById": findWebsiteById,
        "createWebsite": createWebsite,
        "findAllWebsitesForUser": findAllWebsitesForUser,
        "updateWebsite": updateWebsite
    };
    return api;

    function findWebsiteById (webId){
        for(var i=0; i<websites.length; i++){
            if(websites[i]._id == webId){
                return websites[i];
            }
        }
        return null;
    }

    function createWebsite(website){
        websites.push(website);
    }

    function findAllWebsitesForUser(uid){
        var u_websites = [];
        for(var w in websites){
            if(websites[w].developerId == uid){
                u_websites.push(websites[w]);
            }
        }
        return u_websites;
    }

    function updateWebsite(wid, website){
        for(var w in websites){
            if(websites[w]._id == wid){
                websites[w].name = website.name;
                websites[w].description = website.description;
                break;
            }
        }
    }
}