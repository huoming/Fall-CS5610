module.exports=function(app, PageModel) {

    app.get('/api/example/experiment/user/:uid/website/:wid', getPageId);

    //app.post -- for writing
    //app.put -- for update
    //app.delete -- for deleting


    function getPageId(req, res){
        var pid = req.params.pid;
        var page = PageModel.findPageById(pid);
        res.send(page);
    }
}