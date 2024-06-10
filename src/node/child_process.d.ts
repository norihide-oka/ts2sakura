declare type EXEC_SYNC_OPTION = {
	//cwd?: string,
	input?: string,
	//stdio?: string,
	//env?: any,
	//shell?: string,
	//uid?: numner,
	//gid?: number,
	//timeout?: number,
	//killSignal?: string | number,
	//maxBuffer?: number,
	//encoding?: string,
	//windowsHide?: boolean,
}

declare type CommandResult = {
	Terminate: () => void,
	ExitCode: number,
	ProcessID: number,
	Status: number,
	StdIn: { WriteLine: (text: string) => void },
	StdOut: { ReadAll: () => string },
	StdErr: { WriteLine: (text: string) => void },
}
declare type ShellCommand = {
	Exec(cmd: string): CommandResult,
}

declare function GetShell(): ShellCommand

export declare function execSync(command: string, options: EXEC_SYNC_OPTION)