var fs = require('fs');
var data = require('../us-governors/data/us-governors.json');
var values = require('object.values');

if (!Object.values) {
  values.shim();
}

fs.truncate('us-governors/data/us-governors.sql', 0, function() {
  for (var i = 0; i < data.length; i++) {
    var query = 'INSERT INTO `us-governors` (`' + Object.keys(data[i]).join('`, `') + '`) VALUES ("' + Object.values(data[i]).join('", "') + '");\n';
    fs.appendFile('us-governors/data/us-governors.sql', query.replace(/""/g, 'null'));
  }
});