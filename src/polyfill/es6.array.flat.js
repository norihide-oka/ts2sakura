(function() {
	function flat(items, num)
	{
		var result = [];
		for(var index = 0; index <= items.length; index++)
		{
			var item = items[index];
			if(item == undefined)
				continue;
			if(Object.prototype.toString.call(item) == "[object Array]")
			{
				if(num && num > 1)
					result = result.concat(flat(item, num - 1));
				else
					result = result.concat(item);
			}
			else
			{
				result.push(item);
			}
		}
		return result;
	}
	Array.prototype.flat = function (num) { return flat(this, num); };
})();