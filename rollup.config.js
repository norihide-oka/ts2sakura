import typescript from "@rollup/plugin-typescript"
import babel from "@rollup/plugin-babel"
import commonjs from "@rollup/plugin-commonjs"
import nodeResolve from "@rollup/plugin-node-resolve"
import { string } from "rollup-plugin-string"
import cleanup from 'rollup-plugin-cleanup';
import { jscript } from "./src/rollup/jscript.js"
import { wshFiles, nodeFiles, contents } from "./src/rollup/files.js"

const plugins = {
	typescript: typescript(),
	strings: string({
		include: contents.map(i => ["**", i].join("/"))
	}),
	commonjs: commonjs(),
	nodeResolve: nodeResolve(),
	cleanup: cleanup(),
	jscript: jscript({
		silent: true,
		forceEmpty: false
	}),
	babel: babel({
		babelHelpers: 'bundled',
		extensions: ['.js', '.ts'],
		comments: false,
		presets: [
			[
				"@babel/preset-env",
				{
					modules: false,
					targets: { "ie": 8 },
					loose: true,
					useBuiltIns: "usage",
					corejs: 3,
				}
			]
		]
	}),
}

const wshItem = {
	plugins: [
		plugins.typescript,
		plugins.strings,
		plugins.babel,
		plugins.commonjs,
		plugins.nodeResolve,
		plugins.jscript,
	]
}

const nodeItem = {
	plugins: [
		plugins.typescript,
		plugins.strings,
		plugins.commonjs,
		plugins.nodeResolve,
		plugins.cleanup,
	]
}

function make(item, paths)
{
	return {
		...item,
		input: paths[0],
		output: { file: paths[1], format: "es" },
	}
}

export default [
	wshFiles.map(i => make(wshItem, i)),
	nodeFiles.map(i => make(nodeItem, i))
].flat()
