define('c',[], function() {
	return 'c';
});

define('f',[], function() {
	return 'f';
});

define('b',['c', 'e', 'f'], function(c, e, f) {
	console.log(c, e, f);
	return 'b';
});

