const eval2 = eval
/**
 * 文字列からオブジェクトへJSONパースします。
 * @param text JSON文字列
 * @returns オブジェクト
 */
const parse = (text: string) => eval2(`(${text})`)

const escMap: {[key: string]: string} = {
	'"': '\\"',
	'\\': '\\\\',
	'\b': '\\b',
	'\f': '\\f',
	'\n': '\\n',
	'\r': '\\r',
	'\t': '\\t'
}
const escFunc: (p0: string) => string = (p0: string) => escMap[p0] ?? '\\u' + (p0.charCodeAt(0) + 0x10000).toString(16).substring(1)
const escRE = /[\\"\u0000-\u001F\u2028\u2029]/g

/**
 * JSON文字列へ変換します。
 * @param value オブジェクト
 * @param caller null固定
 * @param indent インデント数
 * @param level 現在のインデントの位置
 * @returns JSON文字列
 */
function stringify(value: any, caller: null, indent: number, level: number): string
{
	if (value == null || value == undefined)
		return "null";
	switch(typeof value)
	{
		case "number":
			return isFinite(value) ? value.toString() : 'null';
		case "boolean":
			return value.toString();
		case "object":
			var space = !indent ? null : (new Array(indent * level + indent + 1)).join(" ");
			var prefix = !space ? "" : ("\n" + space);
			var separater = !space ? ", " : (",\n" + space);
			var suffix = !space || !indent ? "" : ("\n" + (new Array(indent * level + 1)).join(" "));
			if(Object.prototype.toString.call(value) == "[object Array]")
			{
				var result = [];
				for(var index = 0; index < value.length; index++)
					result.push(stringify(value[index], caller, indent, level + 1));
				return "[" + prefix + result.join(separater) + suffix + "]";
			}
			else
			{
				var result = [];
				for(var key in value)
					result.push(stringify(key, null, 0, 0) + ":" + stringify(value[key], caller, indent, level + 1))
				return "{" + prefix + result.join(separater) + suffix + "}";
			}
		default:
			return '"' + value.toString().replace(escRE, escFunc) + '"';
	}
}

/**
 * JSONオブジェクトです。
 */
const WshJson ={
	parse,
	/**
	 * JSON文字列へ変換します。
	 * @param value オブジェクト
	 * @param caller null固定
	 * @param indent インデント数
	 * @returns JSON文字列
	 */
	stringify: (value: any, caller: null, indent: number) => stringify(value, caller, indent, 0)
}
export default WshJson
