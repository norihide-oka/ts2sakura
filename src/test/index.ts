let items = [
	"1:あああ",
	"2:いいい",
	"3:ううう",
]

Editor.TraceOut(items.map(i => `${i}/${i}`).join("\n"), 0)
