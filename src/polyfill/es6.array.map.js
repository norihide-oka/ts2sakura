Array.prototype.map = function(func)
{
	var array = this;
	var result = [];
	for(var index = 0; index < array.length; index++)
	{
		var item = array[index];
		result.push(func(item, index, array));
	}
	return result;
};