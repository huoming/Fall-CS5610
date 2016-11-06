module.exports=fuction(mongoose){
	
	var widgetSchema = require("./widgets.schema.server.js")(mongoose);
	var pageSchema = mongoose.Schema({
		_website: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Website'
		},
		name: String,
		title: String,
		description: String,
		widgets: [widgetSchema],
		dateCreated: {type: Date, default: Date.now}
	});

	//return mongoose.model("Website", webSchema);
	return pageSchema;
};

/*


_website
name
title
description
widgets
dateCreated
*/