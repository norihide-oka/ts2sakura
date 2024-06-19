import './es6.array.is-array'
Array.isArray = function(i)
{
	return (i && Object.prototype.toString.call(i) == "[object Array]");
}