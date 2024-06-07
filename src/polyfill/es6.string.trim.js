String.prototype.trim = function()
{
	return this.replace(/(^[ 　]+|[　 ]+$)/g, "");
}