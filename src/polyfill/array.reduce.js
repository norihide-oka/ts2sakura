Array.prototype.reduce = function(func)
{
	var array = this;
	var result = null;
	for(var index = 0; index < array.length; index++)
	{
		var item = array[index];
		if(index == 0)
			result = item
		else
			result = func(result, item, index, array);
	}
	return result;
};