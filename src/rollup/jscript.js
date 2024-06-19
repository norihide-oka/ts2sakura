import { existsSync, readFileSync, writeFileSync } from 'fs'
import { relative } from 'path'
import encoder from 'iconv-lite'
const { encode } = encoder
const currentDir = process.cwd()

const nodeDir = "./src/node/"
const forceImports = [
	"JSON",
	"console",
	"process",
]
.reverse()
.map(i => [new RegExp(i + "\\."), nodeDir + i + ".js"])

const nodeImports = [
	"child_process",
	"path",
	"fs",
]
.map(i => [new RegExp(`from +['"]${i}['"]`), nodeDir + i + ".js"])

const polyfillDir = "./src/polyfill/"
const polyfills = [
	[/^core-js\/modules\/es[0-9]*\./, polyfillDir],
	[/^core-js\/[^\/]+\//, polyfillDir]
]

const makeReg = i => new RegExp(`es[0-9]*\.${i.replace(/\./g, "\\.")}$`)

const emptyPolyfill = polyfillDir + "empty.js"
const emptyPolyfills = [
	'array.concat.js',
	'array.join.js',
	'array.sort.js',
	'array.splice.js',
	'date.to-json.js',
	'date.to-string.js',
	'number.constructor.js',
	'object.keys.js',
	'object.to-string.js',
	'regexp.constructor.js',
	'regexp.exec.js',
	'regexp.match.js',
	'regexp.replace.js',
	'regexp.split.js',
	'regexp.to-string.js',
	'string.match.js',
	'string.replace.js',
	'string.split.js',
].map(makeReg).concat([
	/web\.dom-collections\.for-each\.js$/,
])

const noSupportedItems = [
	["Array.prototype.copyWithin", "array.copy-within.js"],
].map(i => [i[0], makeReg(i[1])])

const emptyLog = (_) => {}
const success = (message) => console.log(`\u001b[32m${message}\u001b[0m`)
const warning = (message) => console.log(`\u001b[33m${message}\u001b[0m`)

export function jscript(option) {
	let log = (!option?.silent)
		? { success, warning }
		: { success: emptyLog, warning: emptyLog }
	let force = option?.forceEmpty
	return {
		name: 'custom-jscript-plugin',
		writeBundle: {
			sequential: true,
			async handler(options, bundle)
			{
				if(!options.file || !existsSync(options.file))
				{
					log.warning(`no convert encoding. file not found[${options.file}]`)
				}
				else
				{
					let text = readFileSync(options.file).toString()
					let buf = encode(text, "SJIS")
					writeFileSync(options.file, buf)
					log.success(`convert encoding utf-8 to shift-jis [${options.file}]`)
				}
			}
		},
		resolveId : (id) =>
		{
			if(emptyPolyfills.find(i => i.test(id)))
			{
				log.success(`unnecessary polyfill [${id}]`)
				return emptyPolyfill
			}
			let polyfill = polyfills.find(i => i[0].test(id))
			if(polyfill)
			{
				let result = id.replace(polyfill[0], polyfill[1])
				if(existsSync(result))
				{
					log.success(`polyfill found [${id}] -> [${result}]`)
					return result
				}
				if(force)
				{
					log.warning(`polyfill force empty [${id}]`)
					return emptyPolyfill
				}
				let noSupportedItem = noSupportedItems.find(i => i[1].test(id))
				if(noSupportedItem)
					log.warning(`polyfill not supported [${noSupportedItem[0]}] [${id}]`)
				else
					log.warning(`polyfill not found [${id}] -> [${result}]`)
			}
		},
		transform: (code, id) =>
		{
			if(!/^(?:.:\\|\.{0,2}\/)/.test(id))
			{
				if([
					/rollupPluginBabelHelpers\.js$/
				].find(i => i.test(id)))
					log.warning(`not supported  [${id}]`)
				return
			}
			let result = null
			let mkPath = (item, itemId) =>
			{
				let result = item
				result = relative(currentDir, result)
				result = relative(itemId.replace(/[/\\][^/\\]*$/, ""), result)
				result = result.replace(/\\/g, "/")

				if(!/^\./.test(result) && !/^.:/.test(result))
					result = "./" + result
				return result
			}
			forceImports.forEach(([reg, src]) =>
			{
			 	if(reg.test(code))
			 	{
					if(!result)
						result = code
					let item = mkPath(src, id)
					log.success(`force import [${item}](${src}) file[${id}]`)
					result = [`import '${item}'`, result].join("\n")
			 	}
			})
			nodeImports.forEach(([reg, src]) =>
			{
				if(reg.test(code))
				{
					log.success(`node import [${src}] file[${id}]`)
					if(!result)
						result = code
					let item = mkPath(src, id)
					result = result.replace(reg, (p0, p1) => `from '${item}'`)
				}
			})
			if(result)
			 	return result
		}
	}
}
