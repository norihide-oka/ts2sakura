Array.prototype.filter = function(func)
{
	var array = this;
	var result = [];
	for(var index = 0; index < array.length; index++)
	{
		var item = array[index];
		if(func(item, index, array))
			result.push(item);
	}
	return result;
};