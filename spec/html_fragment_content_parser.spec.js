/*
 * HTML Fragment content parser tests.
 *
 * Copyright (c) 2013 Sandy McArthur <Sandy@McArthur.org>
 * This work is free. You can redistribute it and/or modify it under the
 * terms of the Do What The Fuck You Want To Public License, Version 2,
 * as published by Sam Hocevar. See the LICENSE-WTFPL file for more details.
 */

var html_parser = require("../lib/html_fragment_content_parser.js");

describe("setup", function() {

	it("setup succeeds", function(){
		html_parser.setup({});
		html_parser.setup(undefined);
		// anything to work
	});

});

describe("parsing given content", function() {

	it("invoke the callback with a string", function() {
		var spyCallback = jasmine.createSpy();
		html_parser.parse("testing 1 2 3", spyCallback);

		expect(spyCallback).toHaveBeenCalledWith(undefined, "testing 1 2 3");

	});

	it("invoke the callback with empty content", function() {
		var spyCallback = jasmine.createSpy();
		html_parser.parse("", spyCallback);

		expect(spyCallback).toHaveBeenCalledWith(undefined, "");

	});

	it("invoke the callback with missing content causing an error", function() {
		var spyCallback = jasmine.createSpy();
		html_parser.parse(undefined, spyCallback);

		expect(spyCallback).toHaveBeenCalledWith({}, undefined);

	});

});

