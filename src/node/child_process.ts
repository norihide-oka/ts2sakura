import shell from './wsh/WScriptShell'

/**
 * コマンドの実行オプションです。
 */
type EXEC_SYNC_OPTION = {
	//cwd?: string,
	/**
	 * 標準入力に渡す文字列です。
	 */
	input?: string,
	//stdio?: string,
	//env?: any,
	//shell?: string,
	//uid?: numner,
	//gid?: number,
	//timeout?: number,
	//killSignal?: string | number,
	//maxBuffer?: number,
	//encoding?: string,
	//windowsHide?: boolean,
}

/**
 * 外部プロセスを実行します。
 * @param command 実行するコマンド
 * @param options 実行オプション
 */
export function execSync(command: string, options: EXEC_SYNC_OPTION)
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
