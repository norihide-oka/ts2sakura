Array.prototype.indexOf = function(obj)
{
	var array = this;
	for(var index = 0; index < array.length; index++)
	{
		var item = array[index];
		if(item === obj)
			return index
	}
	return -1;
};