(function()
{
	var trimEnd = function()
	{
		return this.replace(/[ 　]+$/, "");
	}
	String.prototype.trimEnd = trimEnd;
	String.prototype.trimRight = trimEnd;
})();

