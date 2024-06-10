function GetShell()
{
	return new ActiveXObject("WScript.Shell");
}
var shell = GetShell();

export function execSync(command, options)
{
	var exe = shell.Exec(command);
	if(options?.input)
	{
		var commands = options.input.replace(/\r\n/g, "\n").split("\n");
		for(var index = 0; index < commands.length; index++)
		{
			exe.StdIn.WriteLine(commands[index]);
		}
	}
	var result = []
	while(!exe.StdOut.AtEndOfStream)
	{
		var text = exe.StdOut.ReadLine();
		result.push(text);
	}
	return result.join("\n");
}
