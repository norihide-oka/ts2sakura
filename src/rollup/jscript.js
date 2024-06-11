import { existsSync, readFileSync, writeFileSync } from 'fs'
import encoder from 'iconv-lite'
const { encode } = encoder

const forceImports = [
	[/console\./, "./src/node/console.js"],
	[/process\./, "./src/node/process.js"],
	[/JSON\./, "./src/node/JSON.js"],
	[/\.flat\(/, "./src/polyfill/es6.array.flat.js"],
]
const emptyPolyfills = [
	'es6.object.to-string.js',
	'es6.date.to-string.js',
	'es6.regexp.to-string.js',
	'es6.regexp.replace.js',
	'es6.regexp.constructor.js',
	'es6.regexp.split.js',
	'es6.number.constructor.js',
	'es6.regexp.match.js',
]
const noSupportedItems = [
	["Array.prototype.copyWithin", "es6.array.copy-within.js"],
]

const nodeImports = [
	[/^child_process$/, "./src/node/child_process.js"]
]

export function jscript() {
	return {
		name: 'custom-jscript-plugin',
		writeBundle: {
			sequential: true,
			async handler(options, bundle)
			{
				if(!options.file || !existsSync(options.file))
				{
					console.log(`no convert encoding. file not found[${options.file}]`)
					return
				}
				let text = readFileSync(options.file).toString()
				forceImports.reverse().forEach(([reg, src]) => {
					if(reg.test(text))
					{
						console.log(`force import [${src}] file[${options.file}]`)
						text = [readFileSync(src).toString(), text].join("\n")
					}
				})
				let buf = encode(text, "SJIS")
				writeFileSync(options.file, buf)
				console.log(`file [${options.file}] convert encoding utf-8 to shift-jis`)
				return
			}
		},
		resolveId : (id) =>
		{
			const reg = /^core-js\/modules\//
			if(reg.test(id))
			{
				const dir = "./src/polyfill/"
				let result = id.replace(reg, dir)
				if(emptyPolyfills.find(i => id.endsWith(i)))
					result = dir + "empty.js"
				if(existsSync(result))
				{
					console.log(`polyfill found [${id}] -> [${result}]`)
					return result
				}
				let noSupportedItem = noSupportedItems.find(i => id.endsWith(i[1]))
				if(noSupportedItem)
					console.log(`\u001b[33mpolyfill not supported [${noSupportedItem[0]}]\u001b[0m`)
				else
					console.log(`\u001b[33mpolyfill not found [${id}] -> [${result}]\u001b[0m`)
			}
			else
			{
				let index = nodeImports.findIndex(([reg]) => reg.test(id))
				if(index >= 0)
					return nodeImports[index][1]
			}
		}
	}
}
