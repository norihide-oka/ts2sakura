import typescript from "@rollup/plugin-typescript"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
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
			let buf = readFileSync(options.file)
			buf = encode(buf.toString(), "SJIS")
			writeFileSync(options.file, buf)
			console.log(`file [${options.file}] convert encoding utf-8 to shift-jis`)
			return
		}
	  }
	}
  }


export const defaultItem = {
	plugins: [
		typescript(),
		babel({
			babelHelpers: 'bundled',
			extensions: ['.js', '.ts'],
		}),
		commonjs(),
		nodeResolve(),
		customPlugin(),
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
