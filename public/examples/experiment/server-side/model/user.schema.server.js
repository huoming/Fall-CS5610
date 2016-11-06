module.exports=fuction(mongoose){
	var webSchema = require("./websites.schema.server.js")(mongoose);

	var userSchema = mongoose.Schema({
		username: String, 
		password: String, 
		firstName: String,
		lastName: String,
		email: String,
		phone: String,
		websites: [webSchema],
		dateCreated: {type: Date, default: Date.now}
	});

	//return mongoose.model("User", userSchema);
	return userSchema;
	//var userModel = mongoose.model("User", userSchema);
};