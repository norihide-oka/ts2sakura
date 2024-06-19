type File = {
	Name: string,
	DateLastModified: Date,
}

type Folder = {
	Name: string,
	Files: File[],
	SubFolders: Folder[],
	DateLastModified: Date,
}

type ScriptingFileSystemObject = {
	getFolder: (path: string) => Folder,
	getFile: (path: string) => File,
	FileExists: (path: string) => boolean,
	FolderExists: (path: string) => boolean,
}



const fso = <ScriptingFileSystemObject>new ActiveXObject("Scripting.FileSystemObject")

export default fso