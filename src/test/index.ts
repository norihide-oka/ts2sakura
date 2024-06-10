let items = [
	"1:あああ",
	"2:いいい",
	"3:ううう",
]

items = items.map((v, i) => `${i}-${v}`)
items = items.concat(items)
items = items.filter((v, i) => i < 3)
//items = [items, items].flat()
console.log(items.join("-"))
items = items.slice(1, 3)
console.log(items.join("-"))
//items.copyWithin(0, 1, 2)
let item = items.find((v, i, a) => a[0] === v)
let index = items.indexOf(items[0])
index = items.findIndex((v, i, a) => a[2] === v)
index = items.lastIndexOf(items[0])
items.forEach((v, i, a) => console.log(`${i} ${v}`))
let text = `${index.toString()} ${item} ${items.join(" ")}`
text = items.reduce((p, v, i, a) => { console.log(`[${p}] ${v} ${i}`);return p + v})

//item = JSON.parse(`{ "test": "a" }`)

// let result = Array.isArray(items)
// console.log(result.toString())
// result = Array.isArray({})
// console.log(result.toString())
// console.log(text)
//;
//[[["a", "b"]], [["c", "d"]]].flat(2).forEach(i => console.log(i))
//console.log(process.argv)

//console.log(WScript.Arguments)
console.log(" a ".trimEnd());
console.log(" a ".trimStart());
console.log(" a ".trim());
let reg = new RegExp("tesat")
console.log(reg.test("test/test").toString())
console.log(JSON.stringify(JSON.parse('{"a": "ああ",\n "b": "bb"}'), null, 4))
//console.log("a".charCodeAt(0));
//console.log("a".repeat(10))
//console.log(Object.prototype.toString.call(undefined))