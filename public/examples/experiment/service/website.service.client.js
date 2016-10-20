(function(){
    "use strict";
    angular
        .module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);

    function WebsiteService(){
        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123" },
            { "_id": "678", "name": "Checkers",    "developerId": "123" },
            { "_id": "789", "name": "Chess",       "developerId": "234" }
        ];

        var service = {
            createWebstie : createWebstie,
            findAllWebsties: findAllWebsties,
            findWebsitesByUser : findWebsitesByUser,
            findWebstieById : findWebstieById,
            updateWebstie : updateWebstie,
            deleteWebstie: deleteWebstie
        };
        return service;


        function createWebstie(webstie){}
        function findAllWebsties(callback){ callback(websties);}

        function findWebstieById(webstieId){
            var web = null;
            for(var i=0; i<websites.length; i++){
                if(websites[i]._id == websiteId){
                    web = websites[i];
                    break;
                }
            }
            return web;
        }


        function findWebsitesByUser(userId){
            var u_webs = [];
            for(var i=0; i<websites.length; i++){
                if(websites[i].developerId == userId){
                   u_webs.push(websites[i]);
                }
            }
            return u_webs;
        }
        function updateWebstie(webstieId, webstie){}
        function deleteWebstie(webstieId){}
    }
})();