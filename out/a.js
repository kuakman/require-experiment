define('d',[], function() {
	return 'd';
});

define('e',[], function() {
	return 'e';
});

define('a',['c', 'd', 'e'], function(c, d, e) {
	console.log(c, d, e);
	return 'a';
});

