import { readFileSync, readdirSync } from 'fs'
import { resolve, relative } from "path"

let wshFiles = []
let nodeFiles = []
if(process.env.FROM && process.env.TO)
{
	wshFiles.push([process.env.FROM, process.env.TO])
}
else
{
	const current = "./"
	const dir = "./src/ts"
	const dist = "./dist"
	const lib = "lib"
	const ext = /\.ts$/
	function readdir(dir)
	{
		return readdirSync(dir, {withFileTypes: true})
			.filter(i => i.name !== lib && (i.isDirectory() || ext.test(i.name)))
			.map(i => i.isDirectory() ? readdir(resolve(dir, i.name)) : resolve(dir, i.name))
			.flat()
	}
	const makeFileArray = (item) => [
		resolve(dir, item),
		resolve(dist, item.replace(ext, ".js")),
	].map(i => `./${relative(current, i).replace(/\\/g, "/")}`)
	let allFiles = readdir(dir) 
		.map(i => relative(dir, i).replace(/\\/g, "/"))
	wshFiles.push(...allFiles
		.map(makeFileArray)
	)
}

const types = [
	"./src/types/index.d.ts"
]
const typeReg = /declare +module +['"]([^'"]+)['"].*$/g
let contents = types.map(
	i => readFileSync(i)
		.toString()
		.replace(/\r\n/g, "\n")
		.split("\n")
		.filter(i => typeReg.test(i))
		.map(i => i.replace(typeReg, (p0, p1) => p1))
).flat()

export {
	wshFiles,
	nodeFiles,
	contents,
}
