import typescript from "@rollup/plugin-typescript"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
import { existsSync, readFileSync, writeFileSync } from 'fs'
import encoder from 'iconv-lite'
const { encode } = encoder

let files = []
if(process.env.FROM && process.env.TO)
{
	files.push([process.env.FROM, process.env.TO])
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
