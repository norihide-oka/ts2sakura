var process = (function()
{
	var result = {
		argv0: "",
		argv: []
	};
	result.argv.push(WScript.FullName);
	result.argv.push(WScript.ScriptFullName);
	for(var index = 1; index <= WScript.Arguments.length; index++)
	{
		var arg = WScript.Arguments.Items(index);
		if(index == 0)
			argv0 = arg
		result.argv.push(arg);
	}
	return result;
})();