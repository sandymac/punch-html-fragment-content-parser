/*
 * HTML Fragment content parser.
 *
 * Copyright (c) 2013 Sandy McArthur <Sandy@McArthur.org>
 * This work is free. You can redistribute it and/or modify it under the
 * terms of the Do What The Fuck You Want To Public License, Version 2,
 * as published by Sam Hocevar. See the LICENSE-WTFPL file for more details.
*/

module.exports = {

	supportedExtensions: [".html"],

	parse: function(input, callback){
		var output, err;

		try {
			output = input.toString();
		} catch(e) {
			err = e;
		}

		return callback(err, output);
	},

	setup: function(/*config*/) {
        // Nothing to setup, config not needed
	}

};
