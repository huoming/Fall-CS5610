(function(){
    "use strict";
    angular
        .module("WebAppMaker")
        .factory("WidgetService",WidgetService);

    function WidgetService(){
        var widgets = [
            { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
            { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                "url": "http://lorempixel.com/400/200/"},
            { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
            { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
            { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                "url": "https://youtu.be/AM2Ivdi9c4E" },
            { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
        ];

        var service = {
            createWidget : createWidget,
            findAllWidgets: findAllWidgets,
            findWidgetById : findWidgetById,
            updateWidgetById : updateWidgetById,
            deleteWidgetById: deleteWidgetById
        };
        return service;


        function createWidget(widget){}

        function findAllWidgets(pageId){
            /*var w_widgets = [];
            for(var i=0; i<widgets.length; i++){
                if(widgets[i].pageId == pageId){
                    w_widgets.push(widgets[i]);
                }
            }
            return w_widgets;   */
            return widgets;
        }

        function findWidgetById(wgId){}
        function updateWidgetById(widgetId){}
        function deleteWidgetById(widgetId){}
    }
})();