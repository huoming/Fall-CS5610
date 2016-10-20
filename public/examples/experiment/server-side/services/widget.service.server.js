module.exports=function(app) {

    app.get('/api/example/experiment/user/:uid/website/:wid', getWidgetbyId);

    function getWidgetbyId(req, res){
        res.send("widget");
    }
}