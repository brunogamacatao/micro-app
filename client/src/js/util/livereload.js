// Habilitando o livereload
var LIVERELOAD_PREFIX = '<script src="http://';
var LIVERELOAD_SUFFIX = ':35729/livereload.js?snipver=1"></script>';

const LiveReload = {
  start: function() {
    var host = (location.host || 'localhost').split(':')[0];
    document.write(LIVERELOAD_PREFIX + host + LIVERELOAD_SUFFIX);
  }
};

export default LiveReload;