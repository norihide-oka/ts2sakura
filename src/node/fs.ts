import { TextStream } from './wsh/textstream'
import fso from './wsh/ScriptingFileSystemObject'

/**
 * バッファインターフェースです。
 */
export interface Buffer
{
	/**
	 * 対象のバッファを文字列変換します。
	 * @param encoding エンコードルール
	 * @returns 文字列
	 */
	toString: (encoding?: string) => string
}
/**
 * ファイル読み込みのオプションです。
 */
type READ_FILE_SYNC_OPTION = {
	/**
	 * エンコードルール
	 */
	encoding?: "utf8",
	/**
	 * ファイルフラグ
	 */
	flag?: "r",
}

class TextBuffer implements Buffer
{
	text: string = ""
	public readonly toString = () => this.text
}

/**
 * ファイルを読み込みます。
 * @param path パス
 * @param options オプション
 * @returns 
 */
export function readFileSync(path: string, options?: READ_FILE_SYNC_OPTION): Buffer
{
	let buffer = new TextBuffer()
	let stream = new TextStream(1)
	stream.open(path)
	buffer.text = stream.readAll()
	stream.close()
	return buffer
}

/**
 * ファイル出力のオプションです。
 */
type WRITE_FILE_SYNC_OPTION = {
	/**
	 * エンコードルール
	 */
	encoding?: "utf8",
	/**
	 * ファイルフラグ
	 */
	flag?: "r",
}
/**
 * ファイルへ書き込みます。
 * @param path パス
 * @param data 出力データ
 * @param options オプション
 */
export function writeFileSync(path: string, data: string | Buffer, options?: WRITE_FILE_SYNC_OPTION): void
{
	let value = (typeof data !== "string")
		? data?.toString()
		: data

	let stream = new TextStream(2)
	stream.open(path)
	stream.write(value)
	stream.close()
}

type READ_DIR_SYNC_OPTION = {
}
export function readdirSync(path: string, options?: READ_DIR_SYNC_OPTION): string[]
{
    var result: string[] = [];

	var folder = fso.getFolder(path)

	{
		var items = new Enumerator(folder.Files)
		for (; !items.atEnd(); items.moveNext())
			result.push(items.item().Name);
	}
	{
		var items = new Enumerator(folder.SubFolders)
		for (; !items.atEnd(); items.moveNext())
			result.push(items.item().Name);
	}
    return result.sort();
}


interface Stats
{
	isDirectory: () => boolean
	isFile: () => boolean
	mtime: Date
}
type STAT_SYNC_OPTOPN = {
}

const resultTrue = () => true
const resultFlase = () => false
export function statSync(path: string, options?: STAT_SYNC_OPTOPN): Stats
{
	if(fso.FileExists(path))
		return {
			isFile: resultTrue,
			isDirectory: resultFlase,
			mtime: fso.getFile(path).DateLastModified,
		}
	if(fso.FolderExists(path))
		return {
			isFile: resultFlase,
			isDirectory: resultTrue,
			mtime: fso.getFolder(path).DateLastModified,
		}
	return {
		isFile: resultFlase,
		isDirectory: resultFlase,
		mtime: new Date(),
	}
}

export function existsSync(path: string): boolean
{
	return fso.FileExists(path) || fso.FolderExists(path)
}
