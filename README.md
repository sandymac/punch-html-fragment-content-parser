# Punch HTML Fragment Content Parser

A custom [Punch](http://laktek.github.com/punch) content parser to passthrough HTML fragments for page content.

## How to Use 

* Install the package:

	`npm install punch-html-fragment-content-parser`

* Open your Punch project's configurations (`config.json`) and add the following:

		"plugins": {
        	"parsers": {
            	".html": "punch-html-fragment-content-parser"
        	}
        }


* Much like you would create [extended content](https://github.com/laktek/punch/wiki/Contents#extended-contents)
fragments in markdown, create them in HTML with the extension .html. The contents of the .html file will be included
unparsed.
