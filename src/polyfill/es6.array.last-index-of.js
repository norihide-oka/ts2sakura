Array.prototype.lastIndexOf = function(obj)
{
	var array = this;
	for(var index = array.length - 1; index >= 0 ; index--)
	{
		var item = array[index];
		if(item === obj)
			return index
	}
	return -1;
};