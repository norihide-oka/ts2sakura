var console = {
	log: function log(msg) {
		return WScript.StdOut.WriteLine(msg);
	},
	error: function error(msg) {
		return WScript.StdErr.WriteLine(msg);
	}
};