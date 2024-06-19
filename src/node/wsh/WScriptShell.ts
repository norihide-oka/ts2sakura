/**
 * WScript.Shell.Execの戻り値オブジェクトです。
 */
type CommandResult = {
	/**
	 * プロセスを強制終了します。
	 */
	Terminate: () => void,
	/**
	 * プロセスの終了コードです。
	 */
	ExitCode: number,
	/**
	 * プロセスNOです。
	 */
	ProcessID: number,
	/**
	 * 現在のステータスコードです。
	 */
	Status: number,
	/**
	 * 標準入力です。
	 */
	StdIn: TextStreamWriter,
	/**
	 * 標準出力です。
	 */
	StdOut: TextStreamReader,
	/**
	 * 標準エラー出力です。
	 */
	StdErr: TextStreamReader,
}

/**
 * WScript.Shellのインスタンスオブジェクトです。
 */
type WScriptShell = {
	Exec(cmd: string): CommandResult,
	CurrentDirectory: string,
}

const shell = <WScriptShell>new ActiveXObject("WScript.Shell")

export default shell
