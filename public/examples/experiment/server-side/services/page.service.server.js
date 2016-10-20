module.exports=function(app) {

    app.get('/api/example/experiment/user/:uid/website/:wid', getPageId);

    //app.post -- for writing
    //app.put -- for update
    //app.delete -- for deleting


    function getPageId(req, res){
        res.send("page");
    }
}