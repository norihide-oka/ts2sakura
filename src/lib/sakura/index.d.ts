declare var Editor: {
	// ファイル操作

	/**
	 * 新規作成 
	 */
	FileNew(): void

	/**
	 * 開く
	 * @param S1 開くファイル名
	 */
	FileOpen(S1: string): void

	/**
	 * 上書き保存
	 */
	FileSave(): void

	/**
	 * すべて上書き保存
	 */
	FileSaveAll(): void

	/**
	 * 名前を付けて保存 
	 * @param S1 保存するファイル名
	 * @param i1 0:SJIS|1:JIS|2:EUC|3:Unicode|4:UTF-8|5:UTF-7|6:UnicodeBE|7:CESU-8|8:Latin1(Windows-1252)|99:文字コードを維持
	 * @param i2 0:変更しない|1:CRLF|2:LF|3:CR
	 */
	FileSaveAs(S1: string, i1: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 99, i2: 0 | 1 | 2 | 3)

	/**
	 * 閉じて(無題)
	 */
	FileClose(): void

	/**
	 * 閉じて開く
	 */
	FileCloseOpen(): void

	/**
	 * 開き直す
	 * @param i1 ファイルが更新されていた場合に確認を行うか(0:確認する|1:確認しない)
	 */
	FileReopen(i1: 0 | 1): void

	/**
	 * SJISで開き直す
	 * @param i1 ファイルが更新されていた場合に確認を行うか(0:確認する|1:確認しない)
	 */
	FileReopenSJIS(i1: 0 | 1): void

	/**
	 * JISで開き直す
	 * @param i1 ファイルが更新されていた場合に確認を行うか(0:確認する|1:確認しない)
	 */
	FileReopenJIS(i1: 0 | 1): void

	/**
	 * EUCで開き直す
	 * @param i1 ファイルが更新されていた場合に確認を行うか(0:確認する|1:確認しない)
	 */
	FileReopenEUC(i1: 0 | 1): void

	/**
	 * Latin1で開き直す
	 * @param i1 ファイルが更新されていた場合に確認を行うか(0:確認する|1:確認しない)
	 */
	FileReopenLatin1(i1: 0 | 1): void

	/**
	 * Unicodeで開き直す
	 * @param i1 ファイルが更新されていた場合に確認を行うか(0:確認する|1:確認しない)
	 */
	FileReopenUNICODE(i1: 0 | 1): void

	/**
	 * UnicodeBEで開き直す
	 * @param i1 ファイルが更新されていた場合に確認を行うか(0:確認する|1:確認しない)
	 */
	FileReopenUNICODEBE(i1: 0 | 1): void

	/**
	 * UTF-8で開き直す
	 * @param i1 ファイルが更新されていた場合に確認を行うか(0:確認する|1:確認しない)
	 */
	FileReopenUTF8(i1: 0 | 1): void

	/**
	 * CESU-8で開き直す
	 * @param i1 ファイルが更新されていた場合に確認を行うか(0:確認する|1:確認しない)
	 */
	FileReopenCESU8(i1: 0 | 1): void 

	/**
	 * UTF-7で開き直す
	 * @param i1 ファイルが更新されていた場合に確認を行うか(0:確認する|1:確認しない)
	 */
	FileReopenUTF7(i1: 0 | 1): void 

	/**
	 * 印刷
	 */
	Print(): void

	/**
	 * 印刷プレビュー
	 */
	PrintPreview(): void

	/**
	 * 印刷ページ設定
	 */
	PrintPageSetup(): void

	/**
	 * 同名のC/C++ヘッダ(ソース)を開く
	 */
	OpenHfromtoC(): void

	/**
	 * SQL*Plusをアクティブ表示
	 */
	ActivateSQLPLUS(): void

	/**
	 * SQL*Plusで実行
	 */
	ExecSQLPLUS(): void

	/**
	 * 関連付けられたアプリケーションで実行
	 */
	Browse(): void

	/**
	 * ビューモード
	 */
	ViewMode(): void

	/**
	 * ビューモード
	 */
	ReadOnly(): void

	/**
	 * ファイルのプロパティ
	 */
	PropertyFile(): void

	/**
	 * 編集の全終了
	 */
	ExitAllEditors(): void

	/**
	 * サクラエディタの全終了
	 */
	ExitAll(): void

	/**
	 * 作業中ファイルの一時出力
	 * @param S1 出力ファイル名
	 * @param i1 0:SJIS|1:JIS|2:EUC|3:Unicode|4:UTF-8|5:UTF-7|6:UnicodeBE|7:CESU-8|8:Latin1(Windows-1252)|99:文字コードを維持
	 * @param i2 0:ファイル全体を出力します|1:選択範囲を出力します
	 */
	PutFile(S1: string, i1: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 99, i2: 0 | 1): void

	/**
	 * キャレット位置にファイル挿入
	 * @param S1 出力ファイル名 
	 * @param i1 0:SJIS|1:JIS|2:EUC|3:Unicode|4:UTF-8|5:UTF-7|6:UnicodeBE|7:CESU-8|8:Latin1(Windows-1252)|99:文字コードを維持
	 * @param i2 <予約> 現在は特に機能はない。0 にしておくこと。（ 0 以外はエラーになる） 
	 */
	InsFile (S1: string, i1: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 99, i2: 0): void 

	/**
	 * 文字入力
	 * @param i1 書き出したい文字を10進数の Unicodeで指定する。 
	 */
	Char(i1: number): void 

	/**
	 * 全角文字入力
	 * @param i1 書き出したい文字を10進数の Unicodeで指定する。 
	 */
	CharIme(i1: number): void

	/**
	 * 元に戻す
	 */
	Undo(): void

	/**
	 * やり直し
	 */
	Redo(): void 

	/**
	 * 削除
	 */
	Delete(): void

	/**
	 * カーソル前を削除
	 */
	DeleteBack(): void

	/**
	 * 単語の左端まで削除
	 */
	WordDeleteToStart(): void 

	/**
	 * 単語の右端まで削除
	 */
	WordDeleteToEnd(); void

	/**
	 * 単語切り取り
	 */
	WordCut(): void

	/**
	 * 単語削除
	 */
	WordDelete(): void

	/**
	 * 行頭まで切り取り(改行単位) 
	 */
	LineCutToStart(): void

	/**
	 * 行末まで切り取り(改行単位)
	 */
	LineCutToEnd(): void

	/**
	 * 行頭まで削除(改行単位)
	 */
	LineDeleteToStart(): void

	/**
	 * 行末まで削除(改行単位)
	 */
	LineDeleteToEnd(): void

	/**
	 * 行切り取り(折り返し単位)
	 */
	CutLine(): void

	/**
	 * 行削除(折り返し単位)
	 */
	DeleteLine(): void

	/**
	 * 行の二重化(折り返し単位)
	 */
	DuplicateLine(): void

	/**
	 * TABインデント
	 */
	IndentTab(): void

	/**
	 * 逆TABインデント
	 */
	UnindentTab(): void

	/**
	 * SPACEインデント
	 */
	IndentSpace(): void

	/**
	 * 逆SPACEインデント
	 */
	UnindentSpace(): void

	/**
	 * 左(先頭)の空白を削除
	 */
	LTrim(): void

	/**
	 * 右(末尾)の空白を削除
	 */
	RTrim(): void

	/**
	 * 選択行の昇順ソート
	 */
	SortAsc(): void

	/**
	 * 選択行の降順ソート
	 */
	SortDesc(): void

	/**
	 * 連続した重複行を削除します
	 */
	Merge(): void

	// カーソル移動

	/**
	 * カーソル上移動
	 */
	Up(): void

	/**
	 * カーソル下移動
	 */
	Down(): void

	/**
	 * カーソル左移動
	 */
	Left(): void

	/**
	 * カーソル右移動
	 */
	Right(): void

	/**
	 * カーソル上移動(２行ごと)
	 */
	Up2(): void

	/**
	 * カーソル下移動(２行ごと)
	 */
	Down2(): void

	/**
	 * 単語の左端に移動
	 */
	WordLeft(): void

	/**
	 * 単語の右端に移動
	 */
	WordRight(): void

	/**
	 * 行頭に移動(折り返し単位)
	 * @param i1 bit(0:1=行頭のスペースを無視する|2:0=非選択状態で移動/1=選択状態で移動|3:0=折り返し単位で移動/1=改行単位で移動)
	 */
	GoLineTop(i1: number): void

	/**
	 * 行末に移動(折り返し単位)
	 */
	GoLineEnd(): void

	/**
	 * 半ページアップ
	 */
	HalfPageUp(): void

	/**
	 * 半ページダウン
	 */
	HalfPageDown(): void

	/**
	 * １ページアップ 
	 */
	PageUp(): void

	/**
	 * １ページアップ
	 */
	"1PageUp": () => void

	/**
	 * １ページダウン
	 */
	PageDown(): void

	/**
	 * １ページダウン
	 */
	"1PageDown": () => void

	/**
	 * ファイルの先頭に移動
	 */
	GoFileTop(): void

	/**
	 * ファイルの最後に移動
	 */
	GoFileEnd(): void

	/**
	 * カーソル行をウィンドウ中央へ
	 */
	CurLineCenter(): void


	/**
	 * 移動履歴: 前へ
	 */
	MoveHistPrev(): void

	/**
	 * 移動履歴: 次へ
	 */
	MoveHistNext(): void

	/**
	 * 現在位置を移動履歴に登録
	 */
	MoveHistSet(): void

	/**
	 * テキストを１行下へスクロール
	 */
	WndScrollDown(): void

	/**
	 * テキストを１行上へスクロール
	 */
	WndScrollUp(): void

	/**
	 * 次の段落へ移動
	 */
	GoNextParagraph(): void

	/**
	 * 前の段落へ移動
	 */
	GoPrevParagraph(): void

	/**
	 * カーソル移動
	 * @param i1 行番号(1開始)
	 * @param i2 桁番号(1開始)
	 * @param i3 0:未選択|1:通常選択|2:矩形選択
	 */
	MoveCursor(i1: number, i2: number, i3: 0 | 1 | 2): void

	/**
	 * カーソル移動(レイアウト)
	 * @param i1 レイアウト行番号(1開始)
	 * @param i2 レイアウト桁番号(1開始)
	 * @param i3 0:未選択|1:通常選択|2:矩形選択
	 */
	MoveCursorLayout(i1: number, i2: number, i3: 0 | 1 | 2): void

	/**
	 * ホイールアップ
	 * @param i1 マウスの移動量
	 */
	WheelUp(i1: number): void

	/**
	 * ホイールダウン
	 * @param i1 マウスの移動量
	 */
	WheelDown(i1: number): void 

	/**
	 * ホイール左
	 * @param i1 マウスの移動量
	 */
	WheelLeft(i1: number): void

	/**
	 * ホイール右
	 * @param i1 マウスの移動量
	 */
	WheelRight(i1: number): void

	/**
	 * ホイールページアップ
	 * @param i1 マウスの移動量
	 */
	WheelPageUp(i1: number): void

	/**
	 * ホイールページダウン
	 * @param i1 マウスの移動量
	 */
	WheelPageDown(i1: number): void

	/**
	 * ホイールページ左
	 * @param i1 マウスの移動量
	 */
	WheelPageLeft(i1: number): void

	/**
	 * ホイールページ右
	 * @param i1 マウスの移動量
	 */
	WheelPageRight(i1: number): void

	// 選択

	/**
	 * 現在位置の単語選択
	 */
	SelectWord(): void

	/**
	 * すべて選択
	 */
	SelectAll(): void

	/**
	 * 1行選択
	 * @param i1 <予約> 0固定
	 */
	SelectLine(i1: 0): void 

	/**
	 * 範囲選択開始
	 */
	BeginSelect(): void

	/**
	 * (範囲選択)カーソル上移動
	 */
	Up_Sel(): void

	/**
	 * (範囲選択)カーソル下移動
	 */
	Down_Sel(): void 

	/**
	 * (範囲選択)カーソル左移動
	 */
	Left_Sel(): void 

	/**
	 * (範囲選択)カーソル右移動
	 */
	Right_Sel(): void 

	/**
	 * (選択)カーソル上移動(２行ごと)
	 */
	Up2_Sel(): void

	/**
	 * (選択)カーソル下移動(２行ごと)
	 */
	Down2_Sel(): void

	/**
	 * (範囲選択)単語の左端に移動
	 */
	WordLeft_Sel(): void

	/**
	 * (範囲選択)単語の右端に移動
	 */
	WordRight_Sel(): void

	/**
	 * (範囲選択)行頭に移動(折り返し単位)
	 * @param i1 移動オプション(0x01:行頭のスペースを無視する|0x08:改行単位で移動する)
	 */
	GoLineTop_Sel(i1: 0 | 1 | 8 | 9 = 0): void

	/**
	 * (範囲選択)行末に移動(折り返し単位)
	 * @param i1 移動オプション(0x08:改行単位で移動する)
	 */
	GoLineEnd_Sel(i1: 0 | 8 = 0): void

	/**
	 * (範囲選択)半ページアップ
	 */
	HalfPageUp_Sel(): void

	/**
	 * (範囲選択)半ページダウン
	 */
	HalfPageDown_Sel(): void

	/**
	 * (範囲選択)１ページアップ
	 */
	PageUp_Sel(): void

	/**
	 * (範囲選択)１ページアップ
	 */
	"1PageUp_Sel": () => void 

	/**
	 * (範囲選択)１ページダウン
	 */
	PageDown_Sel(): void

	/**
	 * (範囲選択)１ページダウン
	 */
	"1PageDown_Sel": () => void

	/**
	 * (範囲選択)ファイルの先頭に移動
	 */
	GoFileTop_Sel(): void

	/**
	 * (範囲選択)ファイルの最後に移動
	 */
	GoFileEnd_Sel(): void

	/**
	 * 次の段落へ移動
	 */
	GoNextParagraph_Sel(): void

	/**
	 * 前の段落へ移動
	 */
	GoPrevParagraph_Sel(): void 

	// 矩形選択

	/**
	 * 矩形範囲選択開始
	 */
	BeginBoxSelect(): void
	
	/**
	 * (矩形選択)カーソル上移動
	 */
	Up_BoxSel(): void

	/**
	 * (矩形選択)カーソル下移動
	 */
	Down_BoxSel(): void

	/**
	 * (矩形選択)カーソル左移動
	 */
	Left_BoxSel(): void

	/**
	 * (矩形選択)カーソル右移動
	 */
	Right_BoxSel(): void

	/**
	 * (矩形選択)カーソル上移動(２行ごと)
	 */
	Up2_BoxSel(): void 

	/**
	 * (矩形選択)カーソル下移動(２行ごと)
	 */
	Down2_BoxSel(): void 

	/**
	 * (矩形選択)単語の左端に移動
	 */
	WordLeft_BoxSel(): void

	/**
	 * (矩形選択)単語の右端に移動
	 */
	WordRight_BoxSel(): void

	/**
	 * (矩形選択)行頭に移動(改行単位)
	 * @param i1 移動オプション(0x01:行頭のスペースを無視する)
	 */
	GoLogicalLineTop_BoxSel(i1 : 0 | 8 ): void

	/**
	 * (矩形選択)行頭に移動(折り返し単位/改行単位)
	 * @param i1 移動オプション(0x01:行頭のスペースを無視する|0x08:改行単位で移動する)
	 */
	GoLineTop_BoxSel(i1: 0 | 1 | 8 | 9): void

	/**
	 * (矩形選択)行末に移動(折り返し単位)
	 * @param i1 移動オプション(0x08:改行単位で移動する)
	 */
	GoLineEnd_BoxSel(i1: 0 | 8): void

	/**
	 * (矩形選択)半ページアップ
	 */
	HalfPageUp_BoxSel(): void

	/**
	 * (矩形選択)半ページダウン
	 */
	HalfPageDown_BoxSel(): void

	/**
	 * (矩形選択)１ページアップ
	 */
	PageUp_BoxSel(): void

	/**
	 * (矩形選択)１ページアップ
	 */
	"1PageUp_BoxSel": () => void

	/**
	 * (矩形選択)１ページダウン
	 */
	PageDown_BoxSel(): void

	/**
	 * (矩形選択)１ページダウン
	 */
	"1PageDown_BoxSel": () => void

	/**
	 * (矩形選択)ファイルの先頭に移動
	 */
	GoFileTop_BoxSel(): void

	/**
	 * (矩形選択)ファイルの最後に移動
	 */
	GoFileEnd_BoxSel(): void

	// クリップボード

	/**
	 * 切り取り
	 */
	Cut(): void

	/**
	 * コピー
	 */
	Copy(): void

	/**
	 * 貼り付け
	 */
	Paste(): void

	/**
	 * 折り返し位置に改行をつけてコピー
	 */
	CopyAddCRLF(): void

	/**
	 * CRLF改行でコピー
	 */
	CopyCRLF(): void

	/**
	 * 矩形貼り付け
	 */
	PasteBox(): void

	/**
	 * 矩形貼り付け
	 * @param S1 エディタウィンドウへ書き出したい文字列を指定する。
	 */
	InsBoxText(S1: string): void

	/**
	 * テキストを貼り付け
	 * @param S1 エディタウィンドウへ書き出したい文字列を指定する。 
	 */
	InsText(S1: string): void

	/**
	 * 最後にテキストを追加
	 * @param S1 ファイル末尾に追記する文字列
	 */
	AddTail(S1: string): void

	/**
	 * 選択範囲内全行コピー
	 */
	CopyLines(): void

	/**
	 * 選択範囲内全行引用符付きコピー
	 */
	CopyLinesAsPassage(): void

	/**
	 * 選択範囲内全行行番号付きコピー
	 */
	CopyLinesWithLineNumber(): void

	/**
	 * 選択範囲内色付きHTMLコピー
	 */
	CopyColorHtml(): void

	/**
	 * 選択範囲内行番号色付きHTMLコピー
	 */
	CopyColorHtmlWithLineNumber(): void

	/**
	 * このファイルのパス名をコピー
	 */
	CopyPath(): void

	/**
	 * このファイル名をコピー
	 */
	CopyFilename(): void

	/**
	 * このファイルのフォルダ名をコピー
	 */
	CopyFolder(): void

	/**
	 * このファイルのパス名とカーソル位置をコピー
	 */
	CopyTag(): void

	/**
	 * キー割り当て一覧をコピー
	 */
	CopyKeyBindList(): void

	// 挿入

	/**
	 * 日付挿入
	 */
	InsertDate(): void

	/**
	 * 時刻挿入
	 */
	InsertTime(): void

	/**
	 * コントロールコードの入力(ダイアログ)
	 */
	CtrlCodeDialog(): void

	/**
	 * コントロールコードの入力
	 * @param i1 書き出したい文字を10進数の ASCIIコードで指定する。
	 */
	CtrlCode(i1: number): void

	// 変換

	/**
	 * 英大文字→英小文字
	 */
	ToLower(): void

	/**
	 * 英小文字→英大文字
	 */
	ToUpper(): void

	/**
	 * 全角→半角
	 */
	ToHankaku(): void

	/**
	 * 全角カタカナ→半角カタカナ
	 */
	ToHankata(): void

	/**
	 * 半角英数→全角英数
	 */
	ToZenEi(): void

	/**
	 * 全角英数→半角英数
	 */
	ToHanEi(): void

	/**
	 * 半角＋全ひら→全角・カタカナ
	 */
	ToZenKata(): void

	/**
	 * 半角＋全カタ→全角・ひらがな
	 */
	ToZenHira(): void

	/**
	 * 半角カタカナ→全角カタカナ
	 */
	HanKataToZenKata(): void

	/**
	 * 半角カタカナ→全角ひらがな
	 */
	HanKataToZenHira(): void

	/**
	 * TAB→空白
	 */
	TABToSPACE(): void

	/**
	 * 空白→TAB
	 */
	SPACEToTAB(): void

	/**
	 * 自動判別→SJISコード変換
	 */
	AutoToSJIS(): void

	/**
	 * (JIS→SJIS)コード変換
	 */
	JIStoSJIS(): void

	/**
	 * EUC→SJISコード変換
	 */
	EUCtoSJIS(): void

	/**
	 * Unicode→SJISコード変換
	 */
	CodeCnvUNICODEtoSJIS(): void

	/**
	 * UnicodeBE→SJISコード変換
	 */
	CodeCnvUNICODEBEtoSJIS(): void

	/**
	 * UTF-8→SJISコード変換
	 */
	UTF8toSJIS(): void

	/**
	 * UTF-7→SJISコード変換
	 */
	UTF7toSJIS(): void

	/**
	 * SJIS→JISコード変換
	 */
	SJIStoJIS(): void

	/**
	 * SJIS→EUCコード変換
	 */
	SJIStoEUC(): void

	/**
	 * SJIS→UTF-8コード変換
	 */
	SJIStoUTF8(): void

	/**
	 * SJIS→UTF-7コード変換
	 */
	SJIStoUTF7(): void

	/**
	 * Base64デコードして保存
	 */
	Base64Decode(): void

	/**
	 * uudecodeして保存
	 */
	Uudecode(): void

	// 検索

	/**
	 * 検索(単語検索ダイアログ)
	 */
	SearchDialog(): void

	/**
	 * 次を検索
	 * @param S1 ↓方向に探す文字列、空文字列を指定すると、現在検索対象になっている文字列を探す 
	 * @param i1 検索ダイアログの状態(
	 *     0x01:単語単位で探す|
	 *     0x02:英大文字と小文字を区別する|
	 *     0x04:正規表現|
	 *     0x08:見つからない特にメッセージを表示|
	 *     0x10:検索ダイアログを自動的に閉じる|
	 *     0x20:先頭(末尾)から再検索する
	 * )
	 */
	SearchNext(S1: string, i1: number): void

	/**
	 * 前を検索
	 * @param S1 ↑方向に探す文字列 
	 * @param i1 検索ダイアログの状態(
	 *     0x01:単語単位で探す|
	 *     0x02:英大文字と小文字を区別する|
	 *     0x04:正規表現|
	 *     0x08:見つからない特にメッセージを表示|
	 *     0x10:検索ダイアログを自動的に閉じる|
	 *     0x20:先頭(末尾)から再検索する
	 * )
	 */
	SearchPrev(S1: string, i1: number): void

	/**
	 * 置換(置換ダイアログ)
	 */
	ReplaceDialog(): void

	/**
	 * 置換(実行)
	 * @param S1 置換前の文字列
	 * @param S2 置換後の文字列 
	 * @param i1 置換ダイアログの状態(
	 *     0x001:単語単位で探す|
	 *     0x002:英大文字と小文字を区別する|
	 *     0x004:正規表現|
	 *     0x008:見つからない特にメッセージを表示|
	 *     0x010:置換ダイアログを自動的に閉じる|
	 *     0x020:先頭(末尾)から再検索する|
	 *     0x040:クリップボードから貼り付ける|
	 *     0x080:選択範囲(指定新倍場合はファイル全体)|
	 *     0x100:選択始点挿入|
	 *     0x200:選択終点追加(始点、終点を指定しない場合は置換)
	 * )
	 */
	Replace (S1: string,S2: string,i1: nuimber): void

	/**
	 * すべて置換(実行)
	 * @param S1 置換前の文字列
	 * @param S2 置換後の文字列 
	 * @param i1 置換ダイアログの状態(
	 *     0x001:単語単位で探す|
	 *     0x002:英大文字と小文字を区別する|
	 *     0x004:正規表現|
	 *     0x008:見つからない特にメッセージを表示|
	 *     0x010:置換ダイアログを自動的に閉じる|
	 *     0x020:先頭(末尾)から再検索する|
	 *     0x040:クリップボードから貼り付ける|
	 *     0x080:選択範囲(指定新倍場合はファイル全体)|
	 *     0x100:選択始点挿入|
	 *     0x200:選択終点追加(始点、終点を指定しない場合は置換)
	 * )
	 */
	ReplaceAll(S1: string,S2: string, i1: number): void

	/**
	 * 検索マークのクリア 
	 */
	SearchClearMark(): void

	/**
	 * 検索開始位置へ戻る
	 */
	SearchStartPos(): void

	/**
	 * Grep
	 * @param S1 検索文字列
	 * @param S2 検索対象ファイル
	 * @param S3 検索対象フォルダ
	 * @param i1 Grep ダイアログの状態(
	 *     0x001:サブフォルダからも選択する|
	 *     0x004:英大文字と小文字を区別する|
	 *     0x008:正規表現|
	 *     0x010:文字コードセット自動選択|
	 *     0x020:該当行(指定しない場合は該当部分)|
	 *     0x040:ファイルごと(指定しない場合はノーマル)|
	 *     0x08000:単語単位で探す|
	 *     0x10000:ファイルごと最初のみ検索|
	 *     0x20000:ベースフォルダ表示|
	 *     0x40000:フォルダ毎に表示
	 * )
	 * @param i2 文字コードセット(
	 *     0 :SIFT-JIS|
	 *     1 :JIS|
	 *     2 :EUC|
	 *     3 :Unicode|
	 *     4 :UTF-8|
	 *     5 :UTF-7|
	 *     6 :UnicodeBE|
	 *     7 :CESU-8|
	 *     8 :Latin1(Windows-1252)|
	 *     99:自動選択
	 * )
	 */
	Grep(S1: string, S2: string, S3: string, i1: number, i2: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 99): void

	/**
	 * 指定行へジャンプ
	 * @param i1 ジャンプ先の行番号を10進数数値で指定する。
	 * @param i2 指定行へジャンプ ダイアログの状態(
	 *     0x01:改行単位の行番号(指定しない場合は折り返し単位の行番号)|
	 *     0x02:PL/SQLコンパイルエラー行を処理する
	 * )
	 */
	Jump(i1: number, i2: 0 | 1 | 2 | 3) : void

	/**
	 * アウトライン解析
	 */
	Outline(): void

	/**
	 * タグジャンプ
	 */
	TagJump(): void

	/**
	 * タグジャンプバック
	 */
	TagJumpBack(): void

	/**
	 * タグファイルの作成
	 */
	TagMake(): void

	/**
	 * ダイレクトタグジャンプ
	 */
	DirectTagJump(): void

	/**
	 * ファイル内容比較
	 */
	Compare(): void

	/**
	 * DIFF差分表示(ダイアログ)
	 */
	DiffDialog(): void

	/**
	 * DIFF差分表示
	 * @param S1 比較ファイル名
	 * @param i1 DIFF ダイアログの状態(
	 *     0x01:大文字小文字同一視|
	 *     0x02:空白変更無視|
	 *     0x04:空行無視|
	 *     0x08:TAB-SPACE変換|
	 *     0x10:編集中のファイルが旧ファイル|
	 *     0x20:DOFF差分がないときにメッセージ表示|
	 * )
	 */
	Diff(S1: string, i1: number): void

	/**
	 * DIFF差分表示(次へ)
	 */
	DiffNext(): void

	/**
	 * DIFF差分表示(前へ)
	 */
	DiffPrev(): void

	/**
	 * DIFF差分表示(全解除)
	 */
	DiffReset(): void

	/**
	 * 対括弧の検索
	 */
	BracketPair(): void

	/**
	 * ブックマーク設定・解除
	 */
	BookmarkSet(): void

	/**
	 * 次のブックマークへ
	 */
	BookmarkNext(): void

	/**
	 * 前のブックマークへ
	 */
	BookmarkPrev(): void

	/**
	 * ブックマークの全解除
	 */
	BookmarkReset(): void

	/**
	 * ブックマークの一覧
	 */
	BookmarkView(): void

	/**
	 * 指定パターンに一致する行をマーク
	 * @param S1 探す文字列
	 * @param i1 検索ダイアログの状態(
	 *     0x01:単語単位で探す|
	 *     0x02:英大文字と小文字を区別する|
	 *     0x04:正規表現|
	 *     0x08:見つからないときにメッセージを表示|
	 *     0x10:検索ダイアログを自動的に閉じる|
	 *     0x20:先頭(末尾)から再検索する
	 * )
	 */
	BookmarkPattern(S1: string,i1: number): void

	// モード切替

	/**
	 * 挿入／上書きモード切り替え
	 */
	ChgmodINS(): void

	/**
	 * 
	 * @param i1 文字コード(
	 *     0 :SIFT-JIS|
	 *     1 :JIS|
	 *     2 :EUC|
	 *     3 :Unicode|
	 *     4 :UTF-8|
	 *     5 :UTF-7|
	 *     6 :UnicodeBE|
	 *     7 :CESU-8|
	 *     8 :Latin1(Windows-1252)|
	 *     99:自動選択
	 * )
	 * @param i2 BOMの有無(0:BOMなし|1:BOMあり)
	 */
	ChgCharSet(i1: -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 99, i2: 0 | 1): void

	/**
	 * 入力改行コード指定
	 * @param i1 改行コード(
	 *     1:CRLF|
	 *     2:LFCR|
	 *     3:LF|
	 *     4:CR
	 * )
	 */
	ChgmodEOL(i1: 1 | 2 | 3 | 4): void

	/**
	 * 各種モードの取消
	 */
	CancelMode(): void

	// 設定

	/**
	 * ツールバーを表示、表示中のツールバーを隠す
	 */
	ShowToolbar(): void

	/**
	 * ファンクションキーを表示、表示中のファンクションキーを隠す
	 */
	ShowFunckey(): void

	/**
	 * タブバーを表示、表示中のタブバーを隠す
	 */
	ShowTab(): void

	/**
	 * ステータスバーを表示、表示中のステータスバーを隠す
	 */
	ShowStatusbar(): void

	/**
	 * タイプ別設定一覧
	 */
	TypeList(): void

	/**
	 * タイプ別設定一覧ダイアログを表示
	 * @param i1 タイプ別設定番号
	 */
	ChangeType(i1: number): void

	/**
	 * タイプ別設定
	 */
	OptionType(): void

	/**
	 * 共通設定
	 */
	OptionCommon(): void

	/**
	 * フォント設定
	 */
	SelectFont(): void

	/**
	 * フォントサイズ設定 
	 * @param i1 フォントサイズ(1/10ポイント単位)
	 * @param i2 フォントサイズを拡大or縮小するための変更量(i1=0のとき有効)
	 * @param i3 変更範囲(0:共通設定変更|1:タイプ別設定変更|2:現在のウインドウのみ一時的に変更)
	 */
	SetFontSize(i1: number, i2: number, i3: 0 | 1 | 2) 

	/**
	 * 折り返し桁数
	 */
	WrapWindowWidth(): void

	/**
	 * お気に入りの設定
	 */
	OptionFavorite(): void

	/**
	 * 引用符の変更
	 * @param S1 引用符に設定する文字列
	 */
	SetMsgQuoteStr(S1: string): void

	/**
	 * 折り返し方法
	 * @param i1 折り返し種別(0:折り返さない|1:指定桁で折り返す|2:右端で折り返す)
	 */
	TextWrapMethod(i1: 0 | 1 | 2): void

	// TODO
	/**
	 * 文字カウント方法
	 * @param i1 モード(0:トグル。文字数カウント／バイト数カウントを切り替える|1:文字数でカウント|2:バイト数でカウント)
	 * @param i2 不明
	 * @param i3 不明
	 */
	SelectCountMode(i1: 0 | 1 | 2,i2: number, i3: number): void

	/**
	 * 外部コマンド実行
	 * @param S1 実行するコマンド文字列
	 * @param i1 標準出力を得るかどうか(0:OFF|1:ON)
	 */
	ExecCommand(S1: string, i1: 0 | 1): void

	/**
	 * 外部コマンド実行
	 */
	ExecCommandDialog(): void

	// カスタムメニュー

	/**
	 * 右クリックメニュー
	 */
	RMenu(): void

	/**
	 * カスタムクメニュー1
	 */
	CustMenu1(): void

	/**
	 * カスタムクメニュー2
	 */
	CustMenu2(): void

	/**
	 * カスタムクメニュー3
	 */
	CustMenu3(): void

	/**
	 * カスタムクメニュー4
	 */
	CustMenu4(): void

	/**
	 * カスタムクメニュー5
	 */
	CustMenu5(): void

	/**
	 * カスタムクメニュー6
	 */
	CustMenu6(): void

	/**
	 * カスタムクメニュー7
	 */
	CustMenu7(): void

	/**
	 * カスタムクメニュー8
	 */
	CustMenu8(): void

	/**
	 * カスタムクメニュー9
	 */
	CustMenu9(): void

	/**
	 * カスタムクメニュー10
	 */
	CustMenu10(): void

	/**
	 * カスタムクメニュー11
	 */
	CustMenu11(): void

	/**
	 * カスタムクメニュー12
	 */
	CustMenu12(): void

	/**
	 * カスタムクメニュー13
	 */
	CustMenu13(): void

	/**
	 * カスタムクメニュー14
	 */
	CustMenu14(): void

	/**
	 * カスタムクメニュー15
	 */
	CustMenu15(): void

	/**
	 * カスタムクメニュー16
	 */
	CustMenu16(): void

	/**
	 * カスタムクメニュー17
	 */
	CustMenu17(): void

	/**
	 * カスタムクメニュー18
	 */
	CustMenu18(): void

	/**
	 * カスタムクメニュー19
	 */
	CustMenu19(): void

	/**
	 * カスタムクメニュー20
	 */
	CustMenu20(): void

	/**
	 * カスタムクメニュー21
	 */
	CustMenu21(): void

	/**
	 * カスタムクメニュー22
	 */
	CustMenu22(): void

	/**
	 * カスタムクメニュー23
	 */
	CustMenu23(): void

	/**
	 * カスタムクメニュー24
	 */
	CustMenu24(): void

	// ウインドウ

	/**
	 * 上下に分割
	 */
	SplitWinV(): void

	/**
	 * 左右に分割
	 */
	SplitWinH(): void

	/**
	 * 縦横に分割
	 */
	SplitWinVH(): void

	/**
	 * ウインドウを閉じる
	 */
	WinClose(): void

	/**
	 * すべて閉じる
	 */
	WinCloseAll(): void

	/**
	 * 重ねて表示
	 */
	CascadeWin(): void

	/**
	 * 上下に並べて表示
	 */
	TileWinV(): void

	/**
	 * 左右に並べて表示
	 */
	TileWinH(): void

	/**
	 * 次のウインドウ
	 */
	NextWindow(): void

	/**
	 * 前のウインドウ
	 */
	PrevWindow(): void

	/**
	 * ウインドウ一覧
	 */
	WindowList(): void

	/**
	 * 縦方向に最大化
	 */
	MaximizeV(): void

	/**
	 * 横方向に最大化
	 */
	MaximizeH(): void

	/**
	 * すべて最小化
	 */
	MinimizeAll(): void

	/**
	 * 再描画
	 */
	ReDraw(): void

	/**
	 * アウトプットウインドウ表示
	 */
	ActivateWinOutput(): void

	/**
	 * マクロ用アウトプットウインドウに出力
	 * @param S1 出力したいテキスト
	 * @param i1 制御オプション(0x01:ExpandParameterによる文字列展開を行う|02:テキスト末尾に改行コードを付加しない)
	 */
	TraceOut(S1: string, i1: 0 | 1 | 2 | 3): void

	/**
	 * 常に手前に表示
	 * @param i1 手前に表示させるかどうか(0:トグル動作|1:最前面|2:最前面解除)
	 */
	WindowTopMost(i1: 0 | 1 | 2): void

	/**
	 * グループを閉じる
	 */
	GroupClose(): void

	/**
	 * 次のグループ
	 */
	NextGroup(): void

	/**
	 * 前のグループ
	 */
	PrevGroup(): void

	/**
	 * タブを右に移動
	 */
	TabMoveRight(): void

	/**
	 * タブを左に移動
	 */
	TabMoveLeft(): void

	/**
	 * 新規グループ
	 */
	TabSeparate(): void

	/**
	 * 次のグループに移動
	 */
	TabJointNext(): void

	/**
	 * 前のグループに移動
	 */
	TabJointPrev(): void

	/**
	 * このタブ以外を閉じる／このウインドウ以外を閉じる
	 */
	TabCloseOther(): void

	/**
	 * 左をすべて閉じる
	 */
	TabCloseLeft(): void

	/**
	 * 右をすべて閉じる
	 */
	TabCloseRight(): void

	// 支援

	/**
	 * 入力補完
	 */
	Complete(): void

	/**
	 * キーワードヘルプ自動表示する/しない
	 * @param i1 モード(0:トグル|1:自動表示する|2:自動表示しない)
	 */
	ToggleKeyHelpSearch(i1: 0 | 1 | 2): void

	/**
	 * ヘルプ目次
	 */
	HelpContents(): void

	/**
	 * ヘルプキーワード検索
	 */
	HelpSearch(): void

	/**
	 * コマンド一覧
	 */
	CommandList(): void

	/**
	 * 外部ヘルプ1
	 */
	ExtHelp1(): void

	/**
	 * 外部HTMLヘルプ
	 * @param S1 HTMLヘルプファイル名
	 * @param S2 表示させたいキーワード
	 */
	ExtHtmlHelp(S1: string, S2: string): void

	/**
	 * バージョン情報
	 */
	About(): void

	// その他

	/**
	 * ファイル名を返す
	 */
	GetFilename(): string

	/**
	 * 選択部分の文字列を取得
	 * @param i1 予約(0:固定)
	 */
	GetSelectedString(i1: 0): string

	/**
	 * 特殊文字の展開
	 * @param S1 フォーマット(
	 *     $$ : 文字"$"自身|
	 *     $F : 開いているファイルの名前（フルパス）|
	 *     $f : 開いているファイルの名前（ファイル名+拡張子のみ）|
	 *     $g : 開いているファイルの名前（拡張子を除くファイル名のみ）|
	 *     $/ : 開いているファイルの名前（フルパス。パスの区切りが : / : ）|
	 *     $N : 開いているファイルの名前（「共通設定⇒ファイル名表示」の設定で置換された表記）|
	 *     $S : サクラエディタ本体のフルパス|
	 *     $M : 実行中のマクロファイルのフルパス|
	 *     $C : 選択中のテキストまたはカーソル位置の単語|
	 *     $x : 現在の物理桁位置(先頭からのバイト数)(1開始)|
	 *     $y : 現在の物理行位置(1開始)|
	 *     $d : 現在の日付(共通設定の日付書式)|
	 *     $t : 現在の時刻(共通設定の時刻書式)|
	 *     $D : 開いているファイルのタイムスタンプ(共通設定の日付書式)|
	 *     $T : 開いているファイルのタイムスタンプ(共通設定の時刻書式)|
	 *     $V : サクラエディタのバージョン|
	 *     $h : Grep検索キーの先頭32byteまで
	 * )
	 * @returns 特殊文字を展開した文字列
	 */
	ExpandParameter(S1: string): string

	/**
	 * 指定論理行の取得
	 * @param i1 行番号(
	 *     0:カーソルがある行を取得|
	 * 	   1:先頭行を取得|
	 *     n:n行目を取得|
	 *     全行数より大きい値:空文字列が返る
	 * )
	 * @returns 論理行の文字列
	 */
	GetLineStr(i1: number): string

	/**
	 * 全論理行数の取得
	 * @param i1 予約、0固定
	 * @returns 全論理行数
	 */
	GetLineCount(i1: 0): number

	/**
	 * タブ幅の取得・設定
	 * @param i1 タブ幅(0:現在のタブ幅を取得|1以上:設定するタブ幅)
	 */
	ChangeTabWidth(i1: number): number

	/**
	 * テキストの選択状態を取得
	 * @returns 選択状態(0:非選択状態|1:選択中|2:矩形選択中)
	 */
	IsTextSelected(): 0 | 1 | 2

	/**
	 * 選択開始行を取得
	 * @returns 選択開始行（1から始まる）
	 */
	GetSelectLineFrom(): number

	/**
	 * 選択開始桁を取得
	 * @returns 選択開始桁（1から始まる）
	 */
	GetSelectColmFrom(): number

	/**
	 * 選択終了行を取得
	 * @returns 選択終了行（1から始まる）
	 */
	GetSelectLineTo(): number

	/**
	 * 選択終了桁を取得
	 * @returns 選択終了桁（1から始まる）
	 */
	GetSelectColmTo(): number

	/**
	 * 挿入／上書きモードの取得
	 * @returns 0:上書きモード|1:挿入モード
	 */
	IsInsMode(): 0 | 1

	/**
	 * 文字コードの取得
	 * @returns 文字コード(0:SJIS|1:JIS|2:EUC|3:Unicode|4:UTF-8|5:UTF-7|6:UnicodeBE|7:CESU-8|8:Latin1(Windows-1252))
	 */
	GetCharCode(): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

	/**
	 * 改行コードの取得
	 * @returns 改行コード(0:CRLF|1:CR|2:LF)
	 */
	GetLineCode(): 0 | 1 | 2

	/**
	 * Undo可能か調べる
	 * @returns 0:無効|1:可能
	 */
	IsPossibleUndo(): 0 | 1

	/**
	 * Redo可能か調べる
	 * @returns 0:無効|1:可能
	 */
	IsPossibleRedo(): 0 | 1

	/**
	 * トレース出力
	 * @param S1 出力テキスト
	 * @param i1 オプション値(0x01:ExpandParameterによる文字列展開を行う|0x02:テキスト末尾に改行コードを付加しない)
	 */
	TraceOut(S1: string, i1: 0 | 1 | 2 | 3): void
}

declare var Plugin: {
	/**
	 * 個別フォルダのパスを返す。
	 */
	GetPluginDir(): string

	/**
	 * 定義ファイルの値を取得する。
	 * @param section セクションキー
	 * @param key キー
	 */
	GetDef(section: string, key: string): string

	/**
	 * オプションファイルの値を取得する。
	 * @param section セクションキー
	 * @param key キー
	 */
	GetOption(section: string, key: string): string

	/**
	 * オプションファイルの値を設定する。
	 * @param section セクションキー
	 * @param key キー
	 * @param value 値
	 */
	SetOption(section: string, key: string, value: string): void

	/**
	 * コマンドを追加する。
	 * @param handler コマンドハンドラ名
	 * @param label ラベル
	 * @param icon アイコン名
	 */
	AddCommand(handler: string, label: string, icon: string): void

	/**
	 * 実行中のプラグ番号を取得する。
	 */
	GetCommandNo(): number

	/**
	 * 言語設定の文字列定義を取得する
	 * @param no 定義NO(0:言語名|1以上:定義NOの言語設定文字列)
	 */
	GetString(no: number): string
}

declare var Outline: {
	/**
	 * アウトライン解析追加
	 * @param line 論理行
	 * @param column 論理桁
	 * @param label ラベル
	 * @param nInfo 付加情報
	 */
	AddFuncInfo(line: number, column: number, label: string, nInfo: number): void

	/**
	 * アウトライン解析追加
	 * @param line 論理行
	 * @param column 論理桁
	 * @param label ラベル
	 * @param level 深さ
	 */
	AddFuncInfo2(line: number, column: number, label: string, level: number): void

	/**
	 * アウトライン解析追加
	 * @param line 論理行
	 * @param column 論理桁
	 * @param label ラベル
	 * @param nInfo 付加情報
	 * @param name ファイル名
	 */
	AddFuncInfo3(line: number, column: number, label: string, nInfo: number, name: string): void

	/**
	 * アウトライン解析追加
	 * @param line 論理行
	 * @param column 論理桁
	 * @param label ラベル
	 * @param level 深さ
	 * @param name ファイル名
	 */
	AddFuncInfo4(line: number, column: number, label: string, level: number, name: string): void

	/**
	 * アウトライン解析ダイアログのタイトルを変える。
	 * @param label 
	 */
	SetTitle(label: string): void

	/**
	 * リストの種別を設定。
	 * @param type (100:ツリー表示|200:オブジェクト指向言語のクラス・メソッドに適したツリー表示|300:リスト表示)
	 */
	SetListType(type: 100 | 200 | 300): void

	/**
	 * タイプにの200ツリー表示の付加文字を変更する。
	 * @param nInfo 付加情報NO
	 * @param sText 付加情報文字列
	 */
	SetLabel(nInfo: number, sText: string): void
}

declare var Indent: {
	/**
	 * 入力されたキーを取得する。Enterの場合 \r を返す。
	 */
	GetChar(): string
}

declare var Complement: {
	/**
	 * 補完対象の文字列を取得する。
	 */
	GetCurrentWord(): string

	/**
	 * オプションを取得する。
	 * @returns 1:大文字小文字を同一視、2:編集中ファイルから検索、のOR
	 */
	GetOption(): number

	/**
	 * 文字列を候補に追加する。
	 * @param item 候補文字列
	 * @returns 候補の数
	 */
	AddList(item: string): number
}