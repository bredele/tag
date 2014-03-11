
var elements = {};

/**
 * Expose 'Tag'
 */

module.exports = function() {

	/**
	 * [Tag description]
	 */
	
	function Tag(name) {
		
	}

	/**
	 * [use description]
	 * @return {[type]} [description]
	 */
	
	Tag.use = function(fn) {
		fn(this);
	};

	return Tag;
};


/**
 * Expose 'Mod'
 */

module.exports.register = function(name, obj) {
	elements[name] = obj;
};
