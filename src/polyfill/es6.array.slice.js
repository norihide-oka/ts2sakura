Array.prototype.slice = function(start, end)
{
	var array = this;
	var result = [];
	for(var index = start; index < array.length && index < end; index++)
	{
		var item = array[index];
		result.push(item);
	}
	return result;
};