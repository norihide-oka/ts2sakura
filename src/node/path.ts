const separater = "/"
const reg = /\\/g

/**
 * 相対パスを取得します。
 * @param from 開始絶対パス
 * @param to 終了絶対パス
 * @returns 
 */
export function relative(from: string, to: string): string
{
	let main = from.replace(reg, separater).split(separater)
	let sub = to.replace(reg, separater).split(separater)

	let result = []
	let index = main.findIndex((v, i) => i >= sub.length || v !== sub[i])
	if(index < 0)
	{
		index = sub.length - main.length
		result.push(".")
		if(sub.length > main.length)
			result.push(...sub.slice(main.length))
		
	}
	else
	{
		result.push(
			...main
				.slice(index)
				.map(() => "..")
				.concat(sub.slice(index))
		)
	}
	if(reg.test(from))
		return result.join("\\")
	return result.join(separater)
}

/**
 * 複数のパスを解析して、パスを構築します。
 * @param paths パス
 * @returns 構築されたパス
 */
export function resolve(...paths: string[]): string
{
	let func = (from: string, to: string) =>
	{
		let main = from.replace(reg, separater).split(separater)
		let sub = to.replace(reg, separater).split(separater)

		sub.forEach(i => {
			switch(i)
			{
				case ".":
					break
				case "..":
					if(main.length > 0)
						main.splice(main.length - 1, 1)
					break
				default:
					main.push(i)
					break
			}
		})
		return main.join(separater)
	}
	let result = paths.reduce((p, v) => func(p, v))
	if(reg.test(paths[0] ?? ""))
		return result.split("/").join("\\")
	return result
}
