var fs = require('fs');
var obj = require('../us-governors/data/us-governors.json');
var js2xmlparser = require('js2xmlparser');

var xml = js2xmlparser.parse('us-governors', { 'councilor': obj });

fs.writeFile('us-governors/data/us-governors.xml', xml);