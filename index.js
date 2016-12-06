var lodash = require('lodash')

var dashify = function(name) {
  Array.prototype['_' + name] = function() {
    var newArguments = [this].concat(Array.prototype.slice.call(arguments))
    return lodash[name].apply(null, newArguments)
  }
}

Object.keys(require('lodash/array')).map(dashify)
Object.keys(require('lodash/collection')).map(dashify)
