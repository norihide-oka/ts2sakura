import shell from './WScriptShell'

const argv = [WScript.FullName, WScript.ScriptFullName]
	.concat((new Array(WScript.Arguments.length)).map((v, i) => WScript.Arguments.Item(i)))
const argv0 = argv[2] ?? ""
const cwd = shell.CurrentDirectory

const result = {
	/**
	 * コマンドライン引数
	 */
	argv,
	/**
	 * 先頭のコマンドライン引数
	 */
	argv0,
	/**
	 * カレントディレクトリ
	 */
	cwd,
} as const

export default result
