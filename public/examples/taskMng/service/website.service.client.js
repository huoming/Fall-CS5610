(function(){
    "use strict";
    angular
        .module("TaskMngApp")
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
        function findWebstieById(webstieId){}


        function findWebstiesByUser(userId){
            var u_webs = [];
            for(var i=0; i<websties.length; i++){
                if(websties[i].developerId == userId){
                   u_webs.push(websties[i]);
                }
            }
            return u_webs;
        }
        function updateWebstie(webstieId, webstie){}
        function deleteWebstie(webstieId){}
    }
})();