String.prototype.startsWith = function(text, index)
{
	var str = this;
	if(!index)
		index = 0;
	if(!text || str.length < text.length + index)
		return false;
	return str.substr(index, text.length) == text;
};