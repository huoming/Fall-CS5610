(function(){
    "use strict";
    angular
        .module("WebAppMaker")
        .factory("WebsiteService",WebsiteService);

    function WebsiteService($http, $rootScope){

        var websites = [
            { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
            { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
            { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
            { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
            { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
            { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        ];

        var service = {
            createWebstie : createWebstie,
            findAllWebsties: findAllWebsties,
            findWebsitesByUser : findWebsitesByUser,
            findWebstieById : findWebstieById,
            updateWebstie : updateWebstie,
            deleteWebstie: deleteWebstie,
            loadWebsitesbyId: loadWebsitesbyId
        };
        return service;

        function loadWebsitesbyId(wid){
            var website = null;
            $http.get("/api/example/experiment/webiste/"+wid)
                .success(function(response){
                    website = response;
                    $rootScope.$broadcast('handleLoadWebsite', website);
                });
        }

        function createWebstie(website){
            //websites.push(website);
            return $http.post("/api/example/experiment/user/"+website.developerId+"/website", website);
        }
        function findAllWebsties(uid){
            return $http.get("/api/example/experiment/user/"+uid+"/website");
        }

        function findWebstieById(wid){
            return $http.get("/api/example/experiment/webiste/"+wid);
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
        function updateWebstie(wid, webstie){
            return $http.put("/api/example/experiment/webiste/"+wid,webstie);
        }
        function deleteWebstie(webstieId){}
    }
})();