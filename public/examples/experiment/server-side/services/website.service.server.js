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
        WebModel.updateWebsite(wid, website);

        res.sendStatus(200);
    }

    function getAllWebsiteForUser(req, res){
        var uid = req.params.uid;
        var websites = WebModel.findAllWebsitesForUser(uid);
        console.log(websites);
        res.send(websites);
    }

    function getWebSitebyId (req, res){
        var webId = req.params.wid;
        var web = WebModel.findWebsiteById(webId);
        res.send(web);
    }

    function createWebsite(req, res){
        var website = req.body;
        WebModel.createWebsite(website);
        res.send(200);
    }
}

