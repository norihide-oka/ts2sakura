Array.prototype.find = function(func)
{
	var array = this;
	var result = [];
	for(var index = 0; index < array.length; index++)
	{
		var item = array[index];
		if(func(item, index, array))
			return item;
	}
	return null;
};