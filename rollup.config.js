import typescript from "@rollup/plugin-typescript"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
import { string } from "rollup-plugin-string"
import { jscript } from "./src/rollup/jscript.js"
import { readdirSync } from 'fs'
import { resolve, relative } from "path"

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
		jscript(),
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
