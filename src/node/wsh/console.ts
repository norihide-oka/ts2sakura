/**
 * WSHコンソールの実態です。
 */
const WshConsole = {
	/**
	 * 標準出力します。
	 * @param msg 出力メッセージ
	 */
	log: (msg: string) => WScript.StdOut.WriteLine(msg),
	/**
	 * 標準エラー出力します。
	 * @param msg 出力メッセージ
	 */
	error: (msg: string) => WScript.StdErr.WriteLine(msg),
} as const

export default WshConsole
