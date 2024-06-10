import typescript from "@rollup/plugin-typescript"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
import { string } from "rollup-plugin-string"
import { existsSync, readFileSync, writeFileSync, readdirSync } from 'fs'
import { resolve, relative } from "path"
import encoder from 'iconv-lite'
const { encode } = encoder

let files = []
if(process.env.FROM && process.env.TO)
{
	files.push([process.env.FROM, process.env.TO])
}
else
{
	const current = "./"
	const dir = "./src/ts"
	const dist = "./dist"
	const lib = "lib"
	const ext = /\.ts$/
	function readdir(dir, root = false)
	{
		return readdirSync(dir, {withFileTypes: true})
			.filter(i => i.name !== lib && (i.isDirectory() || ext.test(i.name)))
			.map(i => i.isDirectory() ? readdir(resolve(dir, i.name)) : resolve(dir, i.name))
			.flat()
	}
	files.push(...readdir(dir, true)
		.map(i => relative(dir, i))
		.map(i => [resolve(dir, i), resolve(dist, i.replace(ext, ".js"))])
		.map(i => i.map(ii => relative(current, ii)))
	)
}

function customPlugin() {
	return {
	  name: 'custom-sjis-plugin',
	  writeBundle: {
		sequential: true,
		async handler(options, bundle) {
			if(!options.file || !existsSync(options.file))
			{
				console.log(`no convert encoding. file not found[${options.file}]`)
				return
			}
			let text = readFileSync(options.file).toString()
			const forceImports = [
				[/console\./, "./src/node/console.js"],
				[/process\./, "./src/node/process.js"],
				[/JSON\./, "./src/node/JSON.js"],
				[/\.flat\(/, "./src/polyfill/es6.array.flat.js"],
			].reverse()
			forceImports.forEach(([reg, src]) => {
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
	  }
	}
}

function customPolyfill() {
	return {
		name: "custom-polyfill-plugin",
		resolveId : (id) => {
			const reg = /^core-js\/modules\//
			if(reg.test(id))
			{
				const dir = "./src/polyfill/"
				let result = id.replace(reg, dir)
				if([
					'es6.object.to-string.js',
					'es6.date.to-string.js',
					'es6.regexp.to-string.js',
					'es6.regexp.replace.js',
					'es6.regexp.constructor.js',
					'es6.regexp.split.js',
					'es6.number.constructor.js',
					'es6.regexp.match.js',
				].find(i => id.endsWith(i)))
				{
					const empty = dir + "empty.js"
					result = empty
				}
				if(existsSync(result))
				{
					console.log(`polyfill found [${id}] -> [${result}]`)
					return result
				}
				const noSupportedItems = [
					["Array.prototype.copyWithin", "es6.array.copy-within.js"],
				]
				let noSupportedItem = noSupportedItems.find(i => id.endsWith(i[1]))
				if(noSupportedItem)
					console.log(`\u001b[33mpolyfill not supported [${noSupportedItem[0]}]\u001b[0m`)
				else
					console.log(`\u001b[33mpolyfill not found [${id}] -> [${result}]\u001b[0m`)
			}
			else
			{
				const nodeImports = [
					[/^child_process$/, "./src/node/child_process.js"]
				]
		 		let index = nodeImports.findIndex(([reg]) => reg.test(id))
		 		if(index >= 0)
		 			return nodeImports[index][1]
			}
		}
	}
}

export const defaultItem = {
	plugins: [
		typescript(),
		string({
			include: "**/*.ps1"
		}),
		babel({
			babelHelpers: 'bundled',
			extensions: ['.js', '.ts'],
			comments: false,
		}),
		commonjs(),
		nodeResolve(),
		customPlugin(),
		customPolyfill(),
	]
}

export default files.map(i => {
	return {
		...defaultItem,
		...{
			input: i[0],
			output: {
				file: i[1],
				format: "es"
			}
		}
	}
})
