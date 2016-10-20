module.exports=function(app, WebModel){

     //app.get('/api/example/experiment/user/:uid/website/:wid', getWebSitebyId);
    app.get("/api/example/experiment/webiste/:wid",getWebSitebyId);
     //app.get('/api/example/experiment/user/:uid/website/:wid/page', createUser);
     //app.get('/api/example/experiment/user/:uid/website/:wid/page/:pid', createUser);


    function getWebSitebyId (req, res){
        //var userId = req.params.uid;

       /* var webId = req.params.wid;
        var web = null;
        for(var i=0; i<websites.length; i++){
            if(websites[i]._id == webId){
                web = websites[i];
                break;
            }
        }*/
        var webId = req.params.wid;
        var web = WebModel.findWebsiteById(webId);
        res.send(web);
    }
}

