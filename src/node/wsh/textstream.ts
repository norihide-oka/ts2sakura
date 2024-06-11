type ADODB_STREAM_CHAR_SET = "Shift_JIS" | "utf-8"
type CHAR_SET = ADODB_STREAM_CHAR_SET | "utf-8:without bom"

/**
 * 1:READ/2:WRITE
 */
export type OPEN_MODE = 1 | 2

type LINE_END = "\r" | "\n" | "\r\n"

/**
 * 1:BINARY/2:TEXT
 */
export type FILE_TYPE = 1 | 2

// -2の場合は行読み込み
/**
 * -1:ALL
 */
export type READ_MODE = -1

/**
 * 0:CHAR/1:LINE
 */
export type WRITE_MODE = 0 | 1

/**
 * 1:CREATE/2:OVERROTE
 */
type SAVE_MODE = 1 | 2

declare class ADODB_Stream
{
	Type: FILE_TYPE
	charset: ADODB_STREAM_CHAR_SET
	Position: number;
	Open(): void;
	LoadFromFile(path: string): void;
	Read(length?: number): any;
	ReadText(mode: READ_MODE): string;
	Write(value: any): void;
	WriteText(value: string, mode: WRITE_MODE): void;
	SaveToFile(path: string, mode: SAVE_MODE): void;
	Close(): void;
}

/**
 * WSHでutf-8ファイルを扱うためのクラスです。
 */
export class TextStream
{
	private stream: ADODB_Stream
	private mode: OPEN_MODE
	private charset: CHAR_SET
	private lineEnd: string
	private path: string

	private static default_charaset: CHAR_SET = "utf-8" as const
	private static default_lineend: LINE_END = "\n" as const
	private static default_mode: OPEN_MODE = 1 as const

	/**
	 * インスタンスを作成します。
	 */
	constructor()
	/**
	 * インスタンスを作成します。
	 * @param mode 読み書きモード
	 */
	constructor(mode: OPEN_MODE)
	/**
	 * インスタンスを作成します。
	 * @param mode 読み書きモード
	 * @param charset エンコードルール
	 */
	constructor(mode: OPEN_MODE, charset?: CHAR_SET)
	/**
	 * インスタンスを作成します。
	 * @param mode 読み書きモード
	 * @param charset エンコードルール
	 * @param lineEnd 改行コード
	 */
	constructor(mode?: OPEN_MODE, charset?: CHAR_SET, lineEnd?: LINE_END)
	{
		this.stream = <ADODB_Stream>new ActiveXObject("ADODB.Stream")
		this.mode = mode ?? TextStream.default_mode
		this.lineEnd = lineEnd ?? TextStream.default_lineend
		this.charset = charset ?? TextStream.default_charaset
		this.path = "";
	}

	/**
	 * ファイルを開きます。
	 * @param path パス
	 */
	open(path: string): void
	{
		this.path = path
		this.stream.Type = 2
		this.stream.charset = this.charset === "utf-8:without bom" ? "utf-8" : this.charset
		this.stream.Open()
		if(this.mode === 1)
			this.stream.LoadFromFile(path)
	}

	/**
	 * すべてのファイルを読み込みます。
	 * @returns ファイルの内容
	 */
	readAll(): string
	{
		if(this.mode !== 1)
			return ""
		return this.stream.ReadText(-1)
	}

	/**
	 * ファイルへ書き込みます。
	 * @param text 書き込むデータ
	 */
	write(text: string): void
	{
		if(this.mode !== 2)
			return
		this.stream.WriteText(text, 0)
	}
	/**
	 * ファイルへ書き込み改行を行います。
	 * @param text 書き込むデータ
	 */
	writeLine(text?: string): void
	{
		if(this.mode !== 2)
			return
		if(text)
			this.stream.WriteText(text, 0)
		this.stream.WriteText(this.lineEnd, 0);
	}

	/**
	 * ファイルを閉じます。
	 */
	close(): void
	{
		if(this.mode === 2)
		{
			switch(this.charset)
			{
				case "utf-8:without bom":
					{
						this.stream.Position = 0
						let type = this.stream.Type
						this.stream.Type = 1
						this.stream.Position = 3

						let value = this.stream.Read()
						this.stream.Close()
						this.stream.Open()
						this.stream.Type = 1
						this.stream.Write(value)
					}
					break
				default:
					break;
			}
			this.stream.SaveToFile(this.path, 2);
		}
		this.stream.Close();
	}
}
