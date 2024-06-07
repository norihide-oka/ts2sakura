(function()
{
	var trimStart = function()
	{
		return this.replace(/^[ 　]+/, "");
	}
	String.prototype.trimStart = trimStart;
	String.prototype.trimLeft = trimStart;
})();

