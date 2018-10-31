
var configValues = require('./config');

module.exports = {
	
	getDbConnectionstring : function() {
		return "mongodb://" + configValues.username + ":" + configValues.password + "@ds143573.mlab.com:43573/nodetodo";
			}
}
