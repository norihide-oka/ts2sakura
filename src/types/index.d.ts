declare var process = {
	argv: string,
	argv0: string,
	cwd: string,
}

type ConsoleMessage = (msg: string) => void
declare var console = {
	log: ConsoleMessage,
	error: ConsoleMessage,
}

type JsonParse = (value: string) => any
type JsonStringify = (value: any, caller: null, indent: number) => string
declare var JSON = {
	parse: JsonParse,
	stringify: JonStringify,
}

declare module '*.ps1' {
	const content: string;
	export default content;
}