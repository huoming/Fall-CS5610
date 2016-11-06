module.exports=function(app, WebModel){

     //app.get('/api/example/experiment/user/:uid/website/:wid', getWebSitebyId);
    app.get("/api/example/experiment/webiste/:wid",getWebSitebyId);
    app.get("/api/example/experiment/user/:uid/website",getAllWebsiteForUser);
    app.post("/api/example/experiment/user/:uid/website",createWebsite);
    app.put("/api/example/experiment/webiste/:wid", updateWebsite);
    //return $http.put("/api/example/experiment/webiste/"+wid,webstie);

     //app.get('/api/example/experiment/user/:uid/website/:wid/page', createUser);
     //app.get('/api/example/experiment/user/:uid/website/:wid/page/:pid', createUser);

    function updateWebsite(req, res){
        var wid = req.params.wid;
        var website = req.body;
        WebModel
        .updateWebsite(wid, website)
        .then(function(retVal){
            res.sendStatus(200);
        },
            function(err){
                res.sendStatus(400).send(err);
        });
    }

    function getAllWebsiteForUser(req, res){
        var uid = req.params.uid;
        
        WebModel
        .findAllWebsitesForUser(uid)
        .then(function(retVal){
            res.sendStatus(200).send(retVal);
            console.log(retVal);
        },
            function(err){
                res.sendStatus(400).send(err);
        });
    }

    function getWebSitebyId (req, res){
        var webId = req.params.wid;
        WebModel
        .findWebsiteById(webId)
        .then(function(retVal){
            res.sendStatus(200).send(retVal);
            console.log(retVal);
        },
            function(err){
                res.sendStatus(400).send(err);
        });
        res.send(web);
    }

    function createWebsite(req, res){
        var uid = req.params.uid;
        var website = req.body;

        WebModel
        .createWebsite(uid, website)
        .then(function(retVal){
            res.sendStatus(200);
            console.log(retVal);
        },
            function(err){
                res.sendStatus(400).send(err);
        });
        res.send(200);
    }
}