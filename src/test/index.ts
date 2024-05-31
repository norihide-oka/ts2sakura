let items = [
	"1:あああ",
	"2:いいい",
	"3:ううう",
]

WScript.Echo(items.map(i => `${i}/${i}`).join("\n"))
