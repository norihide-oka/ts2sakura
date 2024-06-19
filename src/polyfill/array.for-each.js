Array.prototype.forEach = function(func)
{
	var array = this;
	for(var index = 0; index < array.length; index++)
	{
		var item = array[index];
		func(item, index, array)
	}
};